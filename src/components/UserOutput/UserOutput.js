import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return(
    <div class= "UserOutput">
      <h1>{props.username}</h1>
      <p>first paragraph</p>
      <p>second paragraph</p>
    </div>
  );
}

export default userOutput;
