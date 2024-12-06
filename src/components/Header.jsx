import React from 'react';
import './Header.css';
import wings from '../img/wings.svg';
import left from '../img/left.png';
import right from '../img/right.png';

const Header = () => {
  return (
    <div className="head">
      <div className="icon">
        <div className="left">
          <img src={left} alt="Left Icon" />
        </div>
        <div className="center">
          <img
            src="https://imgs.search.brave.com/qr_SFSH5ia5uj_WeddFPuvirJEfL0bolH2AZ4ZyfBAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjL2Vl/L2IxLzZjZWViMTBm/ZWI3ZmJlYjhlN2Q0/Mjc4OGI4NjRmYjc0/LmpwZw"
            alt="Center Icon"
          />
        </div>
        <div className="right">
          <img src={right} alt="Right Icon" />
        </div>
      </div>

      <div className='title'>Thirumalai</div>
      <div className='bio'>Developer whose always happy to contribute</div>

      <div className='skills'>
       <span>Javascript</span>
       <span>Java</span>
       <span>Competitive Programming</span>
       <span>Linux</span>
       <span>Golang</span>
       <span>Docker</span>
      </div>
      <div className='skills2'>
      <span>Mongodb</span>
      <span>Express</span>
      <span>React</span>
      <span>Node</span>
      </div>

    </div>
  );
};

export default Header;
