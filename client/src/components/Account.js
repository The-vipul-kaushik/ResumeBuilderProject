import React, { useContext, useState } from 'react';
import '../App.css';
import { AuthContext } from '../AuthContext';
import logo from '../images/cover.png';
import AccountCard from './AccountCard';

const Account = () => {
    const {auth} = useContext(AuthContext);

    const [urlList,setUrl] = useState([]);
    const [resume,setResume] = useState(false);

    return(
        <div>
        <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                <div className="account1 text-center">
                    <button type="button" className="btn btn-outline-dark " onClick={async () => {
                        const res = await fetch('/GetResume',{
                            method: "GET"
                        });
                        const data = await res.json();
                        if(res.status==404){
                            window.alert('No Resume exist');
                        }
                        else{
                            setUrl(data);
                            setResume(true);
                        }
                    }}>My Resumes</button>
                    <button type="button" className="btn btn-outline-dark " onClick={async () => {
                        const res = await fetch('/GetCV',{
                            method: "GET"
                        });
                        const data = await res.json();
                        if(res.status==404){
                            window.alert('No CV exist');
                        }
                        else{
                            setUrl(data);
                            setResume(false);
                        }
                    }}>My CVs </button>
                </div>
                <div className="account2 text-center">
                    <AccountCard
                        urlList = {urlList}
                        resume = {resume}
                    />
                </div>
        </div>
    );
}

export default Account;
