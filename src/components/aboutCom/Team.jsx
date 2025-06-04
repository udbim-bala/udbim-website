import React, { useEffect, useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import "../aboutCom/Team.css";

const aboutContent = {
  title: "About Our Team",
  description: `Our training team consists of industry professionals with strong expertise along 10+ years industry in each course we offered. Each trainer brings years of practical experience from working on major infrastructure and construction projects across the globe.`,

  coreExpertise: [
    {
      title: "Proficient in industry-standard top software's",
      children: [],
    },
    {
      title: "In-depth knowledge of international detailing standards and codes",
      children: [],
    },
    {
      title: "Hands-on Industry Experience",
      children: [],
    },
    {
      title: "Project Lifecycle Knowledge",
      children: [],
    },
    {
      title: "Code & Standard Expertise",
      children: [],
    },
    {
      title: "Training Pedagogy",
      children: [],
    },
    {
      title: "Placement-Driven Mentorship",
      children: [],
    },
  ],

  professionalBackground: [
    {
      title: "Trainers have worked on",
      children: [
        "Residential & commercial high-rise buildings",
        "Bridges, tunnels, and metro projects",
        "Industrial plants and infrastructure developments",
      ],
    },
    {
      title: "Skilled in creating",
      children: [
        "Bar Bending Schedules (BBS)",
        "Shop drawings and fabrication drawings",
        "BIM models with accurate Levels of Development (LOD 100–400)",
      ],
    },
  ],

  experienceNote:
    "Experience with both domestic and international projects, enabling trainees to gain global exposure.",
};

const Team = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const animateItems = () => {
      const allItems = [];
      
      // Animate core expertise items
      aboutContent.coreExpertise.forEach((_, idx) => {
        allItems.push(`core-${idx}`);
      });

      // Animate professional background items and their children
      aboutContent.professionalBackground.forEach((item, idx) => {
        allItems.push(`prof-${idx}`);
        item.children.forEach((_, childIdx) => {
          allItems.push(`prof-${idx}-child-${childIdx}`);
        });
      });

      allItems.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item]);
        }, index * 150);
      });
    };

    animateItems();
  }, []);

  const renderItem = (item, prefix, index) => (
    <div 
      key={`${prefix}-${index}`}
      className={`mindmap-item ${visibleItems.includes(`${prefix}-${index}`) ? 'visible' : ''}`}
    >
      <div className="mindmap-connector">
        {item.children.length > 0 ? (
          <FaChevronRight className="icon-arrow" />
        ) : (
          <FaCheck className="icon-check" />
        )}
      </div>
      <div className="mindmap-content">
        {(item.title === "Trainers have worked on" || item.title === "Skilled in creating") ? (
          <strong>{item.title}</strong>
        ) : (
          item.title
        )}
        {item.children.length > 0 && (
          <div className="mindmap-children">
            {item.children.map((child, childIdx) => (
              <div
                key={`${prefix}-${index}-child-${childIdx}`}
                className={`mindmap-child-item ${
                  visibleItems.includes(`${prefix}-${index}-child-${childIdx}`) ? 'visible' : ''
                }`}
              >
                <div className="mindmap-child-connector">
                  <FaCheck className="icon-check" />
                </div>
                <div className="mindmap-child-content">{child}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="team-section">
      <h2 className="team-title">{aboutContent.title}</h2>
      <p className="team-description">{aboutContent.description}</p>

      <div className="mindmap-container">
        <div className="mindmap-column">
          <h3 className="mindmap-title">Core Expertise</h3>
          <div className="mindmap-items">
            {aboutContent.coreExpertise.map((item, idx) =>
              renderItem(item, "core", idx)
            )}
          </div>
        </div>

        <div className="mindmap-column">
          <h3 className="mindmap-title">Professional Background</h3>
          <div className="mindmap-items">
            {aboutContent.professionalBackground.map((item, idx) =>
              renderItem(item, "prof", idx)
            )}
          </div>
        </div>
      </div>

      <p className="experience-note">{aboutContent.experienceNote}</p>
    </section>
  );
};

export default Team;