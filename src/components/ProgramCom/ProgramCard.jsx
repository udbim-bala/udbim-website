import React from 'react';
import './ProgramCom.css';

const ProgramCard = ({ program, onClick }) => {
  const isUpcoming = program.category === 'upcoming courses';

  return (
    <div className="program-card" onClick={onClick}>
      <div className="card-image-container">
        <img
          src={program.image}
          alt={program.title}
          className="card-image"
        />
        {isUpcoming && (
          <div className="coming-soon-badge">Coming Soon</div>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{program.title}</h3>
        <p className="card-short-desc">{program.shortDesc}</p>
        <div className="card-footer">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
