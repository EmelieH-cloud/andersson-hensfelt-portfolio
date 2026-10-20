import Texpo1 from '../../../assets/pressrum/texpo.jpg';
import Texpo2 from '../../../assets/pressrum/texo2.jpg';
import SVTPress from '../../../assets/pressrum/press.png';
import SR2 from '../../../assets/pressrum/vi-sr.jpg';
import SR from '../../../assets/pressrum/emeliesr.jpg';
import Techella2 from '../../../assets/pressrum/föreläsning2.jpeg';
import { appwritePressBucketId, storage } from '../../../../appwrite';

const imageAssets = {
  svt: [SVTPress],
  texpo: [Texpo1, Texpo2],
  sr: [SR, SR2],
  techella: [Techella2],
};

export function getPressPostImages(imageKey) {
  if (!imageKey || typeof imageKey !== 'string') return [];

  return imageKey.split(',').flatMap((key) => {
    const normalizedKey = key.trim();
    if (imageAssets[normalizedKey]) return imageAssets[normalizedKey];
    if (normalizedKey.startsWith('appwrite:') && appwritePressBucketId) {
      const fileId = normalizedKey.slice('appwrite:'.length);
      return fileId ? [storage.getFileView({ bucketId: appwritePressBucketId, fileId })] : [];
    }
    if (/^https?:\/\//i.test(normalizedKey)) return [normalizedKey];
    return [];
  });
}
