import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="main-container">
       <div class="skills">
            <h2 class="left-part">{this.props.keySkills.title}</h2>
            <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
            </ul>
            <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
            </ul>
            <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Skills;