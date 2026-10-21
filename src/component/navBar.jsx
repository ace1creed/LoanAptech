import "./navBar.css"
import {Link} from "react-router-dom"
function Header (){
    return(
        <header> 
            <h2>LoanAptech</h2>
            <div className="aposition">
                <Link to ="/home" > Home </Link>
                <Link to="/loan" className="aloan">Loan</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup" className="asign">Signup</Link>
            </div>
        </header>
    )
}
export {Header}