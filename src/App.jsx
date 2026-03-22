import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Appspage from './pages/Appspage';
import Supportpage from './pages/Supportpage';
import Policypage from './pages/Policypage';
import Integritypage from './pages/Integritypage';
import Termsspage from './pages/Termspage';
import AboutMommiPage from './pages/AboutMommiPage';
import SecurityPage from './pages/SecurityPage';
import FAQpage from './pages/FAQpage';
import ScrollToTop from './components/Helpers/ScrollToTop';

function App() {
  return (
    <div>
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
        <Route path="/faq" element={<FAQpage/>}/>
      </Routes>

    </div>
  );
}

export default App;