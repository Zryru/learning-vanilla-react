import React, { Component } from "react";
import Person from "./Person/Person";

export default class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps...");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate...");
     return true;
    // if (nextProps.persons !== this.props.persons) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate...");
    return { message: "snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate...");
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount...");
  }

  render() {
    console.log("[Persons.js] rendering...");

    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.props.clicked(index)}
              change={event => this.props.changed(event, person.id)}
              isAuth={this.props.isAuthenticated}
            ></Person>
          );
        })}
      </div>
    );
  }
}
