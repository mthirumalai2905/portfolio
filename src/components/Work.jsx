import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Work.css';
import typify from '../img/typify.webp';

const Work = () => {
  return (
    <div className="work">
      <h2>My Work</h2>
      <div className="github">
        <GitHubCalendar
          username="mthirumalai2905" // Replace with your GitHub username
          blockSize={12} // Block size
          blockMargin={4} // Margin between blocks
          colorScheme="light" // Set color scheme to light
          fontSize={14} // Font size
          className="github"
          style={{ width: "100px", height: "auto" }} // Correct way to apply inline styles
        />
      </div>
      <div className="project">
        <div className="project-one"><img src={typify}/></div>
        <div className="project-two">Project 2</div>
        <div className="project-three">Project 3</div>
        <div className="project-four">Project 4</div>
      </div>
    </div>
  );
};

export default Work;
