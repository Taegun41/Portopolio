import React, { useRef, useState, useEffect } from 'react';
import './Projects.css';
import { createPortal } from 'react-dom';
export interface ProjectData {
  id: number;
  isMain?: boolean;
  badgeText: string;
  badgeColor?: string;
  date: string;
  title: string;
  features: string[];
  linkUrl?: string;
  techStack: string;
  videoSrc?: string;
  readmeContent?: React.ReactNode;
}

const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  // 시연 영상 파일이 아직 없거나 불러오지 못하면 '영상 준비 중'을 표시합니다.
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 모바일: 바깥 영역 터치 시 영상 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (isMobileActive && cardRef.current && !cardRef.current.contains(e.target as Node) && !isReadmeOpen) {
        setIsMobileActive(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileActive, isReadmeOpen]);

  // 모바일: 카드 터치 시 크로스 페이드 토글
  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    if (window.innerWidth <= 768) {
      const nextState = !isMobileActive;
      setIsMobileActive(nextState);
      
      if (nextState && videoRef.current) {
        videoRef.current.play().catch(() => {});
      } else if (!nextState && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  // 데스크톱: 마우스 호버 시 영상 켜기
  const handleMouseEnter = () => {
    if (window.innerWidth > 768 && videoRef.current) videoRef.current.play().catch(() => {});
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const CardInfo = (
    <div className="card-info-content">
      <div className="card-top">
        <span className="card-badge" style={{ backgroundColor: project.badgeColor || 'var(--accent)' }}>
          {project.badgeText}
        </span>
      </div>
      <div className="card-date">{project.date}</div>
      <div className="card-divider"></div>
      
      <h3 className="card-title">{project.title}</h3>
      
      <ul className="card-bullets">
        {project.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
      </ul>
      
      {project.linkUrl && (
        <a href={project.linkUrl} target="_blank" rel="noreferrer" className="card-link">{project.linkUrl}</a>
      )}
      
      {/* 🌟 순서 변경: 기술 스택을 먼저 배치하고, 그 아래로 README 버튼을 배치합니다 */}
      <div className="card-tech">{project.techStack}</div>
      
      <div className="card-bottom-actions">
        <button className="readme-btn" onClick={() => setIsReadmeOpen(true)}>📖 README</button>
      </div>
    </div>
  );

  const Modal = isReadmeOpen && createPortal(
    <div className="modal-overlay" onClick={() => setIsReadmeOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsReadmeOpen(false)}>✕</button>
        <h2 style={{ marginTop: 0 }}>{project.title}</h2>
        <div className="modal-body">
          {project.readmeContent || <p>상세 내용 업데이트 예정입니다.</p>}
        </div>
      </div>
    </div>,
    document.body // 카드 내부가 아닌 화면 최상위로 모달을 띄움
  );

  if (project.isMain) {
    return (
      <div className="main-project-wrapper">
        <div className="project-card main-project-card">
          {CardInfo}
          <div className="main-card-media">
            {project.videoSrc && !videoFailed ? (
              <video src={project.videoSrc} autoPlay loop muted playsInline onError={() => setVideoFailed(true)} />
            ) : (
              <span className="media-placeholder">영상 준비 중</span>
            )}
          </div>
        </div>
        {Modal}
      </div>
    );
  }

  return (
    <div 
      ref={cardRef}
      className={`project-wrapper sub-wrapper ${isMobileActive ? 'mobile-active' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="project-card">
        {CardInfo}
        {project.videoSrc && !videoFailed && (
          <div className="video-panel">
            {/* preload="none": 페이지를 열 때 바로 내려받지 않고, 마우스를 올리거나 터치할 때 내려받습니다 (휴대폰 데이터 절약) */}
            <video ref={videoRef} src={project.videoSrc} loop muted playsInline preload="none" onError={() => setVideoFailed(true)} />
          </div>
        )}
      </div>
      {Modal}
    </div>
  );
};

export default ProjectCard;