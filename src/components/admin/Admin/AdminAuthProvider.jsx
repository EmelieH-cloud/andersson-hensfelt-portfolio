import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { account, appwriteAdminId } from '../../../../appwrite';
import { AdminAuthContext } from './AdminAuthContext.jsx';

function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('checking');
  const [error, setError] = useState('');

  const verifyUser = useCallback(async (candidate) => {
    if (!appwriteAdminId) {
      setUser(null);
      setStatus('configuration-error');
      setError('adminConfiguration');
      return false;
    }

    if (candidate.$id !== appwriteAdminId) {
      try {
        await account.deleteSession({ sessionId: 'current' });
      } catch {
        // Session may already have expired.
      }
      setUser(null);
      setStatus('unauthenticated');
      setError('notAdministrator');
      return false;
    }

    setUser(candidate);
    setStatus('authenticated');
    setError('');
    return true;
  }, []);

  useEffect(() => {
    let active = true;

    account.get().then((candidate) => {
      if (active) verifyUser(candidate);
    }).catch((err) => {
      if (!active) return;
      setUser(null);
      setStatus('unauthenticated');
      // 401 is expected when no Appwrite session exists.
      if (err?.code !== 401) setError('sessionCheckFailed');
    });

    return () => { active = false; };
  }, [verifyUser]);

  const login = useCallback(async (email, password) => {
    setStatus('loading');
    setError('');
    try {
      await account.createEmailPasswordSession({ email, password });
      const candidate = await account.get();
      if (!await verifyUser(candidate)) {
        throw Object.assign(new Error('notAdministrator'), { code: 'notAdministrator' });
      }
      return true;
    } catch (err) {
      if (err?.code !== 'notAdministrator') {
        setUser(null);
        setStatus('unauthenticated');
      }
      throw err;
    }
  }, [verifyUser]);

  const logout = useCallback(async () => {
    setUser(null);
    setStatus('unauthenticated');
    setError('');
    await account.deleteSession({ sessionId: 'current' });
  }, []);

  const value = useMemo(() => ({ user, status, error, login, logout }), [user, status, error, login, logout]);
  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

AdminAuthProvider.propTypes = { children: PropTypes.node.isRequired };

export default AdminAuthProvider;
