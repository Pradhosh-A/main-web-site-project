import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Career from './pages/Career';
import Vlogs from './pages/Vlogs';
import Apply from './pages/Apply';
import Footer from './components/Footer';

// Main Application Component
function App() {
  return (
    <div className="app-container">
      <nav className="navbar glass">
        <div className="nav-brand">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/image/ChatGPT Image May 28, 2026, 12_23_47 PM.png" 
              alt="AQC Logo" 
              style={{ height: '60px', width: 'auto', marginRight: '8px' }} 
            />
            <span style={{ color: '#f47d31', fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-1px', display: 'flex', alignItems: 'baseline' }}>
              AQC
            </span>
            <span style={{ color: '#ccc', fontSize: '0.9rem', fontWeight: '400', borderLeft: '1px solid #444', paddingLeft: '10px', display: 'flex', flexDirection: 'column', marginLeft: '10px', lineHeight: '1.2' }}>
              <span>Metal Fab</span>
              <span>Corporation</span>
            </span>
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/vlogs">Vlogs & Updates</NavLink>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
