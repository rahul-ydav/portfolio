
import {ReactComponent as NodeIcon} from './assets/nodeicon.svg';
import {ReactComponent as JSIcon} from './assets/jsicon.svg';
import {ReactComponent as ReactIcon} from './assets/reacticon.svg';
import {ReactComponent as RedisIcon} from './assets/redisicon.svg';
import {ReactComponent as KafkaIcon} from './assets/kafkaicon.svg';
import {ReactComponent as PostgresIcon} from './assets/postgresicon.svg';
import MyPic from "./assets/mypic.jpg";

import './OverviewSection.css';

// const helper = {
//   key: Math.random(),
//   initialx: () => `${Math.floor(Math.random() * 100)}%`,
//   initialy: () => `${Math.random() * 100}%`,
//   initialTilt: () => `${Math.floor(Math.random()*30)}deg`
// }

function OverviewSection(){
    const icons = [NodeIcon, JSIcon, RedisIcon, KafkaIcon, PostgresIcon, ReactIcon];
    return(<section className='overview'>

      {/*  animated backgroung */}
      <div class="bubbles">
        <span style={{"--i":"11"}}></span>
        <span style={{"--i":"12"}}></span>
        <span style={{"--i":"15"}}></span>
        <span style={{"--i":"25"}}></span>
        <span style={{"--i":"21"}}></span>
        <span style={{"--i":"19"}}></span>
        <span style={{"--i":"16"}}></span>
        <span style={{"--i":"18"}}></span>
        <span style={{"--i":"28"}}></span>
        <span style={{"--i":"19"}}></span>
        <span style={{"--i":"22"}}></span>
        <span style={{"--i":"14"}}></span>
        <span style={{"--i":"24"}}></span>
        <span style={{"--i":"17"}}></span>
        <span style={{"--i":"29"}}></span>
        <span style={{"--i":"13"}}></span>
        <span style={{"--i":"20"}}></span>
        <span style={{"--i":"3"}}></span>
        <span style={{"--i":"33"}}></span>
        <span style={{"--i":"4"}}></span>
        <span style={{"--i":"34"}}></span>
        <span style={{"--i":"5"}}></span>
        <span style={{"--i":"35"}}></span>
        <span style={{"--i":"2"}}></span>
        <span style={{"--i":"32"}}></span>
      </div>
        
          
          <div className='overview-text'>
            <div className="firstBlock">
              <div><img id="mypic" src= {MyPic} alt="No profile pic"/></div>
              <div className="overviewAllText">
                <h1 id="nameInOverview">Rahul Yadav</h1>
                <p class="overviewSpan" style={{'fontSize': '1rem'}}>Full-Stack Developer/ Senior Software Engineer</p>
                <p class="overviewSpan">with expertise in Node.js, React.js, PostgreSQL, Redis, and Kafka. Proven track record in designing scalable solutions and optimizing performance</p>
                {/* <p id="overviewcontent">I am 3 years experienced software developer having good command in JavaScript, Node.js, React.js, Java, PostgreSQL. During this period, I wrote a lot of industrial level code and most of my work is on production.</p> */}
              </div>
            </div>
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

        </section>);
}

export default OverviewSection;