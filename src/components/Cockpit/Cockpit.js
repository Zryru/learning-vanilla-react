import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect ");
    toggleBtnRef.current.click();

    // const timer = setTimeout(() => {
    //   // alert("saved!!!");
    // }, 1000);
    return () => {
      console.log("[Cockpit.js] clean up useEffect ");
      // clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2 useEffect ");
    return () => {
      console.log("[Cockpit.js] 2 clean up useEffect ");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App {props.title}</h1>
      <p className={assignedClasses.join(" ")}>Working!!!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
