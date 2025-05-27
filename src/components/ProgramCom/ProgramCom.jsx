import React, { useState } from 'react';
import { programs, categories } from '../../data/programs';
import ProgramCard from './ProgramCard';
import ProgramDetail from './ProgramDetails';
import './ProgramCom.css';

const ProgramCom = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredPrograms = programs.filter(program => program.category === selectedCategory);
  const displayedPrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 4);

  return (
    <div className="programs-page">
      <h1 className="page-title">Our Learning Programs</h1>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category.id);
              setSelectedProgram(null);
              setShowAll(false);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedProgram ? (
        <ProgramDetail 
          program={selectedProgram} 
          onBack={() => setSelectedProgram(null)} 
        />
      ) : (
        <>
          <div className="programs-grid">
            {displayedPrograms.map(program => (
              <ProgramCard
                key={program.id}
                program={program}
                onClick={() => setSelectedProgram(program)}
              />
            ))}
          </div>

          {filteredPrograms.length > 4 && (
            <button
              className="view-more-button"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View More Programs'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProgramCom;