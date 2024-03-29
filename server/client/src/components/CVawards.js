import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class CVawards extends Component {

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

                    <h3 className="card-title">Awards</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    
                    <br />
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-12 md-form">
                            <input type="text" name="award_1" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.award_1} onChange={handleChange} required />
                            <label htmlFor="extra_3">Awards</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="award_2" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.award_2} onChange={handleChange} required />
                            <label htmlFor="extra_4">Awards</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="award_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.award_3} onChange={handleChange} required />
                            <label htmlFor="extra_3">Awards</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="award_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.award_4} onChange={handleChange} required />
                            <label htmlFor="extra_4">Awards</label>
                        </div>
                    </div>

                    {/* <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_5" id="extra_5" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_5} onChange={handleChange} required/>
                            <label htmlFor="extra_5">Activity/Achievement</label>
                        </div>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_5" id="extra_5" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_5} onChange={handleChange} required/>
                            <label htmlFor="extra_5">Activity/Achievement</label>
                        </div>
                    </div> */}
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-success">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />
                </form>
            </div>

        )
    }
}

export default CVawards;
