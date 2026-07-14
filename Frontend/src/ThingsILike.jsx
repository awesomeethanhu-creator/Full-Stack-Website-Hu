import './styles.css'
import { Link } from 'react-router-dom'

function ThingsILike(){
    function changeMode(){
        const my_elem = document.querySelector("body");
        my_elem.classList.toggle("blackBackground")
    }
    return(
        <>
        <body>
            <h1> Things I like: </h1>

            <ul>
                <li> My dog </li>
                <li> Eating </li>
                <li> Watching TV </li>
            </ul>

            <h1> My Dog: </h1>
            <img src="src/images/pug.jpg"/> ;
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