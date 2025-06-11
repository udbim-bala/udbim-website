import React from 'react';
import {
  FaLayerGroup,     // 2D Detailing
  FaCube,           // 3D BIM
  FaBuilding,       // Structural Detailing
  FaCalculator      // Estimation
} from 'react-icons/fa';
import '../aboutCom/TrainingAreas.css';

const TrainingAreas = () => {
  return (
    <div className="training-areas-container">
      <h2 className="training-title">Our Core Training Areas</h2>

      <div className="training-grid">
        <div className="training-card">
          <FaLayerGroup className="training-icon" />
          <p>Rebar Detailing 2D Training</p>
        </div>

        <div className="training-card">
          <FaCube className="training-icon" />
          <p>Rebar Detailing 3D BIM Training</p>
        </div>

        <div className="training-card">
          <FaBuilding className="training-icon" />
          <p>Structural Steel Modeling and Drafting</p>
        </div>

        <div className="training-card">
          <FaCalculator className="training-icon" />
          <p>Rebar Estimation</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingAreas;
