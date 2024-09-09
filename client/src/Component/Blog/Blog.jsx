import React, { useState } from "react";
import "./Blog.css";
import { VscArrowLeft } from "react-icons/vsc";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import img1 from '../../assets/blogimg/img1.png';
import img2 from '../../assets/blogimg/img2.png';
import img3 from '../../assets/blogimg/img3.jfif';
import img4 from '../../assets/blogimg/img4.jfif';
import img5 from '../../assets/blogimg/img5.png';
import img6 from '../../assets/blogimg/img6.jfif';
import img7 from '../../assets/blogimg/img7.jfif';
import img8 from '../../assets/blogimg/img8.png';
import img9 from '../../assets/blogimg/img9.jfif';
import img10 from '../../assets/blogimg/img10.jfif';

const Blog = () => {
  const [clicked, setClicked] = useState({});

  const blogPosts = [
    { id: "card-1", title: "Leetcode coding profile", image: img1 },
    { id: "card-2", title: "Personal Blog", image: img2 },
    { id: "card-3", title: "Project Showcase", image: img3 },
    { id: "card-4", title: "React Tips", image: img4 },
    { id: "card-5", title: "Node.js Journey", image: img5 },
    { id: "card-6", title: "MongoDB Guide", image: img6 },
    { id: "card-7", title: "Front-End Tricks", image: img7 },
    { id: "card-8", title: "Full-Stack Roadmap", image: img8 },
    { id: "card-9", title: "JavaScript ES6+", image: img9 },
    { id: "card-10", title: "CSS Magic", image: img10 },
  ];

  const handleImageClick = (cardId) => {
    setClicked((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  return (
    <div className="blog_content">
      <div className="blog_content-box">
        <h1 className="logo">Mern</h1>
        <button className="nav_btn">
          <a href="/" className="active">
            <VscArrowLeft size={30} />
          </a>
        </button>
        <div className="social_link-group">
          <div className="social_link">
            <a href="#" target="_blank" style={{ color: "inherit" }}>
              <FaLinkedin size={25} fill="#000000" />
            </a>
          </div>
          <div className="social_link">
            <a href="#" target="_blank" style={{ color: "inherit" }}>
              <FaGithub size={25} fill="#000000" />
            </a>
          </div>
          <div className="social_link">
            <a href="#" target="_blank" style={{ color: "inherit" }}>
              <FaTwitter size={25} fill="#000000" />
            </a>
          </div>
          <div className="social_link">
            <a href="#" target="_blank" style={{ color: "inherit" }}>
              <FaFacebook size={25} fill="#000000" />
            </a>
          </div>
          <div className="social_link">
            <a href="#" target="_blank" style={{ color: "inherit" }}>
              <FaYoutube size={25} fill="#000000" />
            </a>
          </div>
          <span className="nav_line" style={{ height: "8rem" }}></span>
        </div>
        <div className="blog-right">
            <div className="blog-right-one">
            <svg aria-hidden="true" data-prefix="fas" data-icon="anchor" class="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="70" height="70" fill="currentColor"><path fill="currentColor" d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"></path></svg>
            </div>
        </div>
        <div className="blog_box-updown">
          <div className="blog_box-one">
            <div className="blog_box-square">
              <div className="blog-square">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    id={post.id}
                    className={`blog-square-16 ${clicked[post.id] ? "clicked" : ""}`}
                    onClick={() => handleImageClick(post.id)}
                  >
                    <div className="image-container">
                      <img
                        className="blog-square-img"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <h3 className="blog-square-title">{post.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="blog-shadow">FEATURES</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
