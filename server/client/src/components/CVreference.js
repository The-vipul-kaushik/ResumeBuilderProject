import React, { Component } from 'react'

export default class CVreference extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">References Information</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Reference's name</label>
                            <input type="text" name="ref1_name" className="form-control" defaultValue={values.status === 1 ? '' : values.ref1_name} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Job title</label>
                            <input type="text" name="ref1_job" className="form-control" defaultValue={values.status === 1 ? '' : values.ref1_job} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Relationship</label>
                            <input type="text" name="ref1_rel" className="form-control" defaultValue={values.status === 1 ? '' : values.ref1_rel} onChange={handleChange} required/>
                        </div>
                        <div className="mt-3 col-lg-4 text-left">
                            <label>Phone no.</label>
                            <input type="text" name="ref1_phn" className="form-control" defaultValue={values.status === 1 ? '' : values.ref1_phn} onChange={handleChange} required/>
                        </div>

                        <div className="mt-3 col-lg-8 text-left">
                            <label>Address</label>
                            <input type="text" name="ref1_address" className="form-control" defaultValue={values.status === 1 ? '' : values.ref1_address} onChange={handleChange} required/>
                        </div>

                    </div>

                    <br />

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Reference's name</label>
                            <input type="text" name="ref2_name" className="form-control" defaultValue={values.status === 1 ? '' : values.ref2_name} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Job title</label>
                            <input type="text" name="ref2_job" className="form-control" defaultValue={values.status === 1 ? '' : values.ref2_job} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Relationship</label>
                            <input type="text" name="ref2_rel" className="form-control" defaultValue={values.status === 1 ? '' : values.ref2_rel} onChange={handleChange} required/>
                        </div>
                        <div className="mt-3 col-lg-4 text-left">
                            <label>Phone no.</label>
                            <input type="text" name="ref2_phn" className="form-control" defaultValue={values.status === 1 ? '' : values.ref2_phn} onChange={handleChange} required/>
                        </div>

                        <div className="mt-3 col-lg-8 text-left">
                            <label>Address</label>
                            <input type="text" name="ref2_address" className="form-control" defaultValue={values.status === 1 ? '' : values.ref2_address} onChange={handleChange} required/>
                        </div>
                    </div>

                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-warning">Preview CV<i className="fas fa-eye ml-1"></i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
