import { FaSearch, FaCertificate, FaClock, FaHandsHelping } from 'react-icons/fa';
import { MdEngineering, MdArchitecture } from 'react-icons/md';
import { GiSteelClaws, GiConcreteBag } from 'react-icons/gi';
import { BsBuilding } from 'react-icons/bs';
import '../RecruitCom/RecruitServices.css'

const RecruitServices = () => {
  const recruitmentImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const services = [
    { 
      icon: <FaSearch size={40} />, 
      title: "Industry-Focused Expertise", 
      desc: "We specialize solely in Detailing and BIM — we speak your language and understand the talent you need." 
    },
    { 
      icon: <FaCertificate size={40} />, 
      title: "Trained & Certified Talent Pool", 
      desc: "Most candidates are graduates with real-world skills in Tekla, Revit, Navisworks, AutoCAD, and more." 
    },
    { 
      icon: <FaClock size={40} />, 
      title: "Faster Hiring, Better Fit", 
      desc: "We pre-screen candidates for technical and communication skills so you can hire with confidence." 
    },
    { 
      icon: <FaHandsHelping size={40} />, 
      title: "End-to-End Support", 
      desc: "From resume preparation to onboarding and career coaching, we provide holistic services." 
    }
  ];

  const expertise = [
    { icon: <GiSteelClaws size={30} />, title: "Steel Detailing", tools: "Tekla, SDS/2" },
    { icon: <GiConcreteBag size={30} />, title: "Rebar Detailing", tools: "Rebar CAD, RGS CAD, CADS RC, AutoCAD" },
    { icon: <BsBuilding size={30} />, title: "Precast Detailing", tools: "" },
    { icon: <MdArchitecture size={30} />, title: "BIM Modeling", tools: "Revit, Tekla, & BIM 360" },
    { icon: <MdEngineering size={30} />, title: "Rebar Estimation", tools: "" },
    { icon: <GiConcreteBag size={30} />, title: "Rebar 3D BIM", tools: "Revit" },
    { icon: <MdEngineering size={30} />, title: "Ducting Detailing", tools: "" }
  ];

  return (
    <section className="recruitment-services">
      <div className="services-hero">
        <div className="hero-content">
          <h1>Our Recruitment Service</h1>
          <h2>Tailored Solutions for Your Hiring Needs</h2>
          <p>
            We provided specialized talent solutions tailored for the Detailing and BIM Industry
          </p>
          <div className="highlight-service">
            <h3>HR Consulting & Staffing</h3>
            <p>Whether you're looking for temporary staffing or direct hire placements.</p>
          </div>
        </div>
        <div className="hero-image">
          <img src={recruitmentImage} alt="Recruitment team collaborating" />
        </div>
      </div>

      <div className="services-container">
  

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="expertise-section">
          <h3 className='mb-3'>Areas of Expertise</h3>
          <p className='text-center fs-5 pt-0 mt-0'>We provide specialized talent solutions tailored for the Detailing & BIM industry.</p>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div className="expertise-card" key={index}>
                <div className="expertise-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                {item.tools && <p className="tools">{item.tools}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitServices;
