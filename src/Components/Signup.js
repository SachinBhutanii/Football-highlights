import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";

const Signup = ({ counter, setCounter }) => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  });
  const [count, setCount] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    var letters = /^[a-zA-Z]+$/;
    var phoneno = /^\d{10}$/;
    //To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    var letters1 = /^[0-9a-zA-Z]+$/;
    var l = details.password.length;
    var flag = true;
    if (!details.fname.match(letters)) {
      // alert("please enter alphabetic first name");
      var element1 = document.getElementById("wrong_name");
      element1.innerHTML = "Please Enter Alphabets Only";
      flag = false;
    } else {
      var element1 = document.getElementById("wrong_name");
      element1.innerHTML = "";
    }
    if (!details.lname.match(letters)) {
      // alert("please enter alphabetic last name");
      var element2 = document.getElementById("wrong_last");
      element2.innerHTML = "Please Enter Alphabets Only";
      flag = false;
    } else {
      var element2 = document.getElementById("wrong_last");
      element2.innerHTML = "";
    }
    if (!details.contact.match(phoneno)) {
      //alert("please enter valid phone number");
      var element3 = document.getElementById("wrong_number");
      element3.innerHTML = "Please Enter Valid Phone NUmber ";
      flag = false;
    } else {
      document.getElementById("wrong_number").innerHTML = "";
    }
    if (!details.password.match(pwd)) {
      // alert(
      //   "password should contain atleast one number and one special character and 8-16 characters"
      // );
      var element5 = document.getElementById("wrong_password");
      element5.innerHTML =
        "Password should contain atleast one number and one special character and 8-16 characters";
      flag = false;
    } else {
      document.getElementById("wrong_password").innerHTML = "";
    }
    if (!details.username.match(letters1)) {
      // alert("please enter alphanumeric username");
      var element4 = document.getElementById("wrong_username");
      element4.innerHTML = "Please Enter  Valid Username";
      flag = false;
    } else {
      document.getElementById("wrong_username").innerHTML = "";
    }

    if (flag) {
      var myobj = JSON.stringify(details);
      // localStorage.setItem("testobj", myobj);
      localStorage.setItem("testobj", myobj);
      
      setCount(1);
      // setCounter(details)
      console.log(details);
    }
  };

  return (
    <div>
      <div className="sign ">
        <div className="abc">
          <div className=" fosoccerVideos={soccerVideos}rmpad">
            <div className="form1 ">
              <h2 className="text-center signh2">Register Here !</h2>
              <form onSubmit={e => handleSubmit(e)}>
                First Name:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="fname"
                  type="text"
                  onChange={e =>
                    setDetails({ ...details, fname: e.target.value })
                  }
                />
                <span className="err" id="wrong_name"></span>
                <br></br>
                Last Name:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="lname"
                  type="text"
                  onChange={e =>
                    setDetails({ ...details, lname: e.target.value })
                  }
                />
                <span className="err" id="wrong_last"></span>
                <br></br>
                Email:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="email"
                  type="email"
                  onChange={e =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
                <span className="err" id="wrong_email"></span>
                <br></br>
                Contact Number:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="contact"
                  type="text"
                  onChange={e =>
                    setDetails({ ...details, contact: e.target.value })
                  }
                />
                <span className="err" id="wrong_number"></span>
                <br></br>
                Username:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="username"
                  type="text"
                  onChange={e =>
                    setDetails({ ...details, username: e.target.value })
                  }
                />
                <span className="err" id="wrong_username"></span>
                <br></br>
                Password:
                <br></br>
                <input
                  className="forminput"
                  required
                  id="password"
                  type="password"
                  onChange={e =>
                    setDetails({ ...details, password: e.target.value })
                  }
                />
                <span className="err" id="wrong_password"></span>
                <br></br>
                <div className="text-center padbtt">
                  <button className="btn btn-lg btn-primary" type="submit">
                    Signup
                  </button>
                  <br></br>
                  <span>
                    Already have an account? <Link to="/login">login</Link>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"></div>
          </div>
          {count === 1 ? <Redirect to="/login" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
