import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAdminAuth from '../../components/admin/Admin/useAdminAuth';
import './adminpage.css';

function getLoginErrorKey(error) {
  if (error?.code === 'notAdministrator') return 'notAdministrator';
  if (error?.code === 401) return 'invalidCredentials';
  if (error?.code === 400) return 'loginRequestRejected';
  if (error instanceof TypeError) return 'networkError';
  return 'loginFailed';
}

export default function AdminPage() {
  const { t } = useTranslation('admin');
  const { user, status, error: authError, login } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');
    try {
      await login(email, password);
      setPassword('');
    } catch (error) {
      setFormError(getLoginErrorKey(error));
      setPassword('');
    } finally {
      setSubmitting(false);
    }
  };

  const busy = status === 'checking' || status === 'loading';

  if (status === 'authenticated' && user) {
    return <Navigate to="/admin/blog" replace />;
  }

  return (
    <main className="admin-shell">
      <section className="admin-card" aria-live="polite">
        {busy && <div className="admin-state" role="status">{t('loading')}</div>}

        {!busy && (
          <>
            <span className="admin-eyebrow">{t('badge')}</span>
            <h1>{t('loginTitle')}</h1>
            <p className="admin-intro">{t('loginDescription')}</p>
            {(status === 'configuration-error' || authError === 'sessionCheckFailed') && (
              <p className="admin-error" role="alert">{t(status === 'configuration-error' ? 'adminConfiguration' : 'sessionCheckFailed')}</p>
            )}
            {(authError === 'notAdministrator' || formError) && (
              <p className="admin-error" role="alert">{t(formError || authError)}</p>
            )}
            {status !== 'configuration-error' && (
              <form className="admin-form" onSubmit={submit}>
                <label htmlFor="admin-email">{t('email')}</label>
                <input id="admin-email" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="admin-password">{t('password')}</label>
                <input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="admin-button" type="submit" disabled={submitting || busy}>
                  {submitting ? t('signingIn') : t('signIn')}
                </button>
              </form>
            )}
          </>
        )}
      </section>
    </main>
  );
}
