import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Journey from "./pages/about/journey/Journey";

// Placeholder components for routes
const BlogWorld = () => <h2>Blog World Page</h2>;
const HireMe = () => <h2>Hire Me Page</h2>;
const ContactMe = () => <h2>Contact Me Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/blog" element={<BlogWorld />} />
        <Route path="/hire" element={<HireMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
