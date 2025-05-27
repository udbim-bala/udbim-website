import React from 'react';
import '../RecruitCom/RecruitAbout.css';

const RecruitAbout = () => {
  return (
    <section className="recruit-about-section" id='about'> 
      <h2 className="recruit-about-heading">About Our Recruitment Services</h2>
      <p className="recruit-about-subtext text-center">
        At Universal Detailing & BIM Training Institute, we're more than just educators – <br />
        we are career accelerators and talent connectors in the Detailing and BIM industry.
      </p>

      <div className="recruit-about-container pt-3">
        {/* Left Section */}
        <div className="recruit-about-left">
          <div className="recruit-mission">
            <h2 style={{color:"#272361", fontWeight:"600"}}>Our Mission</h2>
            <p style={{color:"#272361"}}>
              Our mission is to bridge the gap between skilled professionals and forward-thinking
              companies that are shaping the future of construction, infrastructure, and design.
              We empower talent and enable growth within the AEC industry.
            </p>
          </div>

          <h2 className="recruit-who-heading">Who We Serve</h2>

          <div className="recruit-feature">
            <div className="recruit-number">01</div>
            <div>
              <h3>Emerging Talent & Fresh Graduates</h3>
              <p>
                Individuals aspiring to build a successful career in Steel Detailing, Rebar,
                Precast, or BIM Coordination – we provide the right start and guidance.
              </p>
            </div>
          </div>

          <div className="recruit-feature">
            <div className="recruit-number">02</div>
            <div>
              <h3>Experienced Professionals</h3>
              <p>
                Skilled Detailers, BIM Modelers, and Coordinators seeking their next big
                opportunity or growth move in the AEC domain.
              </p>
            </div>
          </div>

          <div className="recruit-feature">
            <div className="recruit-number">03</div>
            <div>
              <h3>Industry-Leading Employers</h3>
              <p>
                AEC firms, Steel Detailing companies, BIM consultants, and infrastructure
                developers looking to onboard dependable and qualified talent.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="recruit-about-right">
          <div className="recruit-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?w=600&auto=format&fit=crop&q=60"
              alt="Team collaboration"
              className="recruit-image"
            />
            <div className="recruit-image-quote">
              “Take care of your employees, and they will take care of your business.”
              <br /> — Richard Branson
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitAbout;
