import React, { useContext } from 'react';
import '../App.css';
import { AuthContext } from '../AuthContext';
import logo from '../images/cover.png';
import AccountCard from './AccountCard';
import accountCard from '../images/accountCard.png';

const Account = () => {
    const {auth} = useContext(AuthContext);
    return(
        <div>
        <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
            <div className="account text-center">
                <button type="button" className="btn btn-outline-dark ">My Resumes</button>
                <button type="button" className="btn btn-outline-dark ">My CVs </button>
                <AccountCard/>
            </div>
        </div>
    );
}

export default Account;
