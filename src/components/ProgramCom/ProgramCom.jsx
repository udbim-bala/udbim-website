import React, { useState } from 'react';
import { programs, categories } from '../../data/programs';
import ProgramCard from './ProgramCard';
import ProgramDetail from './ProgramDetails';
import './ProgramCom.css';

const ProgramCom = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = programs.filter(
    program => program.category === selectedCategory
  );

  return (
    <div className="programs-page">
      <h1 className="page-title">Our Learning Programs</h1>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category.id);
              setSelectedProgram(null);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Program Details View or Grid */}
      {selectedProgram ? (
        <ProgramDetail
          program={selectedProgram}
          onBack={() => setSelectedProgram(null)}
        />
      ) : (
        <div className="programs-grid">
          {filteredPrograms.map(program => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgramCom;