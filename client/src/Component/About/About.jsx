import React from 'react';
import './About.css';
import me from '../../assets/me.png'
import { VscArrowLeft } from 'react-icons/vsc';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';


const About = () => {
  return (
    <div className='about_content'>
        <h1 color="light" className="logo">Mern</h1>
        <button className="nav_btn">
          <a href="/" className="active">
            <VscArrowLeft size={30} />
          </a>
        </button>
        <div className="social_link-group">
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaLinkedin size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaGithub size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaTwitter size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaFacebook size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaYoutube size={25} fill="#ffffff" />
            </a>
          </div>
          <span color="light" className="nav_line" style={{ height: '8rem' }}></span>
        </div>
        <div className='social_img'>
            <img src={me} alt=''/>
        </div>
        <div className='about_para'>
        I'm a Software Developer at Zoho Corporation. I adore designing user-friendly websites that are both simple and elegant yet scalable. I consider myself to be a lifelong learner. I'm proficient in data structures and algorithms.
        <br/>
        <br/>
        I'm also interested in Machine Learning, and I adore experimenting with new ideas and putting together fantastic projects. I've always been interested in robotics and built around seven of them when I was 15 years old. 
        <br/>
        <br/>
        I'm a Crypto junkie and a Pianist contrasting right ?
        I've been fascinated by technology since I was a child and grown up as a Tech Savvy and Build few Enterprise level Softwares

        </div>
        <h1 className='about_shadow'>ABOUT</h1>
    </div>
  )
}

export default About