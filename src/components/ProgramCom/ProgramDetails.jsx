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
      {/* Sticky Back Button */}
      <div className="top-navigation">
        <button className="back-to-programs-button" onClick={onBack}>
          <span className="back-arrow-icon">&larr;</span>
          Go Back to Programs
        </button>
      </div>

      <div className="detail-header">
        <div className="image-container">
          <img src={program.image} alt={program.title} className="detail-image" />
          {isUpcoming && <div className="ribbon">Coming Soon</div>}
        </div>
        <div className="header-text">
          <div className="title-wrapper">
            <h1 className="detail-title">{program.title}</h1>
            {program.softwareUsed && (
              <div className="software-badges">
                {program.softwareUsed.map((software, index) => (
                  <span key={index} className="software-badge">{software}</span>
                ))}
              </div>
            )}
          </div>
          
          <div className="price-duration">
            <div className="price-tag">
              <span className="price-label">Course Fee:</span>
              <span className="price">{program.price}</span>
            </div>
            <div className="duration-tag">
              <span className="duration-label">Duration:</span>
              <span className="duration">{program.duration}</span>
            </div>
          </div>
          
          {program.longDesc && (
            <p className="long-description">{program.longDesc}</p>
          )}
        </div>
      </div>

      <div className="detail-content">
        {isUpcoming ? (
          <section className="coming-soon-section">
            <div className="coming-soon-content">
              <h2>Coming Soon</h2>
              <p>This course is currently under development. Please check back later or contact us for more information.</p>
              <button className="notify-me">Notify Me When Available</button>
            </div>
          </section>
        ) : (
          <>
            {program.CourseModules && (
              <section className="modules-section">
                <div className="section-header">
                  <h2>Course Curriculum</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="modules-grid">
                  {program.CourseModules.map((module, index) => (
                    <div key={index} className="module-card">
                      <div className="module-number">{index + 1}</div>
                      <div className="module-content">
                        <h3 className="module-title">{module}</h3>
                        <div className="module-progress">
                          <span className="progress-text">Module {index + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {program.careerPaths && (
              <section className="career-section">
                <div className="section-header">
                  <h2>Career Opportunities</h2>
                  <div className="section-divider"></div>
                </div>
                <ul className="career-list">
                  {program.careerPaths.map((path, index) => (
                    <li key={index} className="career-item">
                      <span className="career-icon">🎯</span>
                      {path}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="details-accordion">
              <details className="detail-accordion-item" open>
                <summary className="accordion-header">
                  <h3>Course Details</h3>
                  <span className="accordion-icon">+</span>
                </summary>
                <div className="accordion-content">
                  {program.trainingMode && (
                    <div className="info-section">
                      <h4>Training Modes</h4>
                      <ul className="info-list">
                        {program.trainingMode.map((mode, index) => (
                          <li key={index}>
                            <span className="info-icon">🎓</span>
                            {mode}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.batchOptions && (
                    <div className="info-section">
                      <h4>Batch Options</h4>
                      <ul className="info-list">
                        {program.batchOptions.map((option, index) => (
                          <li key={index}>
                            <span className="info-icon">📅</span>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.eligibility && (
                    <div className="info-section">
                      <h4>Eligibility</h4>
                      <p className="eligibility-text">{program.eligibility}</p>
                    </div>
                  )}
                </div>
              </details>
            </div>

            <div className="enroll-section">
              <div className="enroll-card">
                <h3>Ready to Start Learning?</h3>
                <p>Join hundreds of students who have transformed their careers with our courses</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  <span className="button-icon">📩</span>
                  Enroll Now
                </button>
                <div className="enroll-benefits">
                  <span className="benefit-item">✅ Flexible Learning</span>
                  <span className="benefit-item">✅ Expert Instructors</span>
                  <span className="benefit-item">✅ Career Support</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgramDetail;