import './styles.css'
import { Link } from 'react-router-dom'

function Contact(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <>
        
            <h1> My Contacts: </h1>
            <ul>
                <li> Phone Number: 676-767-6767 </li>
                <li> Email: awesomeethanhu@gmail.com </li>
            </ul> 

            <h1> Contact Form: </h1>
            <form onSubmit={handleSubmit}>
            <div class="mb-3 mt-3">
                <label htmlFor="email" class="form-label"> Email:</label>
                <input name="email" id="email" placeholder="Enter email" name="email"></input>
            </div>
            <div class="mb-3">
                <label htmlFor="question" class="form-label"> Question:</label>
                <input class="form-control" id="question" name="pswd" placeholder='Enter Question'></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
        </>    
    )   
}

export default Contact;