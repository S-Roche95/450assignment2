import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="main-container">
       <div class="profile">
            <h2 class="left-part">{this.props.profile.title}</h2>
            <p>{this.props.profile.content}</p>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;