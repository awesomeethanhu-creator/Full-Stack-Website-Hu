import './styles.css'
import { Link } from 'react-router-dom'
import Hyperspeed from './Hyperspeed.jsx';

function ThingsILike(){
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
            <h1> Things I like: </h1>

            <ul>
                <li> My dog </li>
                <li> Eating </li>
                <li> Watching TV </li>
            </ul>

            <h1> My Dog: </h1>
            <img src="src/images/pug.jpg" style={{paddingLeft: '0.5%'}}/> 
            <ul>
                <li> His name is Mario, and he likes <a href = "https://www.walmart.com/ip/ASMPET-Chicken-Duck-Beef-Twist/15929073540?wmlspartner=wlpa&selectedSellerId=101097942&selectedOfferId=527DC865FCF934F888A459AB162D5DDD&conditionGroupCode=1&gclsrc=aw.ds&&adid=22222222227527DC865FCF934F888A459AB162D5DDD_187461064726_22799121104&wl0=&wl1=g&wl2=c&wl3=784194435267&wl4=pla-2443217336583&wl5=9031970&wl6=&wl7=&wl8=&wl9=pla&wl10=491522227&wl11=online&wl12=527DC865FCF934F888A459AB162D5DDD&veh=sem&gad_source=1&gad_campaignid=22799121104&gbraid=0AAAABDAnf95BgChC1qtht7h_SUNhAnt2j&gclid=EAIaIQobChMI44Du5NPIlQMVfdrCBB1S6QkLEAQYAiABEgI3i_D_BwE" target='_blank'>food</a></li>
                <li> He likes to sleep and he weighs over 40 pounds </li>
                <li> He is 8 years old </li>
            </ul>

            <h1> My Favorite Foods: </h1>
            <ul>
                <li> Takis </li>
                <li> WingStop </li>
                <li> Skittles </li>
            </ul>

            <h1> My Favorite TV-Shows: </h1>
            <ul>
                <li> Attack On Titan </li>
                <li> Breaking Bad </li>
                <li> Blue Lock </li>    
            </ul>

            
        </body>
        </>
        
    )   
}

export default ThingsILike;