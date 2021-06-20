import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import {storage} from '../firebase';

class Final extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    
    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        this.props.nextStep();
        
        const data = this.props.values;


        axios.post('/create-Resumepdf1', data)
            .then(() => axios.get('fetch-Resumepdf1', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                const pdfname = Math.floor(Math.random() * 1000000000) + 1;
                const uploadTask = storage.ref(`resumes/${data.name}_Resume_${pdfname}`).put(pdfBlob);
                uploadTask.on("state_changed",snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("resumes") 
                        .child(`${data.name}_Resume_${pdfname}`)
                        .getDownloadURL()
                        .then(async (url) => {
                            let payload = {Url: url};
                            let res = await axios.post('GetResumeUrl', payload);
                            let data = res.data;
                        });
                }
                );
                saveAs(pdfBlob, `${data.name}_Resume_${pdfname}.pdf`);
            });

        e.target.reset();

    }


    render() {
        const { values, handleChange } = this.props;
        
        return (
            <>
            <script src="https://kit.fontawesome.com/CE04E9AC-6E21-4765-A788-04633B0923C6.js" crossorigin="anonymous"></script>
                <form onSubmit={this.formSubmit}>
                    <div className="container text-center mt-0">
                        <button type="button" className="btn btn-info mt-0" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-success mt-0">Download Resume<i className="fas fa-download ml-1"></i></button>
                    </div>
                    <br />
                </form>

                <div className="preview">
                    <div className="previewbox">
                        <br/><br/>
                        <div className="row">
                            <div className="contact text-left">
                                <h1><b>{values.name}</b></h1>
                                <p>{values.careerObjective}</p>
                            </div>
                            <div className="contact text-right col-lg-3">
                                <p className="lead email">{values.email} <i class="fas fa-envelope-square"></i></p>
                                <p className="lead email">(+91){values.phone} <i class="fas fa-phone"></i></p>
                                <p className="lead email">{values.linkedin} <i class="fab fa-linkedin-in"></i></p>
                                <p className="lead email">{values.github} <i class="fab fa-github"></i></p>
                            </div>    
                        </div>
                
                        <hr/>
                        <div className="col-lg-1">
                            <h3><b>Skills</b></h3>
                        </div>
                        <hr className="horiLine" />
                        <div className="col-lg-3 text-left">
                            <p className="lead"> {values.skills}</p>
                        </div>
                    
                        <div className="col-lg-1 ">
                            <h3><b>Experience</b></h3>
                        </div>
                        <hr className="horiLine" />
                        <div className="col-lg-4 col-sm-6 text-left">
                            <p className="lead mb-0"><b>{values.exp1_org}, {values.exp1_pos}</b> ({values.exp1_dur})</p>
                            <p className="mt-0 ml-0">{values.exp1_desc}</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-left">
                            <p className="lead mb-0"><b>{values.exp2_org}, {values.exp2_pos}</b> ({values.exp2_dur})</p>
                            <p className="mt-0 ml-0">{values.exp2_desc}</p>
                        </div>

                    
                        <div className="col-lg-1">
                            <h3><b>Projects</b></h3>
                        </div>
                        <hr className="horiLine" />
                        <div className="col-lg-6 text-left">
                            <p className="lead mb-0"><b>{values.proj1_title}</b></p>
                            <p className="mt-0 mb-0">{values.proj1_link}</p>
                            <p className="mt-0">{values.proj1_desc}</p>
                        </div>
                        <div className="col-lg-5 text-left">
                            <p className="lead mb-0"><b>{values.proj2_title}</b></p>
                            <p className="mt-0 mb-0">{values.proj2_link}</p>
                            <p className="mt-0">{values.proj2_desc}</p>
                        </div>


                        <div className="col-lg-1">
                            <h3><b>Education</b></h3>
                        </div>
                        <hr className="horiLine" />
                        <div className="col-lg-6 text-left">
                            <p className="lead mb-0"><b>{values.edu1_school}</b> ({values.edu1_qualification}, {values.edu1_year})</p>
                            <p className="mt-0 ">{values.edu1_desc}</p>
                        </div>
                        <div className="col-lg-6 text-left">
                            <p className="lead mb-0"><b>{values.edu2_school}</b> ({values.edu2_qualification}, {values.edu2_year})</p>
                            <p className="mt-0">{values.edu2_desc}</p>
                        </div>

                        <div className="col-lg-6 text-left">
                            <h3><b>Extra-Curriculars/Activities</b></h3>
                        </div>
                        <hr className="horiLine" />
                        <div className="col-lg-6 text-left">
                                <p className="lead"><b>Hobbies: </b>{values.extra_2} </p>
                                <p className="lead"><b>Extra-Curricular: </b>{values.extra_3}, {values.extra_4}, {values.extra_5} </p>
                                <p className="lead"><b>Languages: </b>{values.extra_1} </p>
                    </div>
                </div>
            </div>
        </>

        )
    }}

export default Final;
