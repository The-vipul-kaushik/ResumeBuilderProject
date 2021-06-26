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
        name: 'Vipul Kaushik',
        careerObjective: 'I am passionate software seeking a position in the field of IT sector. Looking for an entry-level position as a Software Engineer in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge, I seek a company that will help me contribute to its development while concurrently aiding my personal growth.',
        email: 'vipul@gmail.com',
        phone: '7906591567',
        linkedin: 'vipul kaushik',
        designation: 'SOFTWARE ENGINEER',
        skills: 'C, C++, python',

        exp1_org: 'Geeksforgeeks',
        exp1_pos: 'TCW',
        exp1_desc: 'I wrote many articles',
        exp1_dur: '1 year',

        exp2_org: 'dataritz',
        exp2_pos: 'Sde',
        exp2_desc: 'I made projects',
        exp2_dur: '2 months',

        exp3_org: 'dataritz',
        exp3_pos: 'Sde',
        exp3_desc: 'I made projects',
        exp3_dur: '2 months',

        proj1_title: 'Used car price predictor',
        proj1_link: 'www.project.com',
        proj1_desc: 'It predicts prices of old cars',

        proj2_title: 'Resume Builder',
        proj2_link: 'www.project2.com',
        proj2_desc: 'It helps to make resumes',

        edu1_school: 'ABES ENGINEERING COLLEGE',
        edu1_year: '2018-22',
        edu1_qualification: 'B.Tech',
        edu1_desc: 'I did B.Tech with 84 percent',

        edu2_school: 'SDPS',
        edu2_year: '2017-18',
        edu2_qualification: 'Intermediate',
        edu2_desc: 'I did my 12th with 91 percent',

        achievement_1: 'Competitive programming',
        achievement_2: 'Coding',
        achievement_3: 'badminton',
        achievement_4: 'hjkh',

        award_1: 'Competitive programming',
        award_2: 'Coding',
        award_3: 'badminton',
        award_4: 'hjj',

        ref1_name: 'Amit',
        ref1_job: 'SDE 2',
        ref1_rel: 'manager',
        ref1_phn: '1234567890',
        ref1_address: 'GZB',

        ref2_name: 'Aman',
        ref2_job: 'SDE 2',
        ref2_rel: 'manager',
        ref2_phn: '1234567890',
        ref2_address: 'GZB',

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
