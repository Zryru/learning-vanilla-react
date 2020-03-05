import React from "react";
// import './Person.css';
// import Radium from "radium";
// import styled from "styled-components";
import classes from "./Person.module.css";

const person = props => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // };

  // const StyledDiv = styled.div`
  //   width: 60%;
  //   margin: 16px auto;
  //   border: 1px solid #eee;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;

  //   @media (min-width: 500px) {
  //     width: 450px;
  //   }
  // `;

  if (Math.random() > 0.7) {
    throw new Error('Error');
  }


  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        {props.name} of age {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
// export default Radium(person);
