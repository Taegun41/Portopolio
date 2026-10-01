import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

/**
 * 섹션 순서: 소개(+대표작 미리보기) → About Me → Skills → 작품
 * 첫 화면의 대표작 미리보기 카드로 대표작을 먼저 보여주고,
 * 상세 작품 목록은 "나 → 기술 → 작품" 소개 흐름의 마지막에 배치했습니다.
 */
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
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 박태건</p>
          <div className="footer-links">
            <a href="https://github.com/Taegun41" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:teagun41@gmail.com">teagun41@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
