import React from 'react';
import './Skill.css';
import { VscArrowLeft } from 'react-icons/vsc';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Skill = () => {
  return (
    <div className='skill_content'>
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
        <div className='skill_box'>
            <h2 className='skill_box-title'>Frontend Developer</h2>
            <div className="skill_box-subtitle">I enjoy writing clean code and creating useful products.</div>
            <div class="skill_box-subtitle">
                <strong>I like to code in</strong> <br/>
                <p>HTML, CSS, Javascript, React, Redux &amp;</p>
            </div>
            <div class="skill_box-subtitle skill_box-ul">
                <strong>Tools</strong> <br/>
                <ul>
                    <li>VS code</li>
                    <li>Figma</li>
                    <li>Notepad</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
        <div className='skill_box'>
        <h2 className='skill_box-title'>Backend Developer</h2>
        <div className="skill_box-subtitle">It's fun for me to bring new concepts to life. I consider myself fortunate to be a Fullstack developer because my work has a direct impact on the user's life.</div>
        <div className="skill_box-subtitle">
            <strong>Skills</strong> <br/>
            <p>NodeJS, ExpressJS, Firebase</p>
        </div>
        <div className="skill_box-subtitle">
            <strong>Tools</strong> <br/>
            <p>VScode, Github etc.</p>
        </div>
        </div>
        <h1 class="skill_box-shadow">Skills</h1>
    </div>
  )
}

export default Skill