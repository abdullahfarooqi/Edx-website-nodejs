import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TopMenu from "./Edx";
import BottomMenu1 from "./BottomMenu";
import reportWebVitals from "./reportWebVitals";
import DispData from "./Disp";
import Project_Display from "./Projects";
import SignUp from "./signup";

ReactDOM.render(
  <React.StrictMode>
    <DispData></DispData>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
////<Project_Display></Project_Display>
//<TopMenu></TopMenu>
//<DispData></DispData>
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
