import { Route, Routes } from 'react-router-dom';
import AppStoreRedirectPage from './pages/redirects/AppStoreRedirectPage';
import GooglePlayRedirectPage from './pages/redirects/GooglePlayRedirectPage';
import Homepage from './pages/homepage/Homepage';
import Aboutpage from './pages/business-content/Aboutpage';
import Appspage from './pages/business-content/Appspage';
import Supportpage from './pages/support/Supportpage';
import Policypage from './pages/support/Policypage';
import Integritypage from './pages/support/Integritypage';
import Termsspage from './pages/support/Termspage';
import AboutMommiPage from './pages/business-content/AboutMommiPage';
import SecurityPage from './pages/support/SecurityPage';
import FAQpage from './pages/support/FAQpage';
import GuidePage from './pages/support/GuidePage';
import ChildSafetyPolicyPage from './pages/support/ChildSafetyPolicypage';
import PressRoomPage from './pages/business-content/PressroomPage';
import Collabspage from './pages/business-content/Collabspage';
import ScrollToTop from './components/shared/Helpers/ScrollToTop';
import AdminAuthProvider from './components/admin/Admin/AdminAuthProvider';
import AdminStatusBar from './components/admin/Admin/AdminStatusBar';
import useAdminAuth from './components/admin/Admin/useAdminAuth';
import AdminPage from './pages/admin/AdminPage';
import AdminBlogPage from './pages/admin/AdminBlogPage';

function AppContent() {
  const { status, user } = useAdminAuth();
  const isAdmin = status === 'authenticated' && Boolean(user);

  return (
    <div className={`app-root${isAdmin ? ' admin-authenticated' : ''}`}>
      {isAdmin && <AdminStatusBar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/apps" element={<Appspage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/policy" element={<Policypage />} />
        <Route path="/integrity" element={<Integritypage />} />
        <Route path="/terms" element={<Termsspage />} />
        <Route path="/safety" element={<SecurityPage />} />
        <Route path="/about-mommi" element={<AboutMommiPage />} />
        <Route path="/faq" element={<FAQpage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/child-safety-policy" element={<ChildSafetyPolicyPage />} />
        <Route path="/pressroom" element={<PressRoomPage />} />
        <Route path="/collabs" element={<Collabspage />} />
        <Route path="/app-store" element={<AppStoreRedirectPage />} />
        <Route path="/google-play" element={<GooglePlayRedirectPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/blog" element={<AdminBlogPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AdminAuthProvider>
      <AppContent />
    </AdminAuthProvider>
  );
}

export default App;
