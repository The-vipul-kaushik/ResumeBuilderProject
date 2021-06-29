import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import '../App.css';
import logo from '../images/default.png';

class Home extends Component {



    render() {
        return (
            <div className="home"> 
                <div className="logo">
                    <img src={logo} width="100%" />
                </div>
            </div>
        );
    }
}

export default Home;