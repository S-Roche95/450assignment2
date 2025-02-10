import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <div class="top">
            <div>
            <h1>{this.props.personInfo.name}</h1>
            <p>{this.props.personInfo.occupation}</p>
            </div>
            <ul>
                <li>Email: <a>{this.props.contactInfo.email}</a></li>
                <li>Web: <a>{this.props.contactInfo.web}</a></li>
                <li>Mobile: {this.props.contactInfo.mobile}</li>
            </ul>
        
        </div>
      </div>
    );
  }
}

export default Header;