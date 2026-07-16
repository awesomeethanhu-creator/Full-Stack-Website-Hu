import './styles.css'
import { Link } from 'react-router-dom'
import Hyperspeed from './Hyperspeed.jsx';


function Timeline(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
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
/></div>
        <div className='timelineParent'>
            <div className='timelineImages'>
                <img src="src/images/baby.jpg" width='150px' height='150px'></img>
                <br></br>
                <img src="src/images/plane.png" width='150px' height='100px'></img>
                <br></br>
                <img src="src/images/preschool.jpg" width='150px' height='100px'></img>
                <br></br>
                <img src="src/images/elementaryschool.webp" width='150px' height='150px'></img>
                <br></br>
                <img src = "src/images/robotics.jpg" width= '150px' height='150px'></img>
                <br></br>
                <img src = "src/images/drum.webp" width= '150px' height='125px'></img>
                <br></br>
                <img src = "src/images/highschool.png" width= '150px' height='155px'></img>

            </div>
            <div className="timeline"> 
                <h1 className='fs-3' style={{padding: '2%'}}> 2/16/2012: </h1>
                <p> Born in California </p>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='fs-3' style={{padding: '2%'}}> 5/12/2015: </h1>
                <p> First time leaving the US </p>
                <br></br>
                <h1 className='fs-3' style={{padding: '2%'}}> 8/16/2016: </h1>
                <p> First day in preschool </p>
                <br></br>
                <h1 className='fs-3' style={{padding: '2%'}}> 8/16/2017: </h1>
                <p> First day in elementary school </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='fs-3' style={{padding: '2%'}}> 5/13/2021: </h1> 
                <p> First time doing robotics </p>
                <br></br>
                <h1 className='fs-3' style={{padding: '2%'}}> 8/23/2022: </h1>
                <p> First day playing a instrument </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 class = 'fs-3' style={{paddingLeft: '2%'}}> 8/16/2026: </h1>
                <p> First day in High School </p>
            </div>
        </div>
        </>
        
    )   
}

export default Timeline;