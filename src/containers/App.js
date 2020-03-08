import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "qwert", name: "Max", age: 28 },
      { id: "trewq", name: "Scarlet", age: 28 },
      { id: "wqerf", name: "Scar", age: 28 }
    ],
    showPersons: false
  };

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

    this.setState({
      persons: persons
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

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        ></Persons>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
