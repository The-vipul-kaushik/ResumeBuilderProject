import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  

import './App.css';
import Home from './Routes/Home';
import UserForm from './components/UserForm';
import CVuserForm from './components/CVuserForm';
import Login from './components/Login';
import Tips from './components/Tips';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {AuthContext} from './AuthContext';
import Nav from './components/Nav';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends Component {
    render() {
        return (  
            <Router>
            <div className="header">
            <Login />
            <div className="menubtns">
            <Link to="/UserForm"><h3>Resume</h3></Link>
            <Link to="/CVuserForm"><h3>CV</h3></Link>
            <Link to="/tips"><h3>Tips</h3></Link>
            </div>
            </div>
            
        <switch>
            <Route exact path="/"> 
                <Home />
                <div>
                    <div className="tagline">
                        <h1>Create your professional resume <br/> in seconds</h1>
                        <Link to="/Userform"><button className="btn btn-warning " style={{'fontSize':'20px', 'borderRadius':'20px'}}>Build my resume now</button></Link>
                    </div>
                    
                </div>
            </Route>
            <Route path="/UserForm"> 
                <UserForm homepath={<App/>}/>
            </Route>
            <Route path="/CVuserForm"> 
                <CVuserForm homepath={<App/>}/>
            </Route>
            <Route path="/tips"> 
                <Tips />
            </Route>
        </switch>
        </Router>
        );}
};
export default App;