import React from 'react';
import './ProgramCom.css';

const ProgramDetail = ({ program, onBack }) => {
  const whatsappNumber = "918122149339";
  const message = `Hello, I am interested in the course: ${program.title}. Please provide more details or enroll me.`;

  const googleFormLinks = {
    "2D Rebar Detailing": "https://forms.gle/pM8kmnrQUxqEXtHN7",
    "3D Rebar Detailing": "https://forms.gle/pM8kmnrQUxqEXtHN7",
    "3D Structural Detailing": "https://forms.gle/u78xiExhW7DEirfX7",
    "Rebar Estimation": "https://forms.gle/BmAVVtQuGW26hm1z7"
  };

  const handleEnrollClick = () => {
    const formLink = googleFormLinks[program.title];
    const targetURL = formLink 
      ? formLink 
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(targetURL, "_blank");
  };

  const isUpcoming = program.category === "upcoming courses";

  return (
    <div className="program-detail-container">
      {/* Back Button */}
      <div className="top-navigation">
        <button className="back-to-programs-button" onClick={onBack}>
          <span className="back-arrow-icon">&larr;</span>
          Go Back to Programs
        </button>
      </div>

      {/* Header */}
      <div className="detail-header">
        <div className="image-container">
          <img src={program.image} alt={program.title} className="detail-image" />
          {isUpcoming && <div className="ribbon">Coming Soon</div>}
        </div>
        <div className="header-text">
          <h1 className="detail-title">{program.title}</h1>

          {program.softwareUsed && (
            <div className="software-badges">
              {program.softwareUsed.map((software, i) => (
                <span key={i} className="software-badge">{software}</span>
              ))}
            </div>
          )}

          <div className="price-duration">
            <span className="duration-label">Duration:</span>
            <span className="duration">{program.duration}</span>
          </div>

          {program.longDesc && <p className="long-description">{program.longDesc}</p>}
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        {isUpcoming ? (
          <section className="coming-soon-section">
            <h2>Coming Soon</h2>
            <p>This course is currently under development. Please check back later or contact us for more information.</p>
            <button className="notify-me" onClick={handleEnrollClick}>Notify Me When Available</button>
          </section>
        ) : (
          <>
            {/* Modules */}
            {program.CourseModules?.length > 0 && (
              <section className="modules-section">
                <h2>Course Curriculum</h2>
                <div className="section-divider"></div>
                <div className="modules-grid">
                  {program.CourseModules.map((module, i) => (
                    <div key={i} className="module-card">
                      <div className="module-number">{i + 1}</div>
                      <div className="module-content">
                        <h3 className="module-title">{module}</h3>
                        <span className="progress-text">Module {i + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Career Opportunities */}
            {program.careerPaths?.length > 0 && (
              <section className="career-section">
                <h2>Career Opportunities</h2>
                <div className="section-divider"></div>
                <ul className="career-list">
                  {program.careerPaths.map((path, i) => (
                    <li key={i} className="career-item">🎯 {path}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Accordion */}
            <details className="detail-accordion-item" open>
              <summary className="accordion-header">
                <h3>Course Details</h3>
                <span className="accordion-icon">+</span>
              </summary>
              <div className="accordion-content">
                {/* Training Modes */}
                {program.trainingMode?.length > 0 && (
                  <div className="info-section">
                    <h4>Training Modes</h4>
                    <ul className="info-list">
                      {program.trainingMode.map((mode, i) => (
                        <li key={i}>🎓 {mode}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Batch Options */}
                {program.batchOptions?.length > 0 && (
                  <div className="info-section">
                    <h4>Batch Options</h4>
                    <ul className="info-list">
                      {program.batchOptions.map((option, i) => (
                        <li key={i}>📅 {option}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Eligibility */}
                {program.eligibility && (
                  <div className="info-section">
                    <h4>Eligibility</h4>
                    <p className="eligibility-text">{program.eligibility}</p>
                  </div>
                )}
              </div>
            </details>

            {/* Enroll Section */}
            <div className="enroll-section">
              <div className="enroll-card">
                <h3>Ready to Start Learning?</h3>
                <p>Join hundreds of students who have transformed their careers with our courses</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  📩 Enroll Now
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
