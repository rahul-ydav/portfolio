import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar";
import OverviewSection from "./components/OverviewSection/OverviewSection";

function App() {
  return (
    <div className='topEle'>
      
      <Sidebar/>
      <div className="container">
        <OverviewSection/>
        <section className='experience'>
          <h1>I am 3 years experienced software developer having good command in JavaScript, Node.js, React.js, Java, PostgreSQL. During this period, I wrote a lot of industrial level code and most of my work is on production.</h1>
          {/* <p id="overviewcontent"></p> */}
        </section>
        <section className='projects'>
          <h1>Projects</h1>
        </section>
        <section className='education'>
          <h1>Educational BackGround</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
