import React, { useState } from 'react';
import '../css/Navbar.css';
import Logo from '../assets/Logo.png';
import { Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='navbarItems'>
      <div className='navbar-logo'>
        <img src={Logo} alt='Company Logo' />
      </div>

      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className='navbar-menu-box'>
        <ul className={menuOpen ? 'navbar-links active' : 'navbar-links'}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutUs'>About Us</Link></li>
          <li><Link to='/programs'>Programs</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/hiring-solutions'>Hiring Solutions</Link></li>
          <li className='navbar-buttons-mobile'>
            <Link to='/login'>
              <Button variant='outline-primary' className='w-100 my-2'>Login Portal</Button>
            </Link>
            <Link to='/contact'>
              <Button variant='outline-primary' className='w-100'>Contact</Button>
            </Link>
          </li>
        </ul>
      </div>

      <div className='navbar-buttons'>
        <Link to='/login'>
          <Button variant='outline-primary' className='me-2'>Login Portal</Button>
        </Link>
        <Link to='/contact'>
          <Button variant='outline-primary'>Contact</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
