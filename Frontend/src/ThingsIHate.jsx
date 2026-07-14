import './styles.css'
import { Link } from 'react-router-dom'

function ThingsIHate(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    return(      
        <>
        <body>
            <h1> Things I Hate: </h1>
            <ul>
                <li> Eggs </li>
                <li> Running </li>
                <li> Beans </li>
                <li> Cats </li>
                <li> Orange Jucie </li>
                <li> Kale </li>
                <li> Spinach </li>
                <li> School </li>
                <li> Rice </li>
            </ul>
        </body>
        </>
        
    )   
}

export default ThingsIHate;