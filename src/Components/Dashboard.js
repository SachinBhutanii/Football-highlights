import React from "react";
import "./Dashboard.css";
import ney from "../images/ney.jpg";

const Dashboard = () => {
  // var local_data = window.localStorage.getItem("testobj");
  var local_data = window.localStorage.getItem("testobj");
  local_data = JSON.parse(local_data);

  return (
    <div className="dash-div">
      {local_data && (
        <div className="in-div">
          {" "}
          <img src={ney} className="ney-img" />
          {console.log(local_data)}
          <h1 className="welcom">Welcome {local_data.username}</h1>{" "}
          <h2>{local_data.email}</h2>
          <h2>{local_data.contact}</h2>
          <marquee className="access">
            Now you can access all highlights for free
          </marquee>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
