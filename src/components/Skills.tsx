import React from 'react';
import './Skills.css';
import { FaCode } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section section-row" aria-labelledby="skills-title">
      <div className="section-header">
        <h2 className="section-title">
          <FaCode className="section-title-icon" /> SKILLS
        </h2>
        <div className="section-title-divider"></div> 
      </div>
      {/* 안쪽 진한 라운드 박스 시작 */}
      <div className="skills-box">
        <div className="skills-list">
          
          <div className="skill-row">
            <div className="skill-category"><span>💻</span> Language</div>
            <div className="skill-tags">
              <span className="skill-tag tag-blue">TypeScript</span>
              <span className="skill-tag tag-yellow">JavaScript</span>
              <span className="skill-tag tag-blue">Python</span>
              <span className="skill-tag tag-navy">C / C++</span>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-category"><span>🖥️</span> Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag tag-black">Next.js</span>
              <span className="skill-tag tag-lightblue">React</span>
              <span className="skill-tag tag-blue">Flutter</span>
              <span className="skill-tag tag-orange">HTML5 / CSS3</span>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-category"><span>🗄️</span> Backend</div>
            <div className="skill-tags">
              <span className="skill-tag tag-green">Node.js</span>
              <span className="skill-tag tag-yellowgreen">Supabase</span>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-category"><span>☁️</span> DevOps</div>
            <div className="skill-tags">
              <span className="skill-tag tag-gray">Linux</span>
              <span className="skill-tag tag-black">Git / GitHub</span>
            </div>
          </div>

        </div>
      </div>
      {/* 안쪽 진한 라운드 박스 끝 */}
      
    </section>
  );
};

export default Skills;