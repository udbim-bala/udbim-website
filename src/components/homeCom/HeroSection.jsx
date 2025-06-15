import React from 'react';
import '../homeCom/HeroSection.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Container, Row, Col } from 'react-bootstrap';

import Home2 from '../../assets/Images/Home-2.jpg';
import Home3 from '../../assets/Images/Home-3.jpg';
import BIM from '../../assets/Images/BIM.png';
import HeroImg from '../../assets/Images/Hero.png';

const HeroSection = () => {
  const scrollToSection = () => {
    const section = document.getElementById('popular-courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid pt-5 px-5 py-5 hero-section section-wrapper">
        <Row className="m-0 p-0 align-items-center">
          <Col md={6} className="text-section">
            <h1 className="hero-h1">
              Want to become a Highly Skilled Digital Engineer?
            </h1>
            <p className="hero-subtext">
              Start your journey with <strong>UD-BIM Training Institute</strong>, a premier training hub in Chennai. Dive into <strong>Practical Certified Courses in Digital Engineering</strong>. Your path to professional success starts here. In Live - <strong>Online</strong> and <strong>Offline</strong> mode Training
            </p>
            <button className="read-more-btn" onClick={scrollToSection}>
              Explore Now
            </button>
          </Col>
          <Col md={6}>
            <img src={HeroImg} alt="Digital Engineering" className="img-fluid hero-image" />
          </Col>
        </Row>
      </div>

      {/* Academy Section */}
      <Container fluid className="px-5 py-2 academy-section section-wrapper">
        <Row className="align-items-center">
          <Col md={5}>
            <div className="image-grid">
              <img src={Home2} alt="Training" className="img-large" />
              <img src={Home3} alt="Coaching" className="img-small-1" />
              <img src={BIM} alt="Session" className="img-small-2" />
              <div className="experience-circle">
                <div>
                  <i className="fas fa-running fa-2x"></i>
                  <h3 className="text-light">10+</h3>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <div className="academy-right">
              <h3 className="about-us">
                Why Universal Detailing and BIM Training Institute?
              </h3>
              <p className="no1">#1 Detailing & BIM Training Institute</p>
              <p className="description">
                At Universal Detailing Training Institute, we provide career-focused training in Rebar Detailing, Structural Detailing, Estimation, MEP & BIM. Whether you're a fresher or a working professional, our programs are designed to make you job-ready with real-world skills.
              </p>
              <div className="features">
                <h4>KEY BENEFITS</h4>
                <ul>
                  <li><IoIosArrowDroprightCircle className="bulletinIcon" /> Industry-Recognized Certifications.</li>
                  <li><IoIosArrowDroprightCircle className="bulletinIcon" /> Expert Instructors with 10+ Years of Experience.</li>
                  <li><IoIosArrowDroprightCircle className="bulletinIcon" /> Placement Assistance to Top Companies.</li>
                  <li><IoIosArrowDroprightCircle className="bulletinIcon" /> Hands-On Training on Real-World Projects.</li>
                  <li><IoIosArrowDroprightCircle className="bulletinIcon" /> Mock Interviews & Career Support.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
