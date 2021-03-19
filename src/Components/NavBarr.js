import React, { useEffect } from "react";
import "./NavBarr.css";
import { Link } from "react-router-dom";
import barca_logo from "../images/icon.png";
import var_logo from "../images/var_logo.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const NavBarr = ({ isauth, counter, setCounter, setIsAuth }) => {
  const empty_storage = () => {
    // localStorage.removeItem("testobj");
    localStorage.setItem("token", false);
    // setIsAuth(false);
    setCounter("");
    toast.warn("Logged Out Successfully");
  };

  useEffect(() => {
    console.log("NAV BAR TOKEN IS ", localStorage.getItem("token"));
  });
  return (
    <div>
      {
        <ul className="n">
          <li className="im">
            <Link to="/">
              <img src={barca_logo} alt="logo" width="70px" />
              {/* <button className="btn btnbg btn-lg ">LOGO</button> */}
            </Link>
          </li>
          <div className="ml-auto padlogo1">
            <li>
              <Link to="/allhighlights">
                {" "}
                <button className="btn btnbg btn-lg  ">Highlights</button>
              </Link>
            </li>
            <li>
              <Link to="/dropdown">
                {" "}
                <button className="btn btnbg btn-lg ">By League</button>
              </Link>
            </li>
            <li>
              <Link to="/calander">
                <button className="btn btnbg btn-lg ">By Date</button>
              </Link>
            </li>

            <li>
              <Link to="/fav">
                <button className="btn btnbg btn-lg ">Favourites</button>
              </Link>
            </li>

            {isauth ? (
              <>
                <li>
                  {" "}
                  <button
                    className="btn btnbg btn-lg btn-danger"
                    onClick={empty_storage}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    {" "}
                    <button className="btn btnbg btn-lg ">Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="btn btnbg btn-lg ">SignUp</button>
                  </Link>
                </li>
              </>
            )}

            {/* 
            <li>
              <Link to="/login">
                {" "}
                <button className="btn btnbg btn-lg ">Login</button>
              </Link>
            </li>{" "}
            <li>
              <Link to="/signup">
                {" "}
                <button className="btn btnbg btn-lg ">SignUp</button>
              </Link>
            </li> */}
          </div>
        </ul>
      }
    </div>
  );
};

export default NavBarr;
