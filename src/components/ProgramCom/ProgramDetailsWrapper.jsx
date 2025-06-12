// ProgramDetailsWrapper.js
import { useParams, useNavigate } from 'react-router-dom';
import { programs } from '../../data/programs';
import ProgramDetail from './ProgramDetails';

const ProgramDetailsWrapper = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  
  // Find the program
  const program = programs.find(
    p => p.id === Number(id) && p.category === category
  );

  if (!program) {
    return <div>Program not found</div>;
  }

  return <ProgramDetail 
           program={program} 
           onBack={() => navigate('/programs')} 
         />;
};

export default ProgramDetailsWrapper;