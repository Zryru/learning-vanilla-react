import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

// Hooks way
/* const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Max",
//         age: 28
//       },
//       {
//         name: "Scarlet",
//         age: 28
//       }
//     ]
//   });

//   const [otherState, setOtherState] = useState("some other value");

//   console.log("Persons state", personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Scarlet", age: 28 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>Working!!!</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         Hobbies 1
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         Hobbies 2
//       </Person>
//     </div>
//   );
// };
*/

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};;
    color: black;
  }
`;

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
              ></Person>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightred",
      //   color: "black"
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    // let classes = ['red', 'bold'].join(' ');

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>Working!!!</p>
        {/* <button style={style} onClick={() => this.switchNameHandler("Max!!!")}>
          Switch name
        </button> */}
        <button  className="button" onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle persons
        </StyledButton> */}
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
