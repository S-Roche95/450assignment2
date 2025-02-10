import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="main-container">
        <div class="education">
            <h2 class="left-part">{this.props.education.title}</h2>
            
            <h3>{this.props.education.bsInstitution}</h3>
            <p>{this.props.education.bsDegree}</p>
            <p>{this.props.education.bsDates}</p>
            <p>{this.props.education.bsGpa}</p>

            <h3>BS in Computer Science</h3>
            <p>{this.props.education.msDegree}</p><br></br>
            <p>{this.props.education.msDates}</p><br></br>
            <p>{this.props.education.msGpa}</p>
        </div>
      </div>
    );
  }
}

export default Education;