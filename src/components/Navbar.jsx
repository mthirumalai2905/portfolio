import React, { useState } from 'react';
import './Navbar.css';
import Work from './Work';
import CP from './CP';

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState('work'); // Default to Work

  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  const getHrColor = () => {
    return selectedSection === 'work' ? 'green' : 'orange';
  };

  return (
    <div className='nav'>
      <div className='ops'>
        <a onClick={() => handleNavClick('work')}>WORK</a>
        <a onClick={() => handleNavClick('cp')}>CP</a>
      </div>
      <hr style={{ borderColor: getHrColor() }} />
      <div className="content">
        {selectedSection === 'work' && <Work />}
        {selectedSection === 'cp' && <CP />}
      </div>
    </div>
  );
};

export default Navbar;
