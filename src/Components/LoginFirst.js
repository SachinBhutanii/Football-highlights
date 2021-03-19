import React from "react";
import "./LoginFirst.css";
import not_found from "../images/not_found.jpg";
const LoginFirst = () => {
  return (
    <div>
      <h1 className="text-login">Please Login First To Watch The HighLights</h1>
      <div className="nf">
        <img src={not_found} />
      </div>
    </div>
  );
};

export default LoginFirst;
