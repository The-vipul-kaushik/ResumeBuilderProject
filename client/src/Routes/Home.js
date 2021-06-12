import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import '../App.css';
import UserForm from '../components/UserForm';
import Login from '../components/Login';
import Tips from '../components/Tips';
import logo from '../images/default.png';

class Home extends Component {



    render() {
        return (
            <Router>
            <div className="home"> 
                <div className="logo">
                    <img src={logo} width="100%" />
                </div>
            </div>
            <switch>
                <Route exact path="/Userform">
                    <UserForm/>
                </Route>
            </switch>
            </Router>
        );
    }
}

export default Home;