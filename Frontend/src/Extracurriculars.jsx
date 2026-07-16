import './styles.css'
import { Link } from 'react-router-dom'
import Hyperspeed from './Hyperspeed.jsx';

function Extracurriculars(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    return(
        <>
        <body>
                    <div style={{ width: '100%', height: '100vh', position: 'absolute', zIndex: '-1', backgroundColor: 'black'}}>

<Hyperspeed 
  effectOptions={{
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 20,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3
    }
  }} 
  onSpeedUp={() => {}} 
  onSlowDown={() => {}} 
/></div>
            <h1> My Extracurriculars: </h1>
            <ul>
                <li> Soccer </li>
                <li> Band </li>
                <li> Math </li>
                <li> Robotics </li>
            </ul>

            <h1> Soccer: </h1>
            <ul>
                <li> I play center-mid </li>
                <li> I support Barcalona </li>
                <li> I play for <a href = "https://www.allstarssc.com/programs" target = "_blank"> ASC </a> </li>
            </ul>

            <h1> Band: </h1>
            <ul>
                <li> I play percussion </li>
                <li> I play with SHS </li>
                <li> I do marching band </li>
            </ul>          

            <h1> Robotics: </h1>
            <ul>
                <li> I'm part of my school's FRC team </li>
                <li> I do software </li>
            </ul>
        </body>
        </>
        
    )   
}

export default Extracurriculars;