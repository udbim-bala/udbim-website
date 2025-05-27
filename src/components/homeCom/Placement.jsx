import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaDraftingCompass,
  FaProjectDiagram,
  FaFileAlt,
  FaUserTie,
  FaComments,
  FaPaperPlane
} from 'react-icons/fa';
import '../homeCom/Placement.css';

const Placement = () => {
  return (
    <section className="placement-support-section">
      <Container>
        <h2 className="section-title text-center">Placement and Career Support</h2>

        <p className="placement-subheading text-center">Our Graduates Land Jobs As</p>
        <Row className="job-grid text-center mb-0 pb-0">
          <Col xs={6} md={3} className="job-item">
            <FaDraftingCompass className="job-icon" />
            <p className='job-name'>Rebar Detailers</p>
          </Col>
          <Col xs={6} md={3} className="job-item">
            <FaProjectDiagram className="job-icon" />
            <p className='job-name'>BIM Modelers</p>
          </Col>
          <Col xs={6} md={3} className="job-item">
            <FaFileAlt className="job-icon" />
            <p className='job-name'>Bar Bending Engineers</p>
          </Col>
          <Col xs={6} md={3} className="job-item">
            <FaUserTie className="job-icon" />
            <p className='job-name'>Structural Drafters</p>
          </Col>
        </Row>

        
        <Row className="offer-steps mt-0">
          <p className="placement-subheading text-center mt-5">We Offer</p>
          <Col md={6} className="offer-card">
            <FaProjectDiagram className="offer-icon" />
            <div>
              <h6>Real World Projects</h6>
              <p>Hands-on experience with live industry scenarios.</p>
            </div>
          </Col>
          <Col md={6} className="offer-card">
            <FaFileAlt className="offer-icon" />
            <div>
              <h6>Resume Making</h6>
              <p>Craft a job-ready, standout resume.</p>
            </div>
          </Col>
          <Col md={6} className="offer-card">
            <FaComments className="offer-icon" />
            <div>
              <h6>Mock Interviews</h6>
              <p>Practice sessions with feedback to prepare confidently.</p>
            </div>
          </Col>
          <Col md={6} className="offer-card">
            <FaUserTie className="offer-icon" />
            <div>
              <h6>Interview Support</h6>
              <p>Guidance and support before your interviews.</p>
            </div>
          </Col>
          <Col md={12} className="offer-card">
            <FaPaperPlane className="offer-icon" />
            <div>
              <h6>Placement Assistance</h6>
              <p>Connections with top detailing firms for real job opportunities.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Placement;
