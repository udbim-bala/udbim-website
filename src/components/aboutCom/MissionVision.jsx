import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import '../aboutCom/MissionVision.css';
import AboutMV from '../../assets/Images/MisionVision.jpg'

const MissionVision = () => {
  return (
    <section className="mv-section container py-5">
      <div className="mv-content">
        <div className="mv-image-container">
          <img
            src={AboutMV} 
            alt="BIM Drawing"
            className="mv-image"
          />
        </div>
        <div className="mv-text-container">
          <div className="mv-item">
            <div className="mv-icon-circle ">
              <FaEye className="mv-icon" />
            </div>
            <div className="mv-text">
              <h3>Our Vision</h3>
              <p>
                To become the #1 Detailing & BIM Training Training Institute in India and worldwide, known for quality education, career advancement, and 100% job readiness.
              </p>
            </div>
          </div>
          <div className="mv-item">
            <div className="mv-icon-circle ">
              <FaBullseye className="mv-icon" />
            </div>
            <div className="mv-text">
              <h3>Our Mission</h3>
              <p>
                To empower aspiring civil and structural engineers with hands-on, industry-relevant training in detailing and BIM modeling, equipping them with the skills needed to excel in the global construction and detailing industry. Training in Offline and Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
