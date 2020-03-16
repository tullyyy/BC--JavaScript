import React from "react";
import "./contact.css";

export class Contact {
  render() {
    return (
      <div className="contact">
        <div className="contact__avatar contact__avatar--female"></div>
        <div className="contact__body">
          <div className="contact__name">{this.props.name}</div>
          <div className="contact__phone">{this.props.number}</div>
        </div>
        <button className="contact__callbtn"></button>
      </div>
    );
  }
}
