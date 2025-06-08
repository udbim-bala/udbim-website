import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope
} from 'react-icons/fa';
import '../css/Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Social Section */}
      <div className="footer-social pt-2 pb-0">
        <Container>
          <Row className="align-items-center py-3">
            <Col md={6} xs={12} className="text-md-start text-center mb-2 mb-md-0">
              <span className="social-text">Connect with us on social media:</span>
            </Col>
            <Col md={6} xs={12}>
              <div className="social-icons justify-content-md-end justify-content-center d-flex">
                {[{ icon: <FaFacebookF />, label: 'Facebook' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaLinkedin />, label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main py-4">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="mb-4">
              <div className="footer-about text-md-start text-center">
                <img src={Logo} alt="UD-BIM Logo" className="footer-logo mb-2" />
                <p className="footer-text">
                  At UD- BIM Training Institute, it's never too late to learn or change your field. Whether you're starting fresh or upgrading your skills, we empower every learner with hands-on training in Rebar Detailing, BIM, and structural Detailing. Unlock new career opportunities, your future in Digital engineering starts here!
                </p>
              </div>
            </Col>

            <Col lg={2} md={6} sm={12} className="mb-4 text-md-start text-center">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                {['Home', 'About Us', 'Services', 'Hiring Solutions', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-4 text-md-start text-center">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links list-unstyled">
                {['Courses', 'College Bulk Package', 'Detailing Office Package'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={4} md={6} sm={12} className="text-md-start text-center ">
              <h5 className="footer-heading">Contact Us</h5>
              <ul className="footer-contact list-unstyled">
                <li className="d-flex justify-content-center justify-content-md-start mb-2">
                  <span className="contact-icon me-2 mt-1"><FaPhoneAlt /></span>
                  <div>
                    <a href="tel:+918122149339" className="footer-link contact-link">+91 81221 49339</a>
                    <div className="contact-hours small">Mon-Sun, 9AM-6PM</div>
                  </div>
                </li>
                <li className="d-flex justify-content-center justify-content-md-start mb-2">
                  <span className="contact-icon me-2 mt-1"><FaEnvelope /></span>
                  <a href="mailto:contact@ud-bimtraining.com" className="footer-link contact-link">contact@ud-bimtraining.com</a>
                </li>
                <li className="d-flex justify-content-center justify-content-md-start mb-2">
                  <span className="contact-icon me-2 mt-1"><FaGlobe /></span>
                  <a href="https://www.ud-bimtraining.com" target="_blank" rel="noopener noreferrer" className="footer-link contact-link">www.ud-bimtraining.com</a>
                </li>
                <li className="d-flex  justify-content-center justify-content-md-start">
                  <span className="contact-icon me-2 mt-1"><FaMapMarkerAlt /></span>
                  <address className="footer-address">
                    73, 2nd Floor, South Sivan Koil St,<br />
                    Opp. to Ambiga Driving School,<br />
                    Vadapalani, Chennai,<br />
                    Tamil Nadu - 600026
                  </address>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-2">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="copyright mb-0">
                &copy; {currentYear} UD-BIM Training Institute. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
