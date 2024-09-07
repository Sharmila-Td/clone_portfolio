import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import Profile from './Component/Profile/Profile';
import Skill from './Component/Skill/Skill';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Project from './Component/Project/Project';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/skills' element={<Skill/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
  </Router>
  )
}

export default App
