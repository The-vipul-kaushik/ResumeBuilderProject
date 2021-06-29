import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../images/cover.png';
import AccountCard from './AccountCard';
import Nav2 from './Nav2';
import {DeleteContext} from '../DeleteContext';

const Account = () => {

    const [urlList,setUrl] = useState([]);
    const [RList,setRList] = useState([]);
    const [CList,setCList] = useState([]);
    const [resume,setResume] = useState(false);

    const accountshow = () => {
        return (
            <div className="account2 text-center">
                <AccountCard/>
            </div>
        );
    }

    useEffect(() => {
        accountshow();
    },[urlList,RList,CList]);

    return(
        <DeleteContext.Provider value={{urlList,RList,CList,resume,setUrl,setRList,setCList,setResume}}>
        <div>
        <Nav2/>
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
                            setUrl(data.urls);
                            setRList(data.titles);
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
                            setUrl(data.urls);
                            setCList(data.titles);
                            setResume(false);
                        }
                    }}>My CVs </button>
                </div>
                {accountshow()}
        </div>
        </DeleteContext.Provider>
    );
}

export default Account;
