import React from 'react';
import './Intro.css';

const Intro: React.FC = () => {
  return (
    <section id="intro" class="intro-section section-row" aria-labelledby="intro-title">
      <div class="intro-content">
        <p class="eyebrow">컴퓨터공학 전공 · 소프트웨어 개발</p>
        <h1 id="intro-title" class="intro-title">
          안녕하세요.<br />
          생활 밀접 프로그래머<br />
          박태건입니다.
        </h1>
        <p class="introduction">
          삶과 밀접한 프로그램을 만드는 것을 지향합니다.<br />
          일상 생활에서 발생하는 사소한 불편함을 해결 할 프로그램을 만들고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Intro;