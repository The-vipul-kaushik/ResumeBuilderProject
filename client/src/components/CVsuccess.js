import React, { Component } from 'react'

export default class CVsuccess extends Component {
    
   
  
    render() {

    
    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
        <div className="spinner-border text-success" style={{'width': '6rem', 'height': '6rem', 'role':'status'}}>
  <span className="sr-only">Loading...</span>
</div>
            <h2>Congratulations!! Your CV is downloading</h2>
            <br/>
            
        </div>  
        <button className="btn btn-success" onClick={this.props.nextStep}>Go to home page</button>
      </div>
    )
  }
}
