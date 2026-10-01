/**
 * 포트폴리오에 표시할 작품 목록.
 * 새 작품(P2, P3 등)을 추가할 때는 아래 배열에 같은 형식의 항목을 하나 더 넣기만 하면 됩니다.
 * - isMain: true  → 첫 번째 큰 카드(대표작)로 표시
 * - image         → public/images 폴더에 넣은 스크린샷 경로 (없으면 자동으로 대체 화면 표시)
 */

export interface ProjectLink {
  label: string; // 버튼에 보일 글자 (예: '사이트 바로가기')
  url: string;
}

export interface ProjectDetailSection {
  heading: string; // README 팝업 안의 소제목
  items: string[]; // 소제목 아래 항목들
}

export interface ProjectData {
  id: string;
  isMain?: boolean;
  title: string;
  oneLiner: string; // 한 줄 요약
  period: string; // 기간
  teamInfo: string; // 예: '1인 개인 프로젝트'
  image: string; // 대표 이미지 경로
  imageAlt: string; // 이미지 설명 (화면 낭독기·이미지가 없을 때 사용)
  myRole: string[]; // 내가 직접 한 일
  results: string[]; // 결과 / 주요 기능
  techStack: string[];
  links: ProjectLink[];
  details: ProjectDetailSection[]; // README 팝업에 들어갈 상세 내용
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'ai-news',
    isMain: true,
    title: 'AI 뉴스 분석 플랫폼',
    oneLiner: '매일 아침 주요 뉴스를 수집해 분야별 핵심 이슈로 묶어 보여주고, 주식 특징 종목까지 함께 정리하는 웹 서비스',
    period: '2026.09 – 진행 중',
    teamInfo: '1인 개인 프로젝트 (AI 코딩 도구 활용)',
    image: '/images/ai-news.png',
    imageAlt: 'AI 뉴스 분석 플랫폼 메인 화면 — 분야별 핵심 이슈와 많이 다뤄지는 이슈 순위',
    myRole: [
      '네이버 뉴스 5개 분야(정치·경제·사회·세계·IT/과학) 크롤러 직접 구현 — 제목·본문·작성일·썸네일 추출',
      '신문 지면 형태의 화면 구성 직접 설계 — 메인, 분야별, 기사 상세 페이지',
      'Gemini 분석 연결, DB(Supabase) 저장, 주식 페이지, 배포 자동화는 AI 코딩 도구(Claude)에 요청해 구현하고 결과를 직접 검증',
    ],
    results: [
      '매일 06:00 뉴스 수집 → AI가 분야별 이슈로 묶어 리포트 자동 생성 (GitHub Actions)',
      '최근 7일 기사 키워드 검색, 분야 간 연결 분석(AI 인사이트), 북마크',
      '평일 16:00 코스피·코스닥 상한가·하한가·급등·거래량 상위 종목 정리, 날짜별 조회',
      'Vercel(화면) + Render(API) + Supabase(DB)로 배포 — PC·휴대폰 어디서나 접속',
    ],
    techStack: ['Python', 'BeautifulSoup', 'Gemini API', 'FastAPI', 'Supabase', 'Next.js', 'TypeScript', 'GitHub Actions'],
    links: [
      { label: '사이트 바로가기', url: 'https://ai-news-plattform.vercel.app' },
      { label: 'GitHub 저장소', url: 'https://github.com/Taegun41/AI_News_Plattform' },
    ],
    details: [
      {
        heading: '만든 이유',
        items: [
          '포털 뉴스는 같은 사건의 기사가 수십 개씩 흩어져 있어, 하루의 핵심 흐름을 빠르게 파악하기 어려웠습니다.',
          '비슷한 기사를 하나의 이슈로 묶고, 많이 다뤄진 순서로 보여주는 신문 1면 같은 화면을 목표로 했습니다.',
        ],
      },
      {
        heading: '구조',
        items: [
          '수집: Python 크롤러(네이버 뉴스), FinanceDataReader·네이버 지수(주식)',
          '분석: Gemini API로 분야별 이슈 묶기 → 분야 간 연결 분석',
          '저장·제공: Supabase(PostgreSQL) ← FastAPI 서버(Render)',
          '화면: Next.js(Vercel) / 자동 실행: GitHub Actions (06:00, 16:00)',
        ],
      },
      {
        heading: '어려웠던 점과 해결',
        items: [
          'AI 응답 지연·과부하(503)로 검색이 자주 실패 → 검색은 AI 요약 대신 최근 7일 관련 기사를 모두 즉시 보여주는 방식으로 바꾸고, 하루 1번 만드는 리포트에는 대기 후 재시도와 예비 모델을 적용했습니다.',
          '"르노 코리아"처럼 띄어 쓴 검색어가 "르노코리아" 기사를 못 찾는 문제 → 단어별로 나누고 띄어쓰기를 무시해 비교하도록 수정했습니다.',
          '주가 지수 데이터 출처가 9/17에서 갱신을 멈춰 10/1 시세가 9/17로 저장된 문제를 배포 후 직접 발견 → 지수 출처를 바꾸고, 날짜가 비정상적으로 오래되면 평일 기준으로 판단하는 안전장치를 추가했습니다.',
        ],
      },
      {
        heading: '느낀 점과 개선할 점',
        items: [
          'AI가 만든 코드도 실제 데이터로 확인하기 전에는 믿을 수 없다는 것을 배웠습니다. 화면에 보이는 숫자를 증권 앱과 직접 대조해 오류를 찾았습니다.',
          '앞으로 크롤링 기사에 섞인 제보·광고 문구를 걸러 검색 정확도를 높이고, 분야 분류 정확도를 개선하려 합니다.',
        ],
      },
    ],
  },
  {
    id: 'tech-trends',
    title: '개발자 채용 트렌드 대시보드',
    oneLiner: '개발자 채용 공고 데이터를 기술·연봉·지역별로 시각화하고, 조건별로 공고를 찾아볼 수 있는 대시보드',
    period: '2025',
    teamInfo: '대학교 과제 · 1인 프로젝트',
    image: '/images/tech-trends.png',
    imageAlt: '개발자 채용 트렌드 대시보드 화면 — 통계 카드와 기술별 차트',
    myRole: [
      '메인·대시보드·공고 상세·소개 4개 페이지 구성 및 구현',
      '필터·통계 계산 로직을 커스텀 훅(useJobFilter, useJobStats)으로 분리',
      'Next.js 정적 내보내기 + GitHub Actions로 GitHub Pages 자동 배포',
    ],
    results: [
      '기술 스택·연봉·지역 분포 차트(Recharts)와 요약 통계 카드',
      '조건 필터와 검색, 공고 상세 및 비슷한 공고 추천',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'GitHub Pages'],
    links: [
      { label: '사이트 바로가기', url: 'https://taegun41.github.io/Tech-Trends/' },
      { label: 'GitHub 저장소', url: 'https://github.com/Taegun41/Tech-Trends' },
    ],
    details: [
      {
        heading: '개요',
        items: [
          '채용 공고 데이터를 분석해 기술 트렌드, 연봉 수준, 지역별 분포를 한눈에 볼 수 있도록 만든 대시보드입니다.',
          '데모용 샘플 데이터(공고 15건)를 사용하며, 실제 기업 정보와 다를 수 있습니다.',
        ],
      },
      {
        heading: '구현 포인트',
        items: [
          '화면 컴포넌트와 데이터 계산(필터·통계)을 훅으로 분리해 페이지마다 재사용했습니다.',
          '서버 없이 동작하도록 정적 사이트로 내보내 GitHub Pages에 배포했습니다. 저장소 경로(basePath) 설정을 맞추는 과정에서 배포 경로 문제를 해결했습니다.',
        ],
      },
    ],
  },
  {
    id: 'univ-diary',
    title: '대학 다이어리',
    oneLiner: '부산대학교 학식·학사일정을 자동으로 모아 보여주고, 일정 관리·게시판·챗봇을 한곳에 모은 학생용 웹앱',
    period: '2025',
    teamInfo: '대학교 과제',
    image: '/images/univ-diary.png',
    imageAlt: '대학 다이어리 메인 화면 — 왼쪽 메뉴와 홈 화면',
    myRole: [
      'Express 서버 구현 — 회원가입·로그인(세션), 게시판(글·댓글·삭제), 개인 일정 저장 API',
      'Puppeteer로 부산대 홈페이지의 오늘 학식(식당 4곳)과 학사일정을 수집하는 스크래퍼 작성',
      'PC 왼쪽 메뉴 + 휴대폰 하단 탭으로 나뉘는 반응형 화면 구성',
    ],
    results: [
      '홈·지도·정보·일정표·게시판 5개 메뉴',
      'GPT API를 연결한 "대학 다이어리 봇" 채팅',
    ],
    techStack: ['Node.js', 'Express', 'Puppeteer', 'HTML/CSS/JS', 'OpenAI API'],
    links: [],
    details: [
      {
        heading: '개요',
        items: [
          '학식 메뉴, 학사일정, 개인 일정, 학생 게시판을 따로 찾아다녀야 하는 불편함을 줄이기 위해 만든 웹앱입니다.',
        ],
      },
      {
        heading: '구현 포인트',
        items: [
          '학교 홈페이지가 스크립트로 식단을 불러오는 구조라, 실제 브라우저를 띄우는 Puppeteer로 페이지를 조작해 데이터를 가져왔습니다.',
          '별도 DB 없이 JSON 파일로 사용자·게시글·일정을 저장해 가볍게 구성했습니다.',
        ],
      },
    ],
  },
];
