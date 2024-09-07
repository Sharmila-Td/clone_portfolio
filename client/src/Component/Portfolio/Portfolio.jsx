import React, { useState } from 'react';
import './Portfolio.css';
import Profile from '../Profile/Profile'; 
import { VscArrowLeft } from 'react-icons/vsc';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Portfolio = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

 const handleImageClick = () => {
    setIsMoved(!isMoved); 
    setTimeout(() => {
      setShowProfile(!showProfile); 
    }, 1000); 
  };

  return (
    <>
      <div className={`black ${isMoved ? 'fade-out' : ''}`}></div>
      <div className={`white ${isMoved ? 'fade-out' : ''}`}>
        <h1 color="light" className="logo">Mern</h1>
        <button className="nav_btn">
          <a href="/" className="active">
            <VscArrowLeft size={30} />
          </a>
        </button>
        <div className="social_link-group">
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaLinkedin size={25} fill="#000000" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaGithub size={25} fill="#000000" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaTwitter size={25} fill="#000000" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaFacebook size={25} fill="#000000" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaYoutube size={25} fill="#000000" />
            </a>
          </div>
          <span color="light" className="nav_line" style={{ height: '8rem' }}></span>
        </div>

        <button 
          className={`nav_center ${isMoved ? 'move-right-bottom' : ''}`} 
          onClick={handleImageClick}
        >
         <svg aria-hidden="true" data-prefix="fas" data-icon="yin-yang" class="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="200" height="200" fill="currentColor"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg>
          <span>click here</span>
        </button>

        <a href="#" className="nav_right" target="_blank">
          <h3>Say hi!</h3>
        </a>
        <a href="/blog" className="nav_blog">
          <h2>Feats</h2>
        </a>
        <a href="/project" className="nav_project">
          <h2>Projects</h2>
        </a>
        <a href="/resume" className="nav_resume">
          <h2>Resume</h2>
        </a>
        <div className="nav_bottom">
          <a href="/about" className="nav_about">
            <h2>About</h2>
          </a>
          <a href="/skills" className="nav_skill">
            <h2>My Skills</h2>
          </a>
        </div>
      </div>

      {showProfile && (
        <div className={`profile-overlay ${isMoved ? 'show' : ''}`}>
          <Profile />
        </div>
      )}
    </>
  );
};

export default Portfolio;
