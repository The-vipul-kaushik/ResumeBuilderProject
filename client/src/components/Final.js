import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

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


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }


    render() {
        const { values, handleChange } = this.props;
        
        return (
            <>
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
                        <div className="row text-center">
                            <div className="contact">
                                <h1><b>{values.name}</b></h1>
                                <p className="lead email"><strong>Email:</strong> {values.email}</p>
                                <p className="lead email"><strong>Contact:</strong> (+91){values.phone}</p>
                                <p className="lead email"><strong>LinkedIn:</strong> {values.linkedin}</p>
                                <p className="lead email"><strong>Github:</strong> {values.github}</p>
                            </div>    
                        </div>
                
                        <hr/>
                        <div className="col-lg-8 mx-auto bg-light">
                            <h3><b>Skills</b></h3>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"> {values.skills}</p>
                        </div>

                    
                        <div className="col-lg-8 mx-auto bg-light">
                            <h3><b>Experience</b></h3>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.exp1_org}, {values.exp1_pos}</b> ({values.exp1_dur})</p>
                            <p className="mt-0">{values.exp1_desc}</p>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.exp2_org}, {values.exp2_pos}</b> ({values.exp2_dur})</p>
                            <p className="mt-0">{values.exp2_desc}</p>
                        </div>

                    
                        <div className="col-lg-8 mx-auto bg-light">
                            <h3><b>Projects</b></h3>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.proj1_title}</b>({values.proj1_link})</p>
                            <p className="mt-0">{values.proj1_desc}</p>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.proj2_title}</b> ({values.proj2_link})</p>
                            <p className="mt-0">{values.proj2_desc}</p>
                        </div>


                        <div className="col-lg-8 mx-auto bg-light">
                            <h3><b>Education</b></h3>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.edu1_school}</b> ({values.edu1_qualification}, {values.edu1_year})</p>
                            <p className="mt-0">{values.edu1_desc}</p>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead"><b>{values.edu2_school}</b> ({values.edu2_qualification}, {values.edu2_year})</p>
                            <p className="mt-0">{values.edu2_desc}</p>
                        </div>

                        <div className="col-lg-8 mx-auto bg-light">
                            <h3><b>Extra-Curriculars/Activities</b></h3>
                        </div>
                        <div className="col-lg-8 mx-auto">
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
