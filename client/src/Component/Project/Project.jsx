import React from 'react';
import './Project.css';
import { VscArrowLeft } from 'react-icons/vsc';

const Project = () => {
  return (
    <div className='project_content'>
        <h1 color="dark" className="logo">Mern</h1>
        <button className='nav_btn'>
            <a href='/' className="active">
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
        <ul className='social_link-ul items' style={{cursor:'-moz-grab'}}>
            <div className='mr-'>

            </div>
        </ul>
    </div>
  )
}

export default Project