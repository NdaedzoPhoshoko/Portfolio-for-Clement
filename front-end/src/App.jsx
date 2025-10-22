import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import WebsiteDown from "./components/websiteDown/WebsiteDown";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home/Home";
import Journey from "./pages/about/journey/Journey";
import Resume from "./pages/about/resume/Resume";
import Achievements from "./pages/about/achievement/Achievements";

import Blog from "./pages/blog/Blog";
// import Item from "./pages/blog/posts/item/Item";
import ViewItem from "./pages/blog/posts/view_item/ViewItem";
import Tutorials from "./pages/blog/tutorials/Tutorials";

import Contact from "./pages/contact/Contact";

// Maintenance mode flag - set to true when site is under maintenance
const MAINTENANCE_MODE = false;

// Placeholder components for routes
// const HireMe = () => <h2>Hire Me Page</h2>;

// Component to handle page transitions
function AppContent() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Initial page load effect
  useEffect(() => {
    // Start with fade in on first load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(initialTimer);
  }, []);

  // Page navigation effect
  useEffect(() => {
    // Fade out
    setIsVisible(false);
    
    // After fade out completes, fade in the new page
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Set per-route document titles
  useEffect(() => {
    const baseTitle = "Ndaedzo Clement Phoshoko";
    const titleByPath = {
      "/": `Home | ${baseTitle}`,
      "/journey": `Journey | ${baseTitle}`,
      "/resume": `Resume | ${baseTitle}`,
      "/achievements": `Achievements | ${baseTitle}`,
      "/blog": `Blog | ${baseTitle}`,
      "/tutorials": `Tutorials | ${baseTitle}`,
      "/contact": `Contact | ${baseTitle}`,
    };
    let nextTitle = titleByPath[location.pathname] || baseTitle;
    if (location.pathname.startsWith("/blog/view/")) {
      nextTitle = `Blog Post | ${baseTitle}`;
    }
    document.title = nextTitle;
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div 
        className="app-content"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/view/:id" element={<ViewItem />} />
          <Route path="/tutorials" element={<Tutorials />} />
          {/* <Route path="/hire" element={<HireMe />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  // If maintenance mode is enabled, show WebsiteDown component
  if (MAINTENANCE_MODE) {
    return <WebsiteDown />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
