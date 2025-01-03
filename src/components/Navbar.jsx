import React, { useState } from 'react';
import './Navbar.css';
import Work from './Work';
import Resume from './Resume';
import Blog from './Blog';
import CP from './CP';
import Quiz from './Quiz';

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState(''); // Store the selected section
  
  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  const getHrColor = () => {
    switch (selectedSection) {
      case 'work':
        return 'green'; // Color for Work section
      case 'resume':
        return 'blue'; // Color for Resume section
      case 'blog':
        return 'purple'; // Color for Blog section
      case 'cp':
        return 'orange'; // Color for CP section
      case 'quiz':  
        return 'red'; // Color for Quiz section
      default:
        return 'black'; // Default color
    }
  };

  return (
    <div className='nav'>
      <div className='ops'>
        <a onClick={() => handleNavClick('work')}>WORK</a>
        <a onClick={() => handleNavClick('resume')}>RESUME</a>
        <a onClick={() => handleNavClick('blog')}>BLOG</a>
        <a onClick={() => handleNavClick('cp')}>CP</a>
        <a onClick={() => handleNavClick('quiz')}>QUIZ</a>
      </div>
      {/* Dynamically change the color of the hr */}
      <hr style={{ borderColor: getHrColor() }} />
      
      {/* Conditionally render the selected section */}
      <div className="content">
        {selectedSection === 'work' && <Work />}
        {selectedSection === 'resume' && <Resume />}
        {selectedSection === 'blog' && <Blog />}
        {selectedSection === 'cp' && <CP />}
        {selectedSection === 'quiz' && <Quiz />}
      </div>

     
    </div>
  );
};

export default Navbar;
