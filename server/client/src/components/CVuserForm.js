import React, { Component } from 'react';
import '../App.css';
/*import axios from 'axios';
import { saveAs } from 'file-saver';*/
import CVpersonaldetails from './CVpersonaldetails';
import CVexperience from './CVexperience';
import Project from './Project';
import Education from './Education';
import CVsuccess from './CVsuccess';
import CVachievements from './CVachievements';
import CVawards from './CVawards';
import CVreference from './CVreference';
import CVfinal from './CVfinal';
import Nav2 from './Nav2';
import logo from '../images/cover.png';
import temp1 from '../images/CVtemp1.JPG';

class CVuserForm extends Component {

    state = {

        step: 0,
        name: '',
        careerObjective: '',
        email: '',
        phone: '',
        linkedin: '',
        designation: '',
        skills: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        exp3_org: '',
        exp3_pos: '',
        exp3_desc: '',
        exp3_dur: '',

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

        achievement_1: '',
        achievement_2: '',
        achievement_3: '',
        achievement_4: '',

        award_1: '',
        award_2: '',
        award_3: '',
        award_4: '',

        ref1_name: '',
        ref1_job: '',
        ref1_rel: '',
        ref1_phn: '',
        ref1_address: '',

        ref2_name: '',
        ref2_job: '',
        ref2_rel: '',
        ref2_phn: '',
        ref2_address: '',

        cv_title:'',


        status: 0

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step<9 ? step + 1 : 0
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
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                        <div className = "buttons" >
                            <h1>Choose a CV template</h1>
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

                            <CVpersonaldetails
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

                            <CVexperience
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

                            <CVachievements
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
                        <div className="container col-lg-8 mx-auto text-center bg-info">

                            <CVawards
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

            case 7:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-info">

                            <CVreference
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

            case 8:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center ">

                            <CVfinal
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

            case 9:

                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center bg-dark">

                            <CVsuccess 
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

export default CVuserForm;
