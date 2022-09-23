// Import BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Front from "./components/Front";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Showcase from "./components/Pages/Showcase";
import Navbar from "./components/Navbar";
// Css
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
