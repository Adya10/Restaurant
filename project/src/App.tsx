import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import TourGroupPage from './pages/TourGroupPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import JobsPage from './pages/JobsPage';
import ImpressumPage from './pages/ImpressumPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/tour" element={<TourGroupPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App