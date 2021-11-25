import { React, } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./pages/about";
import LandingPage from './pages/landingPage';
import Vote from "./pages/votePortal";


function App() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', 'assets/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
    </div>
  );
}

export default App;
