import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutpage from './pages/Aboutpage';
import Appspage from './pages/Appspage';
import Supportpage from './pages/Supportpage';
import Policypage from './pages/Policypage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/apps" element={<Appspage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/policy" element={<Policypage/>} />
      </Routes>
    </div>
  );
}

export default App;
