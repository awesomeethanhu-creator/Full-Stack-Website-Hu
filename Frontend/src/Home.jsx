import './styles.css'
import { Link } from 'react-router-dom'
import Hyperspeed from './Hyperspeed.jsx';


function Home(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle(my_elem.onpause());
    }

    return(
        
        <>
        
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
/>

        </div>
        <h1 id='title'> Ethan </h1>
        </>
        
        
    )   
}

export default Home;