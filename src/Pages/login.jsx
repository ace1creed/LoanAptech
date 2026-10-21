import './login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
        <div className='log'>
            <h2>Welcome Back</h2>
            <form action="" className='form'>
                <input type='email' placeholder='Email address' required />
                <input type="password" placeholder='Password' required />
                <Link to= "/" className='but'> Log In</Link>
                <Link to="/signup" className='chor'>Don't have an account? Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export  {Login}