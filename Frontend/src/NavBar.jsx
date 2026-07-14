import './styles.css'
import { Link } from 'react-router-dom'

function NavBar(){

    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    return (
        <>

            <div className='buttonCenter'>
                <button onClick={changeMode}> Change Mode </button>

                <Link to="/">
                    <button> Home </button>
                </Link>

                <Link to='/Timeline'>
                    <button> Timeline </button>
                </Link>

                <Link to="/ThingsILike">
                    <button>Things I Like</button>
                </Link>

                <Link to="/ThingsIHate">
                    <button>Things I Hate </button>
                </Link>

                <Link to="/Extracurriculars">
                    <button> Extracurriculars </button>
                </Link>

                <Link to="/Contact">
                    <button> Contacts </button>
                </Link>                      
            </div> 
        </>
    )
}

export default NavBar;