import React, { useState, useEffect } from 'react';
import './App.css';
import {ReactComponent as NodeIcon} from './assets/nodeicon.svg';
import {ReactComponent as JSIcon} from './assets/jsicon.svg';
import {ReactComponent as ReactIcon} from './assets/reacticon.svg';
import {ReactComponent as RedisIcon} from './assets/redisicon.svg';
import {ReactComponent as KafkaIcon} from './assets/kafkaicon.svg';
import {ReactComponent as PostgresIcon} from './assets/postgresicon.svg';
import MyPic from "./assets/mypic.jpg";

const helper = {
  key: Math.random(),
  initialx: () => `${Math.floor(Math.random() * 100)}%`,
  initialy: () => `${Math.random() * 100}%`,
  initialTilt: () => `${Math.floor(Math.random()*30)}deg`
}


function App() {

  const icons = [NodeIcon, JSIcon, RedisIcon, KafkaIcon, PostgresIcon, ReactIcon];

  return (
    <div className="container">
      <section className='overview'>
      {/* <h1>Overview</h1> */}
        
        <div className='overview-text'>
          <p id="overviewcontent">I am 3 years experienced software developer having good command in JavaScript, Node.js, React.js, Java, PostgreSQL. During this period, I wrote a lot of industrial level code and most of my work is on production.</p>
          <img id="mypic" src= {MyPic} alt="No profile pic"/>
          <div id="techStackIcons">
          {
            icons.map(Icon => {
              return (<div
                className = 'float'
                // style={{ position: 'absolute',top: helper.initialy(), right: helper.initialx(), rotate: helper.initialTilt()} }
              >
                <Icon/>
              </div>)
            })
          }
        </div>
        </div>

      </section>
      <section className='experience'>
        <h1>Experience</h1>
      </section>
      <section className='projects'>
        <h1>Projects</h1>
      </section>
      <section className='education'>
        <h1>Educational BackGround</h1>
      </section>
    </div>
  );
}

export default App;
