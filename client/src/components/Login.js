import React, {Component} from 'react';
import '../App.css';

class Login extends Component{
    render(){
        return(
            <div className="navbtns">
                    <button className="btn btn-primary" onClick="">Register</button>
                    <button className="btn btn-success" onClick="">Sign In</button>
            </div>
        );
    }
}
export default Login;
