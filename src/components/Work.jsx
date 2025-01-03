import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Work.css';
import typifyImage from '../img/typify.webp';
import typifyVideo from '../videos/typify.webm';
import blogImage from '../img/blog.webp';
import blogVideo from '../videos/blog.webm';
import pokedexImage from '../img/pokedex.webp'; 
import pokedexVideo from '../videos/pokedex.webm'; 
import imdbImage from '../img/imdb.webp'; 
import imdbVideo from '../videos/imdb.webm'; 
import sketchImage from '../img/sketch.webp';
import sketchVideo from '../videos/sketch.webm';
import kanban from '../img/kanban.png';
import kanbanVideo from '../videos/kanban.webm';
import java from '../img/java.png';
import python from '../img/python.png';
import js from '../img/js.png';
import ts from '../img/ts.png';
import html from '../img/html.png';
import css from '../img/css.png';
import docker from '../img/docker.png';
import kubernetes from '../img/kuberenetes.png';
import git from '../img/git.png';
import github from '../img/github.png';
import react from '../img/react.png';
import next from '../img/nextjs.png';
import node from '../img/nodejs.png';
import mongodb from '../img/mongodb.png';
import go from '../img/go.webp';
import php from '../img/php.png';
import sql from '../img/sql.png';
import postgres from '../img/postgres.png';

const Work = () => {
  const [isHovered, setIsHovered] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
  });

  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = (project) => {
    setIsHovered((prevState) => ({ ...prevState, [project]: true }));
  };

  const handleMouseLeave = (project) => {
    setIsHovered((prevState) => ({ ...prevState, [project]: false }));
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="work">
      <h2>My Work</h2>
      <div className="github">
        <GitHubCalendar
          username="mthirumalai2905"
          blockSize={12}
          blockMargin={4}
          colorScheme="light"
          fontSize={14}
          className="github"
          style={{ width: '100px', height: 'auto' }}
        />
      </div>

      <div className="project">
        {/* Project 1: Typify */}
        <div
          className="project-one"
          onMouseEnter={() => handleMouseEnter('project1')}
          onMouseLeave={() => handleMouseLeave('project1')}
          onClick={() => handleClick('https://your-typify-project-link.com')}
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
          onClick={() => handleClick('https://your-blog-project-link.com')}
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

        {/* Project 3: Pokedex */}
        <div
          className="project-three"
          onMouseEnter={() => handleMouseEnter('project3')}
          onMouseLeave={() => handleMouseLeave('project3')}
          onClick={() => handleClick('https://your-pokedex-project-link.com')}
        >
          {isHovered.project3 ? (
            <video
              src={pokedexVideo}
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
              src={pokedexImage}
              alt="Pokedex Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        {/* Project 4: IMDb */}
        <div
          className="project-four"
          onMouseEnter={() => handleMouseEnter('project4')}
          onMouseLeave={() => handleMouseLeave('project4')}
          onClick={() => handleClick('https://your-imdb-project-link.com')}
        >
          {isHovered.project4 ? (
            <video
              src={imdbVideo}
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
              src={imdbImage}
              alt="IMDb Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        {/* Show More Projects */}
        {showMore && (
          <>
            <div
              className="project-five"
              onMouseEnter={() => handleMouseEnter('project5')}
              onMouseLeave={() => handleMouseLeave('project5')}
              onClick={() => handleClick('https://your-sketch-project-link.com')}
            >
              {isHovered.project5 ? (
                <video
                  src={sketchVideo}
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
                  src={sketchImage}
                  alt="Sketch Project"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            <div
              className="project-six"
              onMouseEnter={() => handleMouseEnter('project6')}
              onMouseLeave={() => handleMouseLeave('project6')}
              onClick={() => handleClick('https://your-kanban-project-link.com')}
            >
              {isHovered.project6 ? (
                <video
                  src={kanbanVideo}
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
                  src={kanban}
                  alt="Kanban Project"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* Animated Arrow Button */}
      <div className="view-more-container" onClick={toggleShowMore}>
        <span className={`arrow ${showMore ? 'rotate' : ''}`}>
          {showMore ? '▲ View Less' : '▼ View More'}
        </span>
      </div>

      {/* Tech Stacks Section */}
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="icons">
          <img src={java} alt="Java" className="tech-icon" />
          <img src={python} alt="Python" className="tech-icon" />
          <img src={js} alt="JavaScript" className="tech-icon" />
          <img src={ts} alt="TypeScript" className="tech-icon" />
          <img src={html} alt="HTML" className="tech-icon" />
          <img src={css} alt="CSS" className="tech-icon" />
          <img src={docker} alt="Docker" className="tech-icon" />
          <img src={kubernetes} alt="Kubernetes" className="tech-icon" />
          <img src={git} alt="Git" className="tech-icon" />
          <img src={github} alt="GitHub" className="tech-icon" />
          <img src={react} alt="React" className="tech-icon" />
          <img src={next} alt="Next.js" className="tech-icon" />
          <img src={node} alt="Node.js" className="tech-icon" />
          <img src={mongodb} alt="MongoDB" className="tech-icon" />
          <img src={go} alt="Go" className="tech-icon" />
          <img src={php} alt="PHP" className="tech-icon" />
          <img src={sql} alt="SQL" className="tech-icon" />
          <img src={postgres} alt="PostgreSQL" className="tech-icon" />
        </div>
      </div>
    </div>
  );
};

export default Work;
