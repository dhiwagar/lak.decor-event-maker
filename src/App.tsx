import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { BackToTop } from './components/common/BackToTop';

// Pages
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ServiceDetailsPage } from './pages/ServiceDetails';
import { GalleryPage } from './pages/Gallery';
import { OurWorkPage } from './pages/OurWork';
import { ProjectDetailsPage } from './pages/ProjectDetails';
import { TestimonialsPage } from './pages/Testimonials';
import { ContactPage } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#29251F] selection:bg-[#B18B59] selection:text-white">
        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/our-work/:slug" element={<ProjectDetailsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Deep Charcoal Luxury Footer */}
        <Footer />

        {/* Floating Interactive Elements */}
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
