import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Journey from "./pages/about/journey/Journey";
import Post from "./pages/blog/posts/Post";

// Placeholder components for routes
const HireMe = () => <h2>Hire Me Page</h2>;
const ContactMe = () => <h2>Contact Me Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/post" element={<Post />} />
        <Route path="/hire" element={<HireMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
