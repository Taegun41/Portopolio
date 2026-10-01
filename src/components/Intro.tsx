import React from 'react';
import { FaArrowDown, FaEnvelope, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Intro.css';

const GITHUB_URL = 'https://github.com/Taegun41';
const EMAIL = 'teagun41@gmail.com';

// 첫 화면 대표작 미리보기 (스크린샷은 public/images/ai-news.png — 없으면 남색 배경만 표시)
const featured = {
  title: 'AI 뉴스 분석 플랫폼',
  oneLiner: '매일 아침 주요 뉴스를 수집해 분야별 핵심 이슈로 묶어 보여주고, 주식 특징 종목까지 함께 정리하는 웹 서비스',
  image: 'images/ai-news.png',
};

const Intro: React.FC = () => {
  return (
    <section id="intro" className="intro-section section-row" aria-labelledby="intro-title">
      {/* 왼쪽: 내가 누구인지 / 오른쪽: 대표작 — 첫 화면에서 둘 다 보이게 배치 */}
      <div className="intro-content">
        <p className="eyebrow">부산대학교 컴퓨터공학과 · 웹 서비스 개발</p>
        <h1 id="intro-title" className="intro-title">
          안녕하세요.
          <br />
          생활 밀접 프로그래머
          <br />
          <strong>박태건</strong>입니다.
        </h1>
        <p className="introduction">
          일상에서 겪는 사소한 불편함을 데이터와 웹으로 해결하는 데 관심이 있습니다.
          흩어진 정보를 모아 한눈에 보여주는 서비스를 만들고 있습니다.
        </p>

        <div className="intro-actions">
          <a className="intro-btn is-primary" href="#projects">
            <FaArrowDown aria-hidden /> 작품 보기
          </a>
          <a className="intro-btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden /> GitHub
            <FaExternalLinkAlt className="external-icon" aria-hidden />
            <span className="visually-hidden">(새 창에서 열림)</span>
          </a>
          <a className="intro-btn" href={`mailto:${EMAIL}`}>
            <FaEnvelope aria-hidden /> 이메일
          </a>
        </div>
      </div>

      <a className="intro-featured" href="#projects" aria-label={`대표작 ${featured.title} 자세히 보기`}>
        <div className="intro-featured-media">
          <span className="intro-featured-badge">대표작</span>
          <img
            src={featured.image}
            alt=""
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="intro-featured-body">
          <p className="intro-featured-title">{featured.title}</p>
          <p className="intro-featured-desc">{featured.oneLiner}</p>
          <span className="intro-featured-more">
            자세히 보기 <FaArrowDown aria-hidden />
          </span>
        </div>
      </a>
    </section>
  );
};

export default Intro;
