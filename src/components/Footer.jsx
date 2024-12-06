import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='foot'>
      <div className="social-media">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://imgs.search.brave.com/1eMiDAdm10-UJJFeI2bO2_2AuEUXge9EI7PMvzrhff8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDgvWC1Mb2dvLTUw/MHgyODEucG5n" 
            alt="Twitter" 
            className="social-icon-x" 
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
            alt="Instagram" 
            className="social-icon" 
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" 
            alt="LinkedIn" 
            className="social-icon" 
          />
        </a>
        <a href="https://peerlist.io" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://peerlist.io/favicon.ico" 
            alt="Peerlist" 
            className="social-icon" 
          />
        </a>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
