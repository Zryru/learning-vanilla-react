import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect ');
    setTimeout(() => {
      alert('saved!!!')
    }, 1000);

  }, [props.persons]);

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
      <h1>Hi, I'm a React App {props.title}</h1>
      <p className={assignedClasses.join(" ")}>Working!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;
