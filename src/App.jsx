import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutpage from './pages/Aboutpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
