import React, { Component } from 'react';


import './App.css';
import UserForm from './components/UserForm';

class App extends Component {



    render() {
        return ( 
        <div>
            <div className="header"> <h1>Resume Builder</h1> </div>
              
            <UserForm / >
        </div>  
        );
    }
}

export default App;