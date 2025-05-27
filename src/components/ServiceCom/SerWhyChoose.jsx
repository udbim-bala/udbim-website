import React from 'react';
import { FaShieldAlt, FaRocket, FaUserTie, FaChartLine, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './SerWhyChoose.css';

const features = [
  { 
    icon: <FaShieldAlt />, 
    title: 'Unmatched Precision', 
    description: 'Zero-defect policy with multi-stage quality assurance processes',
    color: '#4e73df'
  },
  { 
    icon: <FaRocket />, 
    title: 'Lightning Fast Delivery', 
    description: 'Guaranteed on-time completion with our optimized workflows',
    color: '#1cc88a'
  },
  { 
    icon: <FaUserTie />, 
    title: 'Industry Veterans', 
    description: '15+ years average experience among our specialist team',
    color: '#f6c23e'
  },
  { 
    icon: <FaChartLine />, 
    title: 'Global Benchmarking', 
    description: 'Adherence to ISO 9001 and international best practices',
    color: '#e74a3b'
  },
  { 
    icon: <FaHeadset />, 
    title: 'Concierge Service', 
    description: 'Dedicated account manager for seamless communication',
    color: '#36b9cc'
  }
];

const SerWhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="ser-why-choose pt-0">
      <div className="container">
        <motion.div 
          className="why-choose-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="why-choose-text">
            <motion.div variants={itemVariants}>
              <span className="section-pre-title">Our Advantages</span>
              <h2 className="section-title text-dark">Why Industry Leaders Choose Us</h2>
              <p className="section-subtitle text-dark">Where innovation meets execution for unparalleled results</p>
            </motion.div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  className="feature-card" 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="feature-icon-wrapper"
                    style={{ backgroundColor: `${feature.color}20`, borderColor: feature.color }}
                  >
                    <div 
                      className="feature-icon" 
                      style={{ color: feature.color }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="why-choose-visual"
            variants={imageVariants}
          >
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Professional team collaborating" 
                className="main-image"
              />
              <div className="floating-elements">
                <div className="floating-badge badge-1">
                  <span>98%</span>
                  <small className='px-2'>Client Retention</small>
                </div>
                <div className="floating-badge badge-2">
                  <span>250+</span>
                  <small className='px-2'>Projects</small>
                </div>
                <div className="floating-badge badge-3">
                  <span>24/7</span>
                  <small >Support</small>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SerWhyChoose;