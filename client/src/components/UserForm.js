import React, { Component } from 'react';
import '../App.css';
/*import axios from 'axios';
import { saveAs } from 'file-saver';*/
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
        name: 'Vipul Kaushik',
        careerObjective: 'I am passionate software seeking a position in the field of IT sector',
        email: 'vipul@gmail.com',
        phone: '7906591567',
        linkedin: 'vipul kaushik',
        github: 'the-vipul-kaushik',
        skills: 'C, C++, python',

        exp1_org: 'Geeksforgeeks',
        exp1_pos: 'TCW',
        exp1_desc: 'I wrote many articles',
        exp1_dur: '1 year',

        exp2_org: 'dataritz',
        exp2_pos: 'Sde',
        exp2_desc: 'I made projects',
        exp2_dur: '2 months',

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

        extra_1: 'Competitive programming',
        extra_2: 'Coding',
        extra_3: 'badminton',
        extra_3: 'Chess',
        extra_4: 'Ludo',
        extra_5: 'Cricket',

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

    /*formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            linkedin: this.state.linkedin,
            github: this.state.github,
            skills: this.state.skills
        }


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    } */

    /*createAndDownloadPdf = () => {
      axios.post('/create-pdf', this.state)
           .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
           .then((res) => {
              const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
              saveAs(pdfBlob, 'Resume.pdf');
           })
    } */
    render() {
        const { step } = this.state;
        
        switch (step) {
            case 0:
                return (
                    <>
                    <Nav2 />
                    <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'absolute'}} />
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
