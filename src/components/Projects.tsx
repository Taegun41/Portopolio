import React from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectData } from './ProjectCard';
import './Projects.css';
import { FaFolderOpen } from 'react-icons/fa';
const PROJECT_LIST: ProjectData[] = [
  {
    id: 1,
    isMain: true, // 1행 통째로 차지 (호버 확장 없음)
    badgeText: "Main Project",
    badgeColor: "#2d5545",
    date: "2026.09 - 현재",
    title: "대표 프로젝트 (준비 중)",
    features: [
      "프로젝트의 핵심 기능 1 요약",
      "핵심 기능 2 요약 및 성과",
      "사용된 주요 아키텍처 및 설계 의도"
    ],
    techStack: "TypeScript, React, Next.js",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // 샘플
  },
  {
    id: 2,
    isMain: false, // 2행부터 좌우로 나열 (호버 시 확장)
    badgeText: "react-bulk-form",
    badgeColor: "#e05353",
    date: "2025.03",
    title: "Form 상태 일괄 관리 React 라이브러리",
    features: [
      "Form 필드 값과 오류의 일괄 관리",
      "Form 상태에 따른 UX 구현을 배제하여 인터페이스 최소화"
    ],
    linkUrl: "https://www.npmjs.com/package/react-bulk-form",
    techStack: "TypeScript, React",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // 모든 카드에 영상 적용
  },
  {
    id: 3,
    isMain: false,
    badgeText: "메이플 대시보드",
    badgeColor: "#d97706",
    date: "2026.01",
    title: "실시간 시세 분석 대시보드",
    features: [
      "게임 주요 재료 시세 변동 추이 차트 제공",
      "Supabase를 활용한 유저 및 데이터 관리"
    ],
    techStack: "Next.js, TypeScript, Supabase",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    isMain: false,
    badgeText: "Python Auto",
    badgeColor: "#3178c6",
    date: "2025.12",
    title: "파이썬 자동화 듀얼 타이머 GUI",
    features: [
      "주기적인 루틴 관리 및 사운드 알림 스케줄러",
      "Tkinter를 활용한 직관적인 사용자 데스크톱 인터페이스 설계"
    ],
    techStack: "Python, Tkinter",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  }
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
        {/* 👈 제목 아래 밑줄 추가 */}
        <div className="section-title-divider"></div> 
      </div>

      <div className="projects-container">
        {/* 1행: 메인 프로젝트 (2열 전체 사용) */}
        <div className="main-projects-container">
          {mainProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 2행 이하: 서브 프로젝트 그리드 (마우스 호버 시 확장) */}
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