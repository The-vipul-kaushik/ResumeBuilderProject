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
import Account from './components/Account';
import {AuthContext} from './AuthContext';
import Nav from './components/Nav';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ProtectedRoute = ({auth,component: Component,...rest}) => {
    return (
    <Route 
    {...rest}
    render={() => auth ? (
        <Component />
    ) : 
    (
        <Redirect to="SignIn"/>
    )
    }
    />
    );
}

const ProtectedLogin = ({auth,component: Component,...rest}) => {
    return (
    <Route 
    {...rest}
    render={() => !auth ? (
        <Component />
    ) : 
    (
        <Redirect to="/UserForm"/>
    )
    }
    />
    );
}

const App = () => {
 
        const [auth,setAuth] = useState(false);

        const readcookie = () => {
            const user = cookies.get("jwttoken");
            if(user){
                setAuth(true);
            }
        };
        useEffect(() => {
            readcookie();
        },[auth]);

        return (
                <AuthContext.Provider value={{auth,setAuth}}>
                <Router>
                    <Nav />
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
                        <ProtectedRoute path="/UserForm" auth={auth} component={UserForm}/>
                        <ProtectedRoute path="/CVuserForm" auth={auth} component={CVuserForm}/>
                        <ProtectedRoute path="/Tips" auth={auth} component={Tips}/>
                        <ProtectedLogin path="/SignIn" auth={auth} component={SignIn}/>
                        <ProtectedLogin path="/SignUp" auth={auth} component={SignUp}/>
                        <ProtectedRoute path="/Account" auth={auth} component={Account}/>
                    </switch>
            </Router>
            </AuthContext.Provider>
        );
}

export default App;