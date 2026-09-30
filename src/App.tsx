import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Header />
      <main className="container" id="main">
        <Intro />
        
        <div className="sketch-divider"></div>
        
        <AboutMe />
        
        <div className="sketch-divider"></div>
        
        <Skills />
        
        <div className="sketch-divider"></div>
        
        <Projects />
      </main>
      <footer className="container section-row" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <p style={{ color: 'var(--muted)', fontSize: '13px' }}>2026 · 박태건</p>
      </footer>
    </div>
  );
};

export default App;