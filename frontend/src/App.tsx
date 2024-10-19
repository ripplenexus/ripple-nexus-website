import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Animations.css'; //animation classes
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ContactUsPage from './pages/ContactUsPage';
import ConfirmationPage from './pages/ConfirmationPage';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import ApplyNow from './pages/ApplyNow';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/about" element={<ContactUsPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        {/* new routes */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:category" element={<Services/>} />
        <Route path="/apply" element={<ApplyNow/>} />

        <Route path="/career" element={<CareerPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

