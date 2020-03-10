import React, { Component } from "react";
import classes from "./Person.module.css";

export default class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          {this.props.name} of age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

