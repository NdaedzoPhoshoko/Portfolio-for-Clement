import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
