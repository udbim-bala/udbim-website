import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Recruitors from './pages/Recruitors';
import Contact from './pages/Contact';
import LoginPortal from './pages/LoginPortal';
import ProgramDetails from './components/ProgramCom/ProgramDetails'; // NEW
import ScrollToTop from './ScrollToTop';
import ProgramDetailsWrapper from './components/ProgramCom/ProgramDetailsWrapper';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:category/:id" element={<ProgramDetailsWrapper/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/hiring-solutions" element={<Recruitors />} />
          <Route path="/login" element={<LoginPortal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
