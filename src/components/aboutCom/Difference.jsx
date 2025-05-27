import React, { useState } from 'react';
import { FaChartLine, FaLaptopCode, FaUserGraduate, FaGlobe, FaTools } from 'react-icons/fa';
import '../aboutCom/Difference.css';

const differences = [
  { icon: <FaChartLine />, title: 'Industry-Focused Curriculum', desc: 'Designed by industry experts to meet real job requirements.' },
  { icon: <FaLaptopCode />, title: 'Live Project Exposure', desc: 'Hands-on training with real projects for practical learning.' },
  { icon: <FaUserGraduate />, title: 'Individual Mentorship', desc: 'Personalized guidance to boost your skills and confidence.' },
  { icon: <FaGlobe />, title: 'Global Standards & Latest Software', desc: 'Learn using the latest global software and practices.' },
  { icon: <FaTools />, title: 'Practical Assignments & Error Checks', desc: 'Work on tasks with real-time error correction support.' },
];

const Difference = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="difference-grid-container">
      <h2>What Makes Us Different?</h2>
      <ul className="difference-grid-list">
        {differences.map(({ icon, title, desc }, idx) => (
          <li
            key={idx}
            className={`grid-item ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => toggle(idx)}
          >
            <div className="grid-header">
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <span className="arrow">{activeIndex === idx ? '▲' : '▼'}</span>
            </div>
            <div className="grid-content">
              <p>{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Difference;
