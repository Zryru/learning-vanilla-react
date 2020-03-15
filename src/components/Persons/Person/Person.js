import React, { Component } from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");

    return (
      <React.Fragment>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Log in</p>}
        <p onClick={this.props.click}>
          {this.props.name} of age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          onChange={this.props.change}
          value={this.props.name}
        ></input>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
