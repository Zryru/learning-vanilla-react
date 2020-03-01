import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Scarlet",
        age: 28
      }
    ]
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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Scarlet", age: 28 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Working!!!</p>
        <button style={style} onClick={() => this.switchNameHandler("Max!!!")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Maximilian!")}
          change={this.nameChangeHandler}
        >
          Hobbies 1
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies 2
        </Person>
      </div>
    );
  }
}

export default App;
