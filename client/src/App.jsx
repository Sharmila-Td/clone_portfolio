import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import Profile from './Component/Profile/Profile';
import Skill from './Component/Skill/Skill';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/skill' element={<Skill/>}/>
    </Routes>
  </Router>
  )
}

export default App
