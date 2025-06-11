import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutCom/Achievements.css';

const achievementsData = [
  "Trained 40+ Students & Professionals",
  "Strong Placement Track Record",
  "One of top detailing & BIM training institute in India and globe",
];

const Achievements = () => {
  return (
    <div className="container-fluid achievements-section py-5">
      <h2 className="text-center achievements-title mb-5">
        Our Achievements
      </h2>

      <div className="row g-4 justify-content-center">
        {achievementsData.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="achievement-card d-flex align-items-center p-3 shadow-sm rounded">
              <FaCheckCircle className="check-icon me-3" />
              <p className="mb-0 achievement-text">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
