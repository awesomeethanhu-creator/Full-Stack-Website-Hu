import './styles.css'
import { Link } from 'react-router-dom'

function Timeline(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    return(
        <>  
        <div className='timelineParent'>
            <div className='timelineImages'>
                <img src="src/images/baby.jpg" width='150px' height='150px'></img>
                <br></br>
                <img src="src/images/plane.png" width='150px' height='100px'></img>
                <br></br>
                <img src="src/images/preschool.jpg" width='150px' height='100px'></img>

            </div>
            <div className="timeline"> 
                <h1 className='fs-3'> 2/16/2012: </h1>
                <p> Born in California </p>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='fs-3'> 5/12/2015: </h1>
                <p> First time leaving the US </p>
                <br></br>
                <h1 className='fs-3'> 8/16/2016: </h1>
                <p> First day in preschool </p>
                <br></br>
                <h1 className='fs-3'> 8/16/2017: </h1>
                <p> First day in elementary school </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='fs-3'> 5/13/2021: </h1> 
                <p> First time doing robotics </p>
                <br></br>
                <h1 className='fs-3'> 8/23/2022: </h1>
                <p> First day playing a instrument </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 class = 'fs-3'> 8/16/2026: </h1>
                <p> First day in High School </p>
            </div>
        </div>
        </>
        
    )   
}

export default Timeline;