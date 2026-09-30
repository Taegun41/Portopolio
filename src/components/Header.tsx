import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="site-name" href="#intro">
          박태건 <span>PORTFOLIO</span>
        </a>
        <nav className="site-nav" aria-label="메인 네비게이션">
          <a href="#intro">Info</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;