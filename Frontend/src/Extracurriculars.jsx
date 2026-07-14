import './styles.css'
import { Link } from 'react-router-dom'

function Extracurriculars(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    return(
        <>
        <body>
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