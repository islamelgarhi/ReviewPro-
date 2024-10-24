import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import RestaurantDashboard from './components/restaurant/RestaurantDashboard';
import RentalDashboard from './components/RentalDashboard';
import FreeTrial from './components/onboarding/FreeTrial';
import GetStarted from './components/onboarding/GetStarted';
import ScheduleDemo from './components/onboarding/ScheduleDemo';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import Documentation from './components/support/Documentation';
import Guides from './components/support/Guides';
import Contact from './components/support/Contact';
import Blog from './components/Blog';
import BlogPostDetail from './components/blog/BlogPostDetail';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/case-studies/CaseStudyDetail';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Pricing />
            </>
          } />
          <Route path="/restaurant" element={<RestaurantDashboard />} />
          <Route path="/short-term-rentals" element={<RentalDashboard />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;