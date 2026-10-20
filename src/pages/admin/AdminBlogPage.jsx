import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ID, Permission, Query, Role } from 'appwrite';
import { FiChevronDown } from 'react-icons/fi';
import NavBar from '../../components/shared/navigation/Navbar/navbar';
import useAdminAuth from '../../components/admin/Admin/useAdminAuth';
import { appwriteAdminId, appwriteDatabaseId, appwritePressBucketId, appwritePressTableId, storage, tablesDB } from '../../../appwrite';
import PressPostPreview from '../../components/business-content/PressRoom/PressPostPreview';
import './adminblogpage.css';

export default function AdminBlogPage() {
  const { t } = useTranslation('admin');
  const { user, status } = useAdminAuth();
  const [post, setPost] = useState({ titleSv: '', titleEn: '', textSv: '', textEn: '', date: '', link: '', imageKey: '' });
  const [imageFiles, setImageFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveState, setSaveState] = useState('');
  const updatePost = (field) => (event) => setPost((current) => ({ ...current, [field]: event.target.value }));

  const savePost = async (event) => {
    event.preventDefault();
    setSaveState('');

    if (!post.titleSv.trim() || !post.titleEn.trim() || !post.textSv.trim() || !post.textEn.trim() || !post.date) {
      setSaveState('requiredFields');
      return;
    }
    if (imageFiles.length && !appwritePressBucketId) {
      setSaveState('storageConfigurationError');
      return;
    }
    setSaving(true);
    const createdRows = [];
    const uploadedFiles = [];

    try {
      for (const file of imageFiles) {
        const fileId = ID.unique();
        await storage.createFile({
          bucketId: appwritePressBucketId,
          fileId,
          file,
          permissions: [
            Permission.read(Role.any()),
            Permission.delete(Role.user(appwriteAdminId)),
          ],
        });
        uploadedFiles.push(fileId);
      }

      const { rows: existingRows } = await tablesDB.listRows({
        databaseId: appwriteDatabaseId,
        tableId: appwritePressTableId,
        queries: [Query.limit(100)],
        total: false,
      });
      const nextOrder = Math.max(0, ...existingRows.map((row) => Number(row.order) || 0)) + 1;

      const common = {
        date: post.date,
        link: post.link.trim(),
        imageKey: [
          post.imageKey,
          ...uploadedFiles.map((fileId) => `appwrite:${fileId}`),
        ].filter(Boolean).join(','),
        order: nextOrder,
      };

      const localizedRows = [
        {
          language: 'sv',
          title: post.titleSv.trim(),
          description: post.textSv.trim(),
        },
        {
          language: 'en',
          title: post.titleEn.trim(),
          description: post.textEn.trim(),
        },
      ];
      for (const localizedPost of localizedRows) {
        const created = await tablesDB.createRow({
          databaseId: appwriteDatabaseId,
          tableId: appwritePressTableId,
          rowId: ID.unique(),
          data: { ...common, ...localizedPost },
        });
        createdRows.push(created);
      }

      setSaveState('saved');
      setPost({ titleSv: '', titleEn: '', textSv: '', textEn: '', date: '', link: '', imageKey: '' });
      setImageFiles([]);
    } catch (error) {
      await Promise.allSettled([
        ...createdRows.map((row) => tablesDB.deleteRow({
          databaseId: appwriteDatabaseId,
          tableId: appwritePressTableId,
          rowId: row.$id,
        })),
        ...uploadedFiles.map((fileId) => storage.deleteFile({ bucketId: appwritePressBucketId, fileId })),
      ]);
      setSaveState(error?.code === 401 || error?.code === 403 ? 'savePermissionError' : 'saveError');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'checking' || status === 'loading') {
    return <main className="blog-admin-loading" role="status">{t('loading')}</main>;
  }

  if (status !== 'authenticated' || !user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="blog-admin-page">
      <NavBar />
      <main className="blog-editor-shell">
        <header className="blog-editor-header">
          <span className="blog-editor-eyebrow">{t('badge')}</span>
          <h1>{t('pressEditorTitle')}</h1>
          <p>{t('editorDescription')}</p>
        </header>

        <form className="blog-editor-form" onSubmit={savePost}>
          <section className="blog-editor-card" aria-labelledby="post-content-heading">
            <h2 id="post-content-heading">{t('postContent')}</h2>

            <div className="press-language-grid">
              <div className="press-language-fields">
                <h3>{t('swedish')}</h3>
                <label htmlFor="post-title-sv">{t('postTitle')}</label>
                <input id="post-title-sv" value={post.titleSv} onChange={updatePost('titleSv')} placeholder={t('postTitlePlaceholder')} required />
                <label htmlFor="post-body-sv">{t('postBody')}</label>
                <textarea id="post-body-sv" rows="9" value={post.textSv} onChange={updatePost('textSv')} placeholder={t('postBodyPlaceholder')} required />
              </div>
              <div className="press-language-fields">
                <h3>{t('english')}</h3>
                <label htmlFor="post-title-en">{t('postTitle')}</label>
                <input id="post-title-en" value={post.titleEn} onChange={updatePost('titleEn')} placeholder={t('postTitlePlaceholder')} required />
                <label htmlFor="post-body-en">{t('postBody')}</label>
                <textarea id="post-body-en" rows="9" value={post.textEn} onChange={updatePost('textEn')} placeholder={t('postBodyPlaceholder')} required />
              </div>
            </div>
          </section>

          <aside className="blog-editor-card blog-editor-settings" aria-labelledby="post-settings-heading">
            <h2 id="post-settings-heading">{t('postSettings')}</h2>

            <label htmlFor="post-date">{t('pressDate')}</label>
            <input id="post-date" type="date" value={post.date} onChange={updatePost('date')} required />

            <label htmlFor="post-link">{t('externalLink')}</label>
            <input id="post-link" type="url" value={post.link} onChange={updatePost('link')} placeholder="https://" />

            <label htmlFor="post-image-key">{t('pressImages')}</label>
            <select id="post-image-key" value={post.imageKey} onChange={updatePost('imageKey')}>
              <option value="">{t('noPressImage')}</option>
              <option value="techella">Techella</option>
              <option value="sr">Sveriges Radio</option>
              <option value="svt">SVT</option>
              <option value="texpo">TechXpo</option>
            </select>

            <label htmlFor="post-image-files">{t('uploadPressImages')}</label>
            <input
              id="post-image-files"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => setImageFiles(Array.from(event.target.files || []))}
            />
            {imageFiles.length > 0 && (
              <ul className="press-selected-files" aria-live="polite">
                {imageFiles.map((file) => <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>)}
              </ul>
            )}
          </aside>

          <details className="press-preview-disclosure">
            <summary>
              <span>{t('previewToggle')}</span>
              <FiChevronDown aria-hidden="true" />
            </summary>
            <div className="press-preview-content">
              <h2>{t('previewTitle')}</h2>
              <p>{t('previewDescription')}</p>
              <div className="press-preview-language">
                <h3>{t('swedish')}</h3>
                <PressPostPreview
                  title={post.titleSv || t('previewTitlePlaceholder')}
                  description={post.textSv || t('previewBodyPlaceholder')}
                  date={post.date}
                  link={post.link}
                  imageKey={post.imageKey}
                  imageFiles={imageFiles}
                />
              </div>
              <div className="press-preview-language">
                <h3>{t('english')}</h3>
                <PressPostPreview
                  title={post.titleEn || t('previewTitlePlaceholder')}
                  description={post.textEn || t('previewBodyPlaceholder')}
                  date={post.date}
                  link={post.link}
                  imageKey={post.imageKey}
                  imageFiles={imageFiles}
                />
              </div>
            </div>
          </details>

          <div className="blog-editor-actions">
            <div>
              <p>{t('editorBackendNote')}</p>
              {saveState && <p className={`blog-save-message ${saveState === 'saved' ? 'is-success' : 'is-error'}`} role={saveState === 'saved' ? 'status' : 'alert'}>{t(saveState)}</p>}
            </div>
            <button type="submit" className="blog-save-button" disabled={saving}>{saving ? t('savingPressPost') : t('savePressPost')}</button>
          </div>
        </form>
      </main>
    </div>
  );
}
