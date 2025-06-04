import React, { useState } from 'react';
import { FaUserGraduate, FaUserTie, FaUserCog, FaUserAlt } from 'react-icons/fa';
import { RiFileEditLine, RiTeamLine } from 'react-icons/ri';
import { BsFillCalendarCheckFill, BsCheck2Circle } from 'react-icons/bs';
import { IoBusinessSharp } from 'react-icons/io5';
import '../RecruitCom/RecruitPricing.css';

const RecruitPricing = () => {
  const [activeTab, setActiveTab] = useState('employers');

  const WHATSAPP_NUMBER = "918122149339"; // Replace with your actual number

  const whatsappLinks = {
    requestCandidates: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'm interested in hiring candidates. Can you assist me?")}`,
    getStarted: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm looking for a career opportunity as a candidate. Can you guide me?")}`,
    hireTalent: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I want to hire talent for my company.")}`,
    getHired: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm looking for a job opportunity. Can you help me to get started.")}`,
  };

  const employerPlans = [
    {
      icon: <FaUserGraduate size={24} />,
      level: "Freshers (0–1 year)",
      fee: "₹15,000 – ₹20,000",
      features: ["Pre-screened candidates", "Basic technical skills", "Trained in industry tools"],
      highlight: "Discounted if trained through our institute"
    },
    {
      icon: <FaUserTie size={24} />,
      level: "Junior Level (1–3 years)",
      fee: "₹20,000 – ₹30,000",
      features: ["Project experience", "Moderate technical skills", "Team collaboration ready"],
      highlight: "Based on specialization"
    },
    {
      icon: <FaUserCog size={24} />,
      level: "Mid-Level (3–5 years)",
      fee: "₹30,000 – ₹40,000",
      features: ["Specialized skills", "Leadership potential", "Mentoring capabilities"],
      highlight: "Based on specialization"
    },
    {
      icon: <FaUserAlt size={24} />,
      level: "Senior/Managerial",
      fee: "₹40,000+",
      features: ["Strategic thinkers", "Team management", "Client-facing skills"],
      highlight: "Subject to profile & negotiation"
    }
  ];

  const candidateServices = [
    {
      icon: <RiFileEditLine size={24} />,
      service: "Resume Building + LinkedIn Optimization",
      price: "₹1,000 – ₹2,000",
      features: ["ATS-friendly formatting", "Keyword optimization", "Profile enhancement"]
    },
    {
      icon: <RiTeamLine size={24} />,
      service: "Job Interview Coaching + Mock Interviews",
      price: "₹1,000 – ₹2,000 per session",
      features: ["Technical interview prep", "Behavioral questions", "Salary negotiation"]
    },
    {
      icon: <BsFillCalendarCheckFill size={24} />,
      service: "Job Guarantee + Placement Assistance",
      price: "₹5,000 – ₹10,000 (package)",
      features: ["Guaranteed interviews", "Career counseling", "Placement support"]
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2>Transparent Pricing & Placement Solutions</h2>
          <p>Flexible options tailored for both employers and job seekers in the Detailing & BIM industry</p>
        </div>

        <div className="pricing-tabs">
          <div className="tab-header">
            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'employers' ? 'active' : ''}`}
                onClick={() => setActiveTab('employers')}
              >
                For Employers
              </button>
              <button 
                className={`tab-button ${activeTab === 'candidates' ? 'active' : ''}`}
                onClick={() => setActiveTab('candidates')}
              >
                For Candidates
              </button>
            </div>
            {/* <div className="tab-note">
              <IoBusinessSharp />
              <span>Alternative Option: 6%–10% of annual CTC (industry standard for niche recruitment)</span>
            </div> */}
          </div>

          {activeTab === 'employers' && (
            <div className="tab-content active">
              <div className="pricing-cards">
                {employerPlans.map((plan, index) => (
                  <div className="pricing-card" key={index}>
                    <div className="card-header">
                      <div className="plan-icon">{plan.icon}</div>
                      <h3>{plan.level}</h3>
                      {/* <div className="plan-price">{plan.fee}</div> */}
                    </div>
                    <ul className="plan-features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <BsCheck2Circle className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="plan-highlight">
                      <span>{plan.highlight}</span>
                    </div>
                    <a
                      href={whatsappLinks.requestCandidates}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="plan-button"
                    >
                      Request Candidates
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="tab-content active">
              <div className="service-cards">
                {candidateServices.map((service, index) => (
                  <div className="service-card" key={index}>
                    <div className="service-icon mt-0">{service.icon}</div>
                    <h3>{service.service}</h3>
                    {/* <div className="service-price">{service.price}</div> */}
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <li key={i}>
                          <BsCheck2Circle className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLinks.getStarted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-button"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pricing-cta">
          <h3>Ready to Build Your Ideal Team or Advance Your Career?</h3>
          <p>Connect with our specialized recruitment consultants today</p>
          <div className="cta-buttons">
            <a
              href={whatsappLinks.hireTalent}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              Hire Talent
            </a>
            <a
              href={whatsappLinks.getHired}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Get Hired
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitPricing;
