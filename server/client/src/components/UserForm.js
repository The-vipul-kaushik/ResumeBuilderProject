import React, { Component } from 'react';
import '../App.css';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Project from './Project';
import Education from './Education';
import Success from './Success';
import Extras from './Extras';
import Final from './Final';
import Nav2 from './Nav2';
import logo from '../images/cover.png';
import temp1 from '../images/temp1.jpg';

class UserForm extends Component {

    state = {

        step: 0,
        name: '',
        careerObjective: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_desc: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_desc: '',

        extra_1: '',
        extra_2: '',
        extra_3: '',
        extra_3: '',
        extra_4: '',
        extra_5: '',

        resume_title: '',
        status: 0

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step<7 ? step + 1 : 0 
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }
    tips = () => {
        const {step} = this.state;
        this.setState({
            step: 8
        })
    }



    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    
    render() {
        const { step } = this.state;
        
        switch (step) {
            case 0:
                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="70" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                        <div className = "buttons" >
                            <h1>Choose a Resume template</h1>
                            <a onClick={()=>this.nextStep()}><img src={temp1}></img></a>
                        </div>  
                    </>
                );
            case 1:
                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-dark">

                            <PersonalDetails
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

            case 2:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-success">

                            <Experience
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

            case 3:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-primary">

                            <Project
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

            case 4:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-warning">

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );


            case 5:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-info">

                            <Extras
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

            case 6:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center ">

                            <Final
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                submitted={this.submitted}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

            case 7:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-dark">

                            <Success 
                                nextStep={this.nextStep}
                            />
                        </div>
                        <br />
                    </div>
                    </>
                );

        }
    }
}

export default UserForm;
