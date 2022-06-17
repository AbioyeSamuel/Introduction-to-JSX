import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid balck"
};
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello world!</h1>
    <h6 style={{ color: "red" }}>Hi!</h6>
    <p>This is Samuel</p>
  </div>,
  document.getElementById("root")
);

//how it would be in vanilla javascript.
// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
