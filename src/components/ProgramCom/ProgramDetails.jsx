import React from 'react';
import './ProgramCom.css';

const ProgramDetail = ({ program, onBack }) => {
  const whatsappNumber = "918122149339";
  const message = `Hello, I am interested in the course: ${program.title}. Please provide more details or enroll me.`;

  const handleEnrollClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const isUpcoming = program.category === "upcoming courses";

  return (
    <div className="program-detail-container">
      <button className="back-button" onClick={onBack}>
        &larr; Back to Programs
      </button>

      <div className="detail-header">
        <img src={program.image} alt={program.title} className="detail-image" />
        <div className="header-text">
          <h1 className="detail-title">{program.title}</h1>
          {!isUpcoming && (
            <div className="price-duration">
              <span className="price">{program.price}</span>
              <span className="duration">{program.duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="detail-content">
        {isUpcoming ? (
          <section className="coming-soon-section">
            <h2>Coming Soon</h2>
            <p>This course is currently under development. Please check back later or contact us for more information.</p>
          </section>
        ) : (
          <>
            {program.longDesc && (
              <section className="description-section">
                <h2>Program Description</h2>
                <p className="long-description">{program.longDesc}</p>
              </section>
            )}

            {program.careerPaths && (
              <section className="career-section">
                <h2>Career Paths</h2>
                <ul className="career-list">
                  {program.careerPaths.map((path, index) => (
                    <li key={index} className="career-item">{path}</li>
                  ))}
                </ul>
              </section>
            )}

            {program.features && (
              <section className="feature-section">
                <h2>Key Features</h2>
                <ul className="feature-list">
                  {program.features.map((item, index) => (
                    <li key={index} className="feature-item">✔ {item}</li>
                  ))}
                </ul>
              </section>
            )}

            {program.trainingMode && (
              <section className="training-section">
                <h2>Training Modes</h2>
                <ul className="training-list">
                  {program.trainingMode.map((mode, index) => (
                    <li key={index}>🎓 {mode}</li>
                  ))}
                </ul>
              </section>
            )}

            {program.batchOptions && (
              <section className="batch-section">
                <h2>Batch Options</h2>
                <ul className="batch-list">
                  {program.batchOptions.map((option, index) => (
                    <li key={index}>📅 {option}</li>
                  ))}
                </ul>
              </section>
            )}

            {program.certification && (
              <section className="certification-section">
                <h2>Certification</h2>
                <p>🏅 {program.certification}</p>
              </section>
            )}

            <button className="enroll-button" onClick={handleEnrollClick}>
              Enroll Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgramDetail;
