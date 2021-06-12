import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import './App.css';
import Home from './Routes/Home';
import UserForm from './components/UserForm';
import Login from './components/Login';
import Tips from './components/Tips';

class App extends Component {
    render() {
        return (  
            <Router>
            <div className="header">
            <Login />
            <div className="menubtns">
            <Link to="/UserForm"><h3>Resume</h3></Link>
            <Link to=""><h3>CV</h3></Link>
            <Link to="/tips"><h3>Tips</h3></Link>
            </div>
            </div>
            
        <switch>
            <Route exact path="/"> 
                <Home />
                <div>
                    <div className="tagline">
                        <h1>Create your professional resume <br/> in seconds</h1>
                        <Link to="/Userform"><button className="btn btn-success">Build my resume now</button></Link>
                    </div>
                    
                </div>
            </Route>
            <Route path="/UserForm"> 
                <UserForm />
            </Route>
            <Route path="/tips"> 
                <Tips />
            </Route>
        </switch>
        </Router>
        );
    }
}

export default App;