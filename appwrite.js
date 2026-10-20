import { Client, Account, Storage, TablesDB } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const appwriteAdminId = import.meta.env.VITE_APPWRITE_ADMIN_ID;
export const appwritePressBucketId = import.meta.env.VITE_APPWRITE_PRESS_BUCKET_ID || '6ad64cee00255fa713b3';

// Database and table IDs are public client configuration, not secrets.
export const appwriteDatabaseId = '6ad6446f002df712c9da';
export const appwritePressTableId = '6ad644a0002eb5668698';
export const tablesDB = new TablesDB(client);
export const storage = new Storage(client);
