import { RiShieldCheckLine } from 'react-icons/ri';
import useAdminAuth from './useAdminAuth';
import './adminstatusbar.css';

export default function AdminStatusBar() {
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout().catch(() => {
      // The authenticated UI is hidden immediately; Appwrite errors are not logged.
    });
  };

  return (
    <aside className="admin-status-bar" aria-label="Administratörsstatus">
      <div className="admin-status-content">
        <RiShieldCheckLine className="admin-status-icon" aria-hidden="true" />
        <div className="admin-status-copy">
          <span className="admin-status-title">Administratörsläge</span>
          <span className="admin-status-description">Du är inloggad som admin</span>
        </div>
        <button className="admin-status-logout" type="button" onClick={handleLogout}>
          Logga ut
        </button>
      </div>
    </aside>
  );
}
