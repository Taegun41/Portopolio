import React from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectData } from './ProjectCard';
import './Projects.css';
import { FaFolderOpen } from 'react-icons/fa';

/*
 * 작품 목록 — 새 작품(P2, P3 등)은 아래 배열에 같은 형식으로 항목을 추가하면 됩니다.
 * 시연 영상은 public/videos 폴더에 넣고 videoSrc에 'videos/파일이름.mp4'로 적습니다.
 * (영상 파일이 아직 없으면 대표작은 '영상 준비 중', 나머지는 영상 패널 없이 표시됩니다)
 */

// README 팝업 공통 스타일
const metaStyle: React.CSSProperties = { color: 'var(--muted)', fontSize: '14px', marginTop: '-8px' };
const hrStyle: React.CSSProperties = { border: '0', height: '1px', backgroundColor: 'var(--line)', margin: '20px 0' };
const linkStyle: React.CSSProperties = { color: '#3178c6', textDecoration: 'underline', textUnderlineOffset: '3px' };
const preStyle: React.CSSProperties = { background: '#f4f2ec', padding: '16px', borderRadius: '8px', fontSize: '13px', overflowX: 'auto' };

const PROJECT_LIST: ProjectData[] = [
  {
    id: 1,
    isMain: true,
    badgeText: 'Main Project',
    badgeColor: '#2d5545',
    date: '2026.09 - 현재',
    title: 'AI 뉴스 분석 플랫폼',
    features: [
      '매일 06:00 네이버 뉴스 5개 분야를 수집하고, AI가 분야별 핵심 이슈로 묶은 리포트를 자동 생성',
      '최근 7일 기사 키워드 검색, 분야 간 연결 분석(AI 인사이트), 북마크',
      '평일 16:00 코스피·코스닥 상한가·하한가·급등·거래량 상위 종목 정리 및 날짜별 조회',
      '직접 구현: 뉴스 크롤러, 신문형 화면 구성 / AI 도구 활용: Gemini 연동, DB, 주식 페이지, 배포 자동화',
    ],
    linkUrl: 'https://ai-news-plattform.vercel.app',
    techStack: 'Python, BeautifulSoup, Gemini API, FastAPI, Supabase, Next.js, TypeScript, GitHub Actions',
    videoSrc: 'videos/ai-news.mp4',
    readmeContent: (
      <div>
        <h2>AI 뉴스 분석 플랫폼</h2>
        <p style={metaStyle}>2026.09 - 현재 (1인 개인 프로젝트 · AI 코딩 도구 활용)</p>

        <hr style={hrStyle} />

        <h3>🔗 Deployment URL</h3>
        <p>
          <a href="https://ai-news-plattform.vercel.app" target="_blank" rel="noreferrer" style={linkStyle}>
            https://ai-news-plattform.vercel.app ↗
          </a>
          <br />
          <a href="https://github.com/Taegun41/AI_News_Plattform" target="_blank" rel="noreferrer" style={linkStyle}>
            GitHub 저장소 ↗
          </a>
        </p>

        <h3>📌 Summary</h3>
        <p><strong>흩어진 뉴스를 매일 아침 분야별 핵심 이슈로 묶어 보여주는 신문형 뉴스 분석 서비스</strong></p>
        <ul>
          <li>정치·경제·사회·세계·IT/과학 기사를 수집해, 같은 사건을 다룬 기사들을 하나의 이슈로 묶고 많이 다뤄진 순으로 정렬</li>
          <li>최근 7일 기사 검색, 분야 간 연결 분석(AI 인사이트), 전체 이슈 랭킹, 북마크</li>
          <li>주식 페이지: 상한가·하한가·15% 이상 상승·거래량 1000만 이상 종목과 코스피·코스닥 지수, 달력으로 날짜별 조회</li>
        </ul>

        <h3>🙋 My Role</h3>
        <ul>
          <li><strong>직접 구현:</strong> 네이버 뉴스 크롤러(제목·본문·작성일·썸네일 추출), 신문 지면 형태의 화면 구성(메인·분야별·상세 페이지)</li>
          <li><strong>AI 도구(Claude)에 요청해 구현하고 결과를 직접 검증:</strong> Gemini 분석 연결, Supabase 저장, 검색·주식 페이지, Render·Vercel 배포, GitHub Actions 자동 수집</li>
        </ul>

        <h3>🧐 Background</h3>
        <p>
          포털 뉴스는 같은 사건의 기사가 수십 개씩 흩어져 있어 하루의 핵심 흐름을 빠르게 파악하기 어려웠습니다.
          비슷한 기사를 하나의 이슈로 묶고, 많이 다뤄진 순서로 보여주는 '신문 1면' 같은 화면을 목표로 만들었습니다.
        </p>

        <h3>🔍 Meaning</h3>
        <p>
          - <strong>기술적 도전:</strong> 수집(Python) → AI 분석(Gemini) → DB(Supabase) → API(FastAPI) → 화면(Next.js)으로 이어지는 전체 흐름을 직접 배포까지 연결했습니다.
          <br />
          - <strong>문제 해결 ①:</strong> AI 응답 지연·과부하(503)로 검색이 자주 실패 → 검색은 AI 요약 대신 최근 7일 관련 기사를 모두 즉시 보여주는 방식으로 바꾸고, 하루 1번 만드는 리포트에는 대기 후 재시도와 예비 모델을 적용했습니다.
          <br />
          - <strong>문제 해결 ②:</strong> "르노 코리아"처럼 띄어 쓴 검색어가 "르노코리아" 기사를 못 찾는 문제 → 단어별로 나누고 띄어쓰기를 무시해 비교하도록 수정했습니다.
          <br />
          - <strong>문제 해결 ③:</strong> 배포 후 화면의 지수를 증권 앱과 직접 대조하다가, 지수 데이터 출처가 9/17에서 멈춰 10/1 시세가 9/17로 저장된 문제를 발견 → 지수 출처를 바꾸고 날짜 검증 장치를 추가했습니다.
          <br /><br />
          AI가 만든 코드도 실제 데이터로 확인하기 전에는 믿을 수 없다는 것을 배웠습니다.
          앞으로 기사 속 제보·광고 문구를 걸러 검색 정확도를 높이고, 분야 분류 정확도를 개선하려 합니다.
        </p>

        <h3>🛠️ Technology Stack(s)</h3>
        <p>
          <code>Python</code>, <code>BeautifulSoup</code>, <code>FinanceDataReader</code>, <code>Gemini API</code>, <code>FastAPI</code>,{' '}
          <code>Supabase</code>, <code>Next.js</code>, <code>TypeScript</code>, <code>Tailwind CSS</code>,{' '}
          <code>Render</code>, <code>Vercel</code>, <code>GitHub Actions</code>
        </p>

        <h3>⚙️ Setup & Usage</h3>
        <p>배포된 사이트에서 바로 사용할 수 있습니다. 로컬 실행 방법:</p>
        <pre style={preStyle}>
{`# 백엔드 (backend 폴더, .env에 SUPABASE_URL / SUPABASE_KEY / GEMINI_API_KEY 필요)
pip install -r requirement.txt
uvicorn api_server:app --reload --port 8000

# 프론트엔드 (frontend 폴더)
npm install
npm run dev`}
        </pre>
      </div>
    ),
  },
  {
    id: 2,
    isMain: false,
    badgeText: 'Tech-Trends',
    badgeColor: '#3178c6',
    date: '2025',
    title: '개발자 채용 트렌드 대시보드',
    features: [
      '채용 공고 데이터를 기술·연봉·지역별 차트로 시각화',
      '조건 필터·검색, 공고 상세와 비슷한 공고 추천',
    ],
    linkUrl: 'https://taegun41.github.io/Tech-Trends/',
    techStack: 'Next.js, TypeScript, Tailwind CSS, Recharts',
    videoSrc: 'videos/tech-trends.mp4',
    readmeContent: (
      <div>
        <h2>개발자 채용 트렌드 대시보드</h2>
        <p style={metaStyle}>2025 (대학교 과제 · 1인 프로젝트)</p>

        <hr style={hrStyle} />

        <h3>🔗 Deployment URL</h3>
        <p>
          <a href="https://taegun41.github.io/Tech-Trends/" target="_blank" rel="noreferrer" style={linkStyle}>
            https://taegun41.github.io/Tech-Trends/ ↗
          </a>
          <br />
          <a href="https://github.com/Taegun41/Tech-Trends" target="_blank" rel="noreferrer" style={linkStyle}>
            GitHub 저장소 ↗
          </a>
        </p>

        <h3>📌 Summary</h3>
        <p><strong>개발자 채용 공고 데이터를 분석해 기술 트렌드·연봉·지역 분포를 한눈에 보여주는 대시보드</strong></p>
        <ul>
          <li>메인 · 대시보드 · 공고 상세 · 소개 4개 페이지</li>
          <li>기술 스택·연봉·지역 분포 차트(Recharts)와 요약 통계 카드</li>
          <li>조건 필터·검색, 공고 상세 및 비슷한 공고 추천</li>
        </ul>

        <h3>🧐 Background</h3>
        <p>
          취업을 준비하며 어떤 기술이 많이 요구되는지, 연봉과 지역 분포는 어떤지 한 화면에서 비교하고 싶어 만든 대시보드입니다.
          데모용 샘플 데이터(공고 15건)를 사용하며 실제 기업 정보와 다를 수 있습니다.
        </p>

        <h3>🔍 Meaning</h3>
        <p>
          - <strong>기술적 도전:</strong> 필터·통계 계산 로직을 커스텀 훅(useJobFilter, useJobStats)으로 분리해 화면 컴포넌트와 데이터 처리를 나눴습니다.
          <br />
          - <strong>문제 해결:</strong> 서버 없이 동작하도록 정적 사이트로 내보내 GitHub Pages에 배포하면서, 저장소 경로(basePath) 설정을 맞춰 배포 경로 문제를 해결했습니다.
        </p>

        <h3>🛠️ Technology Stack(s)</h3>
        <p>
          <code>Next.js</code>, <code>TypeScript</code>, <code>Tailwind CSS</code>, <code>Recharts</code>, <code>GitHub Actions</code>, <code>GitHub Pages</code>
        </p>

        <h3>⚙️ Setup & Usage</h3>
        <pre style={preStyle}>
{`git clone https://github.com/Taegun41/Tech-Trends.git
npm install
npm run dev`}
        </pre>
      </div>
    ),
  },
  {
    id: 3,
    isMain: false,
    badgeText: '대학 다이어리',
    badgeColor: '#d97706',
    date: '2025',
    title: '부산대 학생용 다이어리 웹앱',
    features: [
      '오늘 학식(식당 4곳)과 학사일정을 학교 홈페이지에서 자동 수집',
      '로그인 · 개인 일정표 · 게시판(글/댓글) · GPT 챗봇',
    ],
    linkUrl: 'https://github.com/Taegun41/Univ-diary',
    techStack: 'Node.js, Express, Puppeteer, HTML/CSS/JS, OpenAI API',
    videoSrc: 'videos/univ-diary.mp4',
    readmeContent: (
      <div>
        <h2>부산대 학생용 다이어리 웹앱</h2>
        <p style={metaStyle}>2025 (대학교 과제)</p>

        <hr style={hrStyle} />

        <h3>🔗 GitHub</h3>
        <p>
          <a href="https://github.com/Taegun41/Univ-diary" target="_blank" rel="noreferrer" style={linkStyle}>
            https://github.com/Taegun41/Univ-diary ↗
          </a>
        </p>

        <h3>📌 Summary</h3>
        <p><strong>학식·학사일정·개인 일정·게시판을 한곳에 모은 부산대 학생용 웹앱</strong></p>
        <ul>
          <li>홈 · 지도 · 정보 · 일정표 · 게시판 5개 메뉴 (PC는 왼쪽 메뉴, 휴대폰은 하단 탭)</li>
          <li>Puppeteer로 학교 홈페이지에서 오늘 학식(식당 4곳)과 학사일정 자동 수집</li>
          <li>회원가입·로그인(세션), 개인 일정 저장, 게시판(글·댓글·삭제), GPT API를 연결한 "대학 다이어리 봇"</li>
        </ul>

        <h3>🧐 Background</h3>
        <p>
          학식 메뉴, 학사일정, 개인 일정, 학생 게시판을 각각 다른 곳에서 찾아야 하는 불편함을 줄이기 위해 만든 웹앱입니다.
        </p>

        <h3>🔍 Meaning</h3>
        <p>
          - <strong>기술적 도전:</strong> 학교 홈페이지가 스크립트로 식단을 불러오는 구조라, 실제 브라우저를 띄우는 Puppeteer로 페이지를 조작해 데이터를 가져왔습니다.
          <br />
          - <strong>설계:</strong> 별도 DB 없이 JSON 파일로 사용자·게시글·일정을 저장해 가볍게 구성했습니다.
        </p>

        <h3>🛠️ Technology Stack(s)</h3>
        <p>
          <code>Node.js</code>, <code>Express</code>, <code>express-session</code>, <code>Puppeteer</code>, <code>HTML/CSS/JS</code>, <code>OpenAI API</code>
        </p>

        <h3>⚙️ Setup & Usage</h3>
        <p>서버 실행 후 브라우저에서 http://localhost:3000 에 접속해 회원가입 후 이용합니다.</p>
        <pre style={preStyle}>
{`git clone https://github.com/Taegun41/Univ-diary.git
cd Univ-diary/diary-server
npm install

# (선택) 챗봇 사용 시 diary-server/.env 파일에 키 입력
# OPENAI_API_KEY=본인의_API_키

npm start`}
        </pre>
      </div>
    ),
  },
];

const Projects: React.FC = () => {
  const mainProjects = PROJECT_LIST.filter(p => p.isMain);
  const subProjects = PROJECT_LIST.filter(p => !p.isMain);

  return (
    <section id="projects" className="projects-section section-row" aria-labelledby="projects-title">
      <div className="section-header">
        <h2 id="projects-title" className="section-title">
          <FaFolderOpen className="section-title-icon" /> PROJECTS
        </h2>
        <div className="section-title-divider"></div>
      </div>

      <div className="projects-container">
        {/* 1행: 메인 프로젝트 (2열 전체 사용) */}
        <div className="main-projects-container">
          {mainProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 2행 이하: 서브 프로젝트 그리드 (마우스 호버 시 시연 영상 확장) */}
        <div className="sub-projects-grid">
          {subProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
