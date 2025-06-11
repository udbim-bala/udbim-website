import React from 'react';
import './SerHero.css';

const SerHero = () => {
  const phone = '916369303038';
  const message = encodeURIComponent(
    "Hello, I would like to request a free quote for your detailing and modeling services."
  );

  const handleQuoteClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="ser-hero">
      <div className="ser-hero-glass">
        <h1>Elevate Your Projects with Universal Detailing and Modeling Service</h1>
        <p>
          We provide reliable 2D/3D modeling solutions tailored to your construction needs
        </p>
        <button className="cta-button" onClick={handleQuoteClick}>
          Request a Free Quote
        </button>
      </div>
    </section>
  );
};

export default SerHero;
