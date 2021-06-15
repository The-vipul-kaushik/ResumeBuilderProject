import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class CVhobbies extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Hobbies and Interests</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    
                    <br />
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_1" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                            <label htmlFor="extra_3">Hobbies/Interests</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_2" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                            <label htmlFor="extra_4">Hobbies/Interests</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                            <label htmlFor="extra_3">Hobbies/Interests</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                            <label htmlFor="extra_4">Hobbies/Interests</label>
                        </div>
                    </div>

                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-warning">Preview resume<i className="fas fa-download ml-1"></i></button>
                    </div>
                    <br />
                </form>
            </div>

        )
    }
}

export default CVhobbies;
