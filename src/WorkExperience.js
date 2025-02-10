import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div className="main-container">
        <div class="experience">
            <h2 class="left-part">{this.props.workExperience.title}</h2>
            <div>
            <h3>{this.props.workExperience.job1}</h3>
            <p>{this.props.workExperience.job1Content}</p>
            <h3>{this.props.workExperience.job2}</h3>
            <p>{this.props.workExperience.job2Content}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;