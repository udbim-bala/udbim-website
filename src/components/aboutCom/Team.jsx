import React, { useEffect, useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import "../aboutCom/Team.css";

const aboutContent = {
  title: "About Our Team",
  description: `Our training team consists of industry professionals with strong expertise along 10+ years industry in each course we offered. Each trainer brings years of practical experience from working on major infrastructure and construction projects across the globe.`,
  coreExpertise: [
    "Proficient in industry-standard top software's",
    "In-depth knowledge of international detailing standards and codes",
    "Skilled in creating:",
    "Bar Bending Schedules (BBS)",
    "Shop drawings and fabrication drawings",
    "BIM models with accurate Levels of Development (LOD 100–400)",
  ],
  professionalBackground: [
    "Trainers have worked on:",
    "Residential & commercial high-rise buildings",
    "Bridges, tunnels, and metro projects",
    "Industrial plants and infrastructure developments",
  ],
  experienceNote:
    "Experience with both domestic and international projects, enabling trainees to gain global exposure.",
};

const fadeInDelay = 150;

const Team = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    aboutContent.coreExpertise.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, `core-${i}`]);
      }, i * fadeInDelay);
    });
    aboutContent.professionalBackground.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, `prof-${i}`]);
      }, (aboutContent.coreExpertise.length + i) * fadeInDelay);
    });
  }, []);

  const isVisible = (key) => visibleItems.includes(key);

  const renderMindMapItem = (item, idx, prefix, isNested = false) => {
    const isParent = item.endsWith(":");
    return (
      <div
        key={`${prefix}-${idx}`}
        className={`mindmap-item ${isParent ? "parent" : ""} ${isNested ? "nested" : ""} ${
          isVisible(`${prefix}-${idx}`) ? "visible" : ""
        }`}
      >
        <div className="mindmap-connector">
          {isParent ? <FaChevronRight className="icon-arrow" /> : <FaCheck className="icon-check" />}
        </div>
        <div className="mindmap-content">
          {item}
          {isParent && (
            <div className="mindmap-children">
              {aboutContent[prefix === "core" ? "coreExpertise" : "professionalBackground"]
                .slice(idx + 1, idx + 4)
                .map((child, childIdx) => renderMindMapItem(child, idx + 1 + childIdx, prefix, true))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="team-section container-fluid py-5">
      <h2 className="team-title text-center mb-4">{aboutContent.title}</h2>
      <p className="team-description text-center mb-5">{aboutContent.description}</p>

      <div className="mindmap-container">
        <div className="mindmap-column">
          <h3 className="mindmap-title">Core Expertise</h3>
          <div className="mindmap-items">
            {aboutContent.coreExpertise
              .filter((_, idx) => idx < 3) // Only show parent items, children are rendered recursively
              .map((item, idx) => renderMindMapItem(item, idx, "core"))}
          </div>
        </div>

        <div className="mindmap-divider"></div>

        <div className="mindmap-column">
          <h3 className="mindmap-title">Professional Background</h3>
          <div className="mindmap-items">
            {aboutContent.professionalBackground
              .filter((_, idx) => idx < 1) // Only show parent items
              .map((item, idx) => renderMindMapItem(item, idx, "prof"))}
          </div>
        </div>
      </div>

      <p className="experience-note text-center">
        {aboutContent.experienceNote}
      </p>
    </section>
  );
};

export default Team;