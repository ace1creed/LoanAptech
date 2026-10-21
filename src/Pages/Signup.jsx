import "./signUp.css"
import { Link } from "react-router-dom"
function SignUp (){
    return(
        <div className="background">
            <h1 className="signh">Create your account</h1>
            <div className="signUpcontainer">
                <input type="text" placeholder="Full Name" />
                <input type="email"  placeholder="Email address"/>
                <input type="number"  placeholder="Phone Number"/>
                <input type="password"  placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>Sign up</button>
                <Link to="/logIn">Already have an account? log in</Link>
            </div>
        </div>
    )
}
export {SignUp}