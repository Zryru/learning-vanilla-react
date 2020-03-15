import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";
import Auxiliary from "./../hoc/Auxiliary";
import withClass from "./../hoc/withClass";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "qwert", name: "Max", age: 28 },
      { id: "trewq", name: "Scarlet", age: 28 },
      { id: "wqerf", name: "Scar", age: 28 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount @deprecated");
  // }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Scarlet", age: 28 }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        ></Persons>
      );
    }

    return (
      // <div className={classes.App}>
      <Auxiliary>
        <button
          onClick={() => {
            const bool = !this.state.showCockpit;
            this.setState({ showCockpit: bool });
          }}
        >
          Toggle cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          ></Cockpit>
        ) : null}
        {persons}
      </Auxiliary>
      // </div>
    );
  }
}

export default withClass(App, classes.App);
