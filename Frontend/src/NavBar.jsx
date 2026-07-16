import './styles.css'
import { Link } from 'react-router-dom'

function NavBar(){

    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    function changeTextMode(){
        const my_elem=document.querySelector("body");
        my_elem.classList.toggle("neonText");
    }

    return (
        <>

            <div className='buttonCenter' style={{borderBottom: '6px solid white', backgroundColor: 'black'}}>
                <Link to="/">
                    <button style={{color:'orange', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}> Home </button>
                </Link>

                <Link to='/Timeline'>
                    <button style={{color:'yellow', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}> Timeline </button>
                </Link>

                <Link to="/ThingsILike">
                    <button style={{color:'green', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}>Things I Like</button>
                </Link>

                <Link to="/ThingsIHate">
                    <button style={{color:'blue', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}>Things I Hate </button>
                </Link>

                <Link to="/Extracurriculars">
                    <button style={{color:'purple', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}> Extracurriculars </button>
                </Link>

                <Link to="/Contact">
                    <button style={{color:'black', border: '2px solid purple' ,borderRadius: '20px', fontFamily: 'cursive'}}> Contacts </button>
                </Link>                      
            </div> 
        </>
    )
}

export default NavBar;