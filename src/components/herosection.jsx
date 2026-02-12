import './herosection.css'
import Navbar from './navbar.jsx'
import Emailform from './emailform.jsx'
function Herosection(){
    return(
        <div className="banner">
            <Navbar />
            <div className="justify-content-center align-items-center text-center p-5">
            <h1 className="banner-heading p-5">
                Unlimited movies,<br/> shows, and more
            </h1>
            <h5>Starts at ₹149. Cancel at any time.</h5><br/>

<h6>Ready to watch? Enter your email to create or restart your membership.</h6>
<Emailform />
            </div>
            
        </div>
    )
}
export default Herosection;