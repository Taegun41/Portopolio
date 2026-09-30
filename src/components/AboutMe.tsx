import React from 'react';
import { 
  FaLink, 
  FaUser, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaPen 
} from 'react-icons/fa';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  const profileData = [
    { id: 1, icon: <FaUser />, label: '이름', value: '박태건' },
    { id: 2, icon: <FaCalendarAlt />, label: '생년월일', value: '03.09.06' },
    { id: 3, icon: <FaMapMarkerAlt />, label: '위치', value: '부산광역시 금정구' },
    { id: 4, icon: <FaPhoneAlt />, label: '연락처', value: '010-3697-3398' },
    { id: 5, icon: <FaEnvelope />, label: '이메일', value: 'teagun41@gmail.com' },
    { id: 6, icon: <FaPen />, label: '학력', value: '부산대학교\n(컴퓨터공학과)' },
  ];

  return (
    <section id="about" className="section-row container">
      {/* 타이틀 및 클립 아이콘 영역 */}
      <div className="about-header">
        <h2 className="about-title">
          <FaLink className="title-link-icon" />
          ABOUT ME
        </h2>
        <div className="about-title-divider"></div>
      </div>

      {/* 3열 정보 그리드 */}
      <div className="about-grid">
        {profileData.map((item) => (
          <div key={item.id} className="about-item">
            <div className="about-icon">
              {item.icon}
            </div>
            <div className="about-details">
              <div className="about-label">{item.label}</div>
              <div className="about-value">
                {/* 학력 부분의 줄바꿈(\n) 처리를 위해 whiteSpace 스타일 적용 */}
                <span style={{ whiteSpace: 'pre-line' }}>{item.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;