import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import { AuthContext } from '../AuthContext';

const Nav = () => {
    const {auth} = useContext(AuthContext);
    return(
        <div className="header">
            <Login />
            {auth ? 
            (
            <div className="menubtns">
                <Link to="/UserForm"><h3>Resume</h3></Link>
                <Link to=""><h3>CV</h3></Link>
                <Link to="/tips"><h3>Tips</h3></Link>
            </div>
            ) : null
            }
        </div>
    );
}

export default Nav;
