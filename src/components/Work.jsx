import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Work.css';
import typifyImage from '../img/typify.webp';
import typifyVideo from '../videos/typify.webm'; // Replace with actual path to Typify video
import blogImage from '../img/blog.png'; // Replace with actual image for Blog project
import blogVideo from '../videos/blog.webm'; // Replace with actual path to Blog video

const Work = () => {
  const [isHovered, setIsHovered] = useState({
    project1: false,
    project2: false,
  });

  const [showMore, setShowMore] = useState(false); // State to manage view more projects

  const handleMouseEnter = (project) => {
    setIsHovered((prevState) => ({ ...prevState, [project]: true }));
  };

  const handleMouseLeave = (project) => {
    setIsHovered((prevState) => ({ ...prevState, [project]: false }));
  };

  const handleClick = (link) => {
    window.location.href = link; // Replace with the respective project link
  };

  const toggleShowMore = () => {
    setShowMore(!showMore); // Toggle the state of showing more projects
  };

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
          style={{ width: '100px', height: 'auto' }} // Correct way to apply inline styles
        />
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button className="view-more-btn" onClick={toggleShowMore}>
          {showMore ? 'Show Less Projects' : 'Show More Projects'}
        </button>
      </div>

      <div className="project">
        {/* Project 1: Typify */}
        <div
          className="project-one"
          onMouseEnter={() => handleMouseEnter('project1')}
          onMouseLeave={() => handleMouseLeave('project1')}
          onClick={() => handleClick('https://your-typify-project-link.com')} // Replace with your actual project link
        >
          {isHovered.project1 ? (
            <video
              src={typifyVideo}
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease',
              }}
            />
          ) : (
            <img
              src={typifyImage}
              alt="Typify Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        {/* Project 2: Blog */}
        <div
          className="project-two"
          onMouseEnter={() => handleMouseEnter('project2')}
          onMouseLeave={() => handleMouseLeave('project2')}
          onClick={() => handleClick('https://your-blog-project-link.com')} // Replace with your actual blog project link
        >
          {isHovered.project2 ? (
            <video
              src={blogVideo}
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease',
              }}
            />
          ) : (
            <img
              src={blogImage}
              alt="Blog Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        {/* Project 3 */}
        <div className="project-three">Project 3</div>
        {/* Project 4 */}
        <div className="project-four">Project 4</div>

        {/* Show More Projects */}
        {showMore && (
          <>
            {/* Project 5 */}
            <div className="project-five">Project 5</div>
            {/* Project 6 */}
            <div className="project-six">Project 6</div>
            {/* Project 7 */}
            <div className="project-seven">Project 7</div>
            {/* Project 8 */}
            <div className="project-eight">Project 8</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Work;
