import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    // DONT DO THIS this.state.persons[0].name = "Maxi";
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
    let btnClasses = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  change={event => this.nameChangeHandler(event, person.id)}
                ></Person>
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClasses.push(classes.red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>Working!!!</p>
        <button
          className={btnClasses.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
