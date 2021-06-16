import React, { useContext } from 'react';
import '../App.css';
import { AuthContext } from '../AuthContext';
import accountCard from '../images/accountCard.png';

const AccountCard = () => {
    const {auth} = useContext(AuthContext);
    return(
            <div className="card text-center mx-auto mt-5" style={{'width': '18rem'}}>
                 <img className="card-img-top" src={accountCard} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">TCS resume</h5>
                <a href="#" className="btn btn-primary">Download</a>
                </div>
            </div>
    );
}

export default AccountCard;
