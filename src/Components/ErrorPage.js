import React from "react";
import robo from "../images/Robo-404-Page.gif";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="err-div">
      <h1>No Page Found</h1>
      <br></br>
      <img src={robo} />
    </div>
  );
};

export default ErrorPage;
