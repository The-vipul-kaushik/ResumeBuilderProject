import React, { Component } from 'react'

class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

      
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Personal Information</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.name} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Career Objective*</label>
                            <textarea rows="3" cols="50" name="careerObjective" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.careerObjective} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.email} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Github</label>
                            <input type="text" name="github" className="form-control" defaultValue={values.status === 1 ? '' : values.github} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Skills* (Separate each skill with a space and a comma)</label>
                            <input type="text" name="skills" className="form-control"  defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info " onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-success">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br/>
                </form>
            
            </div>
        )
    }
}


export default PersonalDetails;
