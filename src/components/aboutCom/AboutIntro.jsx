import React from 'react'
import '../aboutCom/AboutIntro.css'
import { FaHardHat } from 'react-icons/fa';

const AboutIntro = () => {
  return (
    <section className="about-intro mt-0">
      <div className="about-intro-overlay"></div>
      <div className="about-intro-content">
        <FaHardHat className="about-intro-icon" />
        <h1>About Universal Detailing and BIM Training Institute</h1>
        <p className="about-intro-tagline">
          Your Trusted Partner for Detailing, BIM Modeling & Estimation Drafting Excellence
        </p>
        <div className="about-intro-text">
          <p>
            Universal Detailing and BIM Training Institute is a leading training institute specializing in Rebar Detailing, BIM Modeling, Structural Drafting, Structural Steel Detailing, Precast Detailing, MEP Ducting Detailing, Rebar Estimation and Bar Bending Schedule (BBS) training. We are dedicated to transforming civil engineering graduates, draftsmen, and construction professionals into skilled experts who are job-ready and industry-certified.
          </p>
          <p>
            With a vision to bridge the gap between academic learning and industry requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
