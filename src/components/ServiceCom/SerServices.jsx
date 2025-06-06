import React, { useEffect, useState } from 'react';
import { FaDrawPolygon, FaCube, FaCalculator, FaBuilding, FaTimes, FaChevronRight } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SerServices.css';
import Service1 from '../../assets/Images/Service1.jpg';
import Service2 from '../../assets/Images/Service2.jpg';
import Service3 from '../../assets/Images/Service3.jpg';
import Service4 from '../../assets/Images/Service4.jpg';

const services = [
  {
    icon: <FaDrawPolygon />,
    title: '2D Rebar Detailing',
    description: 'Precise 2D rebar detailing and shop drawings for all concrete structures with compliance to international standards.',
    image: Service1,
    color: '#2a7fba',
    accent: '#e3f2fd',
    details: {
      overview: 'Universal Detailing and Modeling Services provides high-quality 2D Rebar Detailing and Shop Drawing services for structural and civil engineering projects worldwide.',
      offers: [
        'Rebar Detailing for Residential & Commercial Buildings',
        'Rebar Detailing for Industrial Structures',
        'Rebar Detailing for Bridges and Infrastructure',
        'Rebar Detailing for Foundations, Slabs, Beams, Columns, Walls',
        'Code Compliance: ACI, RSIC, EC2, BS, AS, IS'
      ],
      shopDrawings: [
        'Rebar Placement Drawings',
        'Bar Bending Schedules (BBS)',
        'Concrete & Section Views',
        'Reinforcement Details for Fabrication & Site'
      ],
      whyChooseUs: [
        '🛠️ Accuracy & Quality Control',
        '⏱️ Fast Turnaround',
        '👷 Expert Team',
        '📐 Software Proficiency',
        '💬 Global Delivery & Local Support'
      ]
    }
  },
  {
    icon: <FaCube />,
    title: '3D Rebar Modeling (BIM)',
    description: 'Intelligent 3D BIM models for clash-free construction planning and visualization.',
    image: Service2,
    color: '#e74c3c',
    accent: '#ffebee',
    details: {
      overview: 'Transform your detailing into intelligent 3D BIM models with clash-free coordination and construction-ready data.',
      offers: [
        '3D Rebar Modeling for Foundations, Columns, Beams, Slabs',
        '3D Rebar Modeling for Retaining & Shear Walls, Bridges, High-rise & Industrial',
        'BIM Coordination & Clash Detection',
        'Clash-free models with architectural & MEP',
        'Minimized RFIs and rework',
        'Improved cross-discipline communication'
      ],
      reports: [
        'Bar Bending Schedules',
        'Material Take-Offs',
        'Data-rich Shop Drawings'
      ],
      whyChooseUs: [
        '📊 Model-Based Accuracy',
        '🔁 Seamless Trade Coordination',
        '🛠️ Fast Turnarounds',
        '🌍 Global Code Support (ACI, BS, IS, Eurocode)',
        '💬 Real-Time Communication'
      ]
    }
  },
  {
    icon: <FaCalculator />,
    title: 'Rebar Estimation',
    description: 'Accurate quantity takeoffs and material planning to optimize your project budget.',
    image: Service3,
    color: '#27ae60',
    accent: '#e8f5e9',
    details: {
      overview: 'Accurate takeoffs and budgeting services to optimize procurement and control costs effectively.',
      offers: [
        'Detailed Quantity Takeoffs for Footings, Slabs, Beams, Columns, Walls',
        'Detailed Quantity Takeoffs for Foundations, Retaining Walls, Stairs',
        'Bar Bending Schedule (BBS)',
        'Bar Marks, Cut Lengths, Diameters',
        'Fabrication Summary Sheets',
        'Project Budgeting & Planning',
        'Steel Optimization & Waste Reduction',
        'Precise Bid Preparation'
      ],
      whyChooseUs: [
        '📏 High Accuracy',
        '🔄 Quick Turnaround',
        '🌐 International Code Compliance',
        '📩 Deliverables in Excel, PDF, BBS',
        '💬 Live WhatsApp Support'
      ]
    }
  },
  {
    icon: <FaBuilding />,
    title: 'Structural Steel Detailing',
    description: 'Fabrication-ready 3D steel models and shop drawings for seamless construction.',
    image: Service4,
    color: '#f39c12',
    accent: '#fff3e0',
    details: {
      overview: 'Expert steel detailing and modeling to support fabrication and streamline construction.',
      offers: [
        '3D Steel Modeling with Tekla, SDS/2, Revit',
        '3D Steel Modeling for Welds, Bolts, Bracings, Connections',
        'Clash Detection with MEP & Architectural',
        '2D Steel Detailing',
        'Assembly & Part Drawings',
        'Erection Plans',
        'CNC/DXF for Fabrication',
        'Connection Design Support',
        'Engineering Coordination',
        'Code Compliance'
      ],
      whyChooseUs: [
        '🛠️ Experienced Steel Detailers',
        '📏 Millimeter Precision',
        '⏱️ Fast Turnarounds',
        '🌍 AISC, IS, BS, Eurocode Standards',
        '💬 WhatsApp Client Communication'
      ]
    }
  }
];

const ServiceCard = ({ service, index, onClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        delay: index * 0.15, 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
    }
  };

  return (
    <motion.div 
      className="service-card" 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants}
      whileHover="hover"
      onClick={() => onClick(service)}
    >
      <div className="service-shape">
        <div className="service-image-overlay" style={{ backgroundColor: service.color }} />
        <img src={service.image} alt={service.title} className="service-image" />
        <div className="service-number">0{index + 1}</div>
      </div>
      <div className="service-content">
        <div className="service-icon" style={{ color: service.color }}>
          {service.icon}
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button className="learn-more-btn" style={{ color: service.color }}>
          Learn More <FaChevronRight />
        </button>
      </div>
    </motion.div>
  );
};

const ServiceDetailModal = ({ service, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className="service-detail-modal">
      <motion.div 
        className="modal-overlay" 
        onClick={onClose}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      
      <motion.div 
        className="modal-content"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header" style={{ backgroundColor: service.color }}>
          <div className="modal-header-content">
            <div className="service-icon">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p className="service-overview">{service.details.overview}</p>
          </div>
          <div className="modal-header-accent" style={{ backgroundColor: service.accent }} />
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3>What We Offer</h3>
            <div className="offer-grid">
              {service.details.offers.map((offer, index) => (
                <div key={index} className="offer-card">
                  <div className="offer-icon" style={{ color: service.color }}>•</div>
                  <p>{offer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {service.details.shopDrawings && (
            <div className="modal-section">
              <h3>Shop Drawings Include</h3>
              <ul className="styled-list">
                {service.details.shopDrawings.map((item, index) => (
                  <li key={index}>
                    <span className="list-icon" style={{ color: service.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {service.details.reports && (
            <div className="modal-section">
              <h3>Reports & Schedules</h3>
              <ul className="styled-list">
                {service.details.reports.map((report, index) => (
                  <li key={index}>
                    <span className="list-icon" style={{ color: service.color }}>✓</span>
                    {report}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="modal-section why-choose-us">
            <h3>Why Choose Us</h3>
            <div className="benefits-grid">
              {service.details.whyChooseUs.map((reason, index) => (
                <div key={index} className="benefit-card" style={{ borderColor: service.color }}>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SerServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="ser-services" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <p className="section-description">
            Providing comprehensive detailing and modeling solutions for your structural engineering needs.
            Trusted by contractors and engineers worldwide for precision and reliability.
          </p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              onClick={setSelectedService}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SerServices;