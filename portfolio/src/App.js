import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";

function App() {
  return (
    <div className='topEle'>
      
      <Sidebar/>
      <div className="container">
        <OverviewSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectSection/>
      </div>
    </div>
  );
}

export default App;

