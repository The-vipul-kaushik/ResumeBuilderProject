import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { AuthContext } from '../AuthContext';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {
    const {auth,setAuth} = useContext(AuthContext);
    return(
        <div className="navbtns">
            { auth ? 
            (
            <Link to="/SignIn"><button className="btn btn-success" onClick={() => {
                setAuth(false);
                cookies.remove('jwttoken');
            }}>LogOut</button></Link>
            ) : 
            (
            <>
            <Link to="/SignUp"><button className="btn btn-primary" onClick="">Register</button></Link>
            <Link to="/SignIn"><button className="btn btn-success" onClick="">Sign In</button></Link>
            </>
            )
            }
        </div>
    );
}

export default Login;
