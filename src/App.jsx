import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import NoticePage from './pages/NoticePage';
import WebinarPage from './pages/WebinarPage';
import FAQPage from './pages/FAQPage';
import AdmissionPage from './pages/AdmissionPage';
import ArticlesPage from './pages/ArticlesPage';
import FatwaPage from './pages/FatwaPage';
import AboutPage from './pages/AboutPage';
import DirectorPage from './pages/DirectorPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/webinar" element={<WebinarPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/fatwa" element={<FatwaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/director" element={<DirectorPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
