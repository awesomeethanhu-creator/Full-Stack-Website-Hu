import './styles.css'
import { Link } from 'react-router-dom'

function Home(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle(my_elem.onpause());
    }

    return(
        
        <>
        <body>
            <h1 id = "title"> Ethan </h1>
        </body>
        </>
        
    )   
}

export default Home;