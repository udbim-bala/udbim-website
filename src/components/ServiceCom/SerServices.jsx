import React, { useEffect } from 'react';
import { FaDrawPolygon, FaCube, FaCalculator, FaBuilding } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SerServices.css';
import Service1 from '../../assets/Images/Service1.jpg'
import Service2 from '../../assets/Images/Service2.jpg'
import Service3 from '../../assets/Images/Service3.jpg'
import Service4 from '../../assets/Images/Service4.jpg'

const services = [
  {
    icon: <FaDrawPolygon />,
    title: '2D Rebar Detailing',
    description: 'Precise 2D rebar detailing and shop drawings for all concrete structures with compliance to international standards.',
    image: Service1,
    color: '#2a7fba',
  },
  {
    icon: <FaCube />,
    title: '3D Rebar Modeling (BIM)',
    description: 'Intelligent 3D BIM models for clash-free construction planning and visualization.',
    image: Service2,
    color: '#e74c3c',
  },
  {
    icon: <FaCalculator />,
    title: 'Rebar Estimation',
    description: 'Accurate quantity takeoffs and material planning to optimize your project budget.',
    image: Service3,
    color: '#27ae60',
  },
  {
    icon: <FaBuilding />,
    title: 'Structural Steel Detailing',
    description: 'Fabrication-ready 3D steel models and shop drawings for seamless construction.',
    image: Service4,
    color: '#f39c12',
  }
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <motion.div className="service-card" ref={ref} initial="hidden" animate={controls} variants={variants}>
      <div className="service-shape">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <div className="service-content">
        <div className="service-icon" style={{ color: service.color }}>
          {service.icon}
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </motion.div>
  );
};

const SerServices = () => {
  return (
    <section className="ser-services pb-0 mb-0" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Providing comprehensive detailing and modeling solutions for your structural engineering needs.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SerServices;
