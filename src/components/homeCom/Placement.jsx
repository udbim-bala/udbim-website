import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaDraftingCompass,
  FaProjectDiagram,
  FaFileAlt,
  FaUserTie,
  FaComments,
  FaPaperPlane,
  FaCalculator,
  FaCubes,
} from 'react-icons/fa';

import '../homeCom/Placement.css';

const jobRoles = [
  { icon: <FaDraftingCompass style={{ color: '#0dbcd4' }} />, title: 'Rebar Detailers' },
  { icon: <FaProjectDiagram style={{ color: '#0dbcd4' }} />, title: 'BIM Modelers' },
  { icon: <FaFileAlt  style={{ color: '#0dbcd4' }}/>, title: 'Bar Bending Engineers' },
  { icon: <FaUserTie  style={{ color: '#0dbcd4' }}/>, title: 'Structural Drafters' },
  { icon: <FaCalculator  style={{ color: '#0dbcd4' }}/>, title: 'Rebar Estimators' },
  { icon: <FaCubes  style={{ color: '#0dbcd4' }}/>, title: 'Steel Modelers' },
];

const supportFeatures = [
  {
    icon: <FaProjectDiagram />,
    title: 'Real World Projects',
    desc: 'Hands-on experience with live industry scenarios.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Resume Making',
    desc: 'Craft a job-ready, standout resume.',
  },
  {
    icon: <FaComments />,
    title: 'Mock Interviews',
    desc: 'Practice sessions with feedback to prepare confidently.',
  },
  {
    icon: <FaUserTie />,
    title: 'Interview Support',
    desc: 'Guidance and support before your interviews.',
  },
  {
    icon: <FaPaperPlane />,
    title: 'Placement Assistance',
    desc: 'Connections with top detailing firms for real job opportunities.',
  },
];

const Placement = () => {
  return (
    <section className="placement-support-section">
      <Container>

        <h2 className="section-title text-center">Placement and Career Support</h2>
        <p className="placement-subheading text-center">Our Graduates Land Jobs As</p>

        <Row className="job-grid text-center mb-0 pb-0">
          {jobRoles.map((role, index) => (
            <Col key={index} xs={6} md={2} className="job-item">
              {role.icon }
              <p className="job-name">{role.title}</p>
            </Col>
          ))}
        </Row>

        <p className="placement-subheading text-center mt-5">We Offer</p>
        <Row className="offer-steps mt-0">
          {supportFeatures.map((feature, index) => (
            <Col key={index} md={index === 4 ? 12 : 6} className="offer-card">
              {feature.icon}
              <div>
                <h6>{feature.title}</h6>
                <p>{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Placement;
