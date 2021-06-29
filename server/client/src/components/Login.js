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
            (<>
                <div class="dropdown">
                    <button class="dropbtn"><i class="far fa-user-circle"></i></button>
                    <div class="dropdown-content">
                    <Link to="/Account">My account</Link>
                    <Link to="/SignIn" onClick={() => {
                            setAuth(false);
                            cookies.remove('jwttoken');
                    }}>LogOut</Link>
                    </div>
                </div>
            
            </>) : 
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
