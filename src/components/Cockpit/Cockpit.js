import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>Working!!!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;