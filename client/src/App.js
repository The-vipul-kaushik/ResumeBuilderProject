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

<<<<<<< HEAD
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
        );
=======
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
>>>>>>> 5e30051893c0f3ffefa69b32e9d3926a2b33a7b1
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
                        <ProtectedRoute path="/Tips" auth={auth} component={Tips}/>
                        <ProtectedLogin path="/SignIn" auth={auth} component={SignIn}/>
                        <ProtectedLogin path="/SignUp" auth={auth} component={SignUp}/>
                    </switch>
            </Router>
            </AuthContext.Provider>
        );
}

export default App;