import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

function App() {
  return (
    <div className='topEle'>
      
      <Sidebar/>
      <div className="container">
        <OverviewSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <section className='projects'>
          <h1>Projects</h1>
        </section>
        
      </div>
    </div>
  );
}

export default App;
