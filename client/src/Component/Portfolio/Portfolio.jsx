import React from 'react';
import { useRef } from 'react';
import './Portfolio.css'
import {VscArrowLeft} from 'react-icons/vsc';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaYinYang } from 'react-icons/fa';

const Portfolio = () => {
    const profileRef = useRef(null);

    const scrollToProfile = () => {
      profileRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
        <div className="black"></div>
        <div className="white">
          <h1 color="light" className="logo">Mern</h1>
          <button className="nav_btn">
            <a href="/" className="active">
              <VscArrowLeft width={30} height={30} fill="currentColor" />
            </a>
          </button>
          <div className="social_link-group">
            <div className='social_link'>
              <a href="#" target="_blank" style={{ color: 'inherit' }}>
                <FaLinkedin width={25} height={25} fill="#000000" />
              </a>
            </div>
            <div className='social_link'>
              <a href="#" target="_blank"  style={{ color: 'inherit' }}>
                <FaGithub width={25} height={25} fill="#000000" />
              </a>
            </div>
            <div className='social_link'>
              <a href="#" target="_blank" style={{ color: 'inherit' }}>
                <FaTwitter width={25} height={25} fill="#000000" />
              </a>
            </div>
            <div className='social_link'>
              <a href="#" target="_blank"  style={{ color: 'inherit' }}>
                <FaFacebook width={25} height={25} fill="#000000" />
              </a>
            </div>
            <div className='social_link'>
              <a href="#" target="_blank"  style={{ color: 'inherit' }}>
                <FaYoutube width={25} height={25} fill="#000000" />
              </a>
            </div>
            <span color="light" className="nav_line" style={{ height: '8rem' }}></span>
          </div>
          <button className="nav_center">
            <img />
            <span onClick={scrollToProfile}>click here</span>
          </button>
          <a href="#" className="nav_right" target="_blank" >
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

   
    </>
        
  );
};

export default Portfolio;
