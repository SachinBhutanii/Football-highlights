import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "./SignUp.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login = ({ isauth, setIsAuth, counter, setCounter }) => {
  const [details1, setDetails1] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [valid, setValid] = useState(0);
  const handleLogin = e => {
    e.preventDefault();
    // var text = localStorage.getItem("testobj");
    var text = localStorage.getItem("testobj");

    var signdetails = JSON.parse(text);
    if (signdetails == null) {
      alert("Please signUp first");
    } else if (
      signdetails.username === details1.username &&
      signdetails.password === details1.password
    ) {
      setValid(1);
      setCounter(details1); // for authentication
      // setIsAuth(false);
      localStorage.setItem("token", true);
      console.log("Setting token to true in login");
      toast.info("Logged in Successfully");
    } else {
      toast.error("incorrect password or username");

      //alert("incorrect password or username");
    }
  };

  return (
    <div>
      <div className="sign ">
        <div className="abc">
          <div className=" formpad">
            <div className="form1 ">
              <h2 className="text-center signh2">Login</h2>
              <form onSubmit={e => handleLogin(e)}>
                Username:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="username"
                  type="text"
                  onChange={e =>
                    setDetails1({ ...details1, username: e.target.value })
                  }
                />
                <br></br>
                Password:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="password"
                  type="password"
                  onChange={e =>
                    setDetails1({ ...details1, password: e.target.value })
                  }
                />
                <br></br>
                <div className="text-center padbtt">
                  <button className="btn btn-lg btn-primary" type="submit">
                    Login
                  </button>
                  <br></br>
                  <span>
                    Don't have an account? <Link to="/signup">signup</Link>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"></div>
          </div>
          {valid === 1 ? <Redirect to="/dashboard" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
