import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Highlights from "./Components/Highlights";
import MyCalander from "./Components/MyCalander";
import NavBarr from "./Components/NavBarr";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllHighlights from "./Components/AllHighlights";
import MyDropDown from "./Components/MyDropDown";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LoginFirst from "./Components/LoginFirst";
import Dashboard from "./Components/Dashboard";
import { connect } from "react-redux";
import { fetchItems } from "./redux";
import Favourites from "./Components/Favourites";
import { toast } from "react-toastify";
import ErrorPage from "./Components/ErrorPage";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
const App = ({ itemData, fetchItems }) => {
  // const [soccerVideos, setSoccerVideos] = useState([]);

  const [isauth, setIsAuth] = useState(false);
  const [counter, setCounter] = useState();

  // useEffect(() => {
  //   fetch("https://www.scorebat.com/video-api/v1/")
  //     .then(response => response.json())
  //     .then(data => setSoccerVideos(data));
  // }, []);

  useEffect(() => {
    console.log("Fetching API");
    fetchItems();
    console.log("Data in Redux", itemData);
    // localStorage.setItem("token", false);
    console.log("SETTING TOKEN IN APP JS");
  }, []);

  // useEffect(() => {
  //   // if (localStorage.length === 0) setIsAuth(false);
  //   // else setIsAuth(true);
  //   if (localStorage.length === 0) setIsAuth(false);
  //   else setIsAuth(true);
  //   console.log(isauth);
  // }, [counter]);

  useEffect(() => {
    var token = localStorage.getItem("token");

    if (token === "true") {
      setIsAuth(true);
      console.log("TOKEN IN APP JS 1", token);
    } else {
      setIsAuth(false);
      console.log("TOKEN IN APP JS 2", token);
    }
  }, [counter]);

  return (
    <div className="main-class">
      <BrowserRouter>
        {/* Always use link inside router */}
        <NavBarr
          isauth={isauth}
          counter={counter}
          setCounter={setCounter}
          setIsAuth={setIsAuth}
        />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/dashboard"
            render={props => (isauth ? <Dashboard /> : <LoginFirst />)}
          />

          <Route
            exact
            path="/login"
            render={props => (
              <Login
                isauth={isauth}
                setIsAuth={setIsAuth}
                counter={counter}
                setCounter={setCounter}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={props => (
              <Signup counter={counter} setCounter={setCounter} />
            )}
          />

          {/* <Route
            exact
            path="/calander"
            render={props => <MyCalander soccerVideos={soccerVideos} />}
          /> */}

          <Route
            exact
            path="/calander"
            render={props =>
              isauth ? <MyCalander isauth={isauth} /> : <LoginFirst />
            }
          />

          <Route
            exact
            path="/allhighlights"
            render={props =>
              isauth ? <AllHighlights isauth={isauth} /> : <LoginFirst />
            }
          />

          <Route
            exact
            path="/fav"
            render={props =>
              isauth ? <Favourites isauth={isauth} /> : <LoginFirst />
            }
          />

          <Route
            exact
            path="/dropdown"
            render={props =>
              isauth ? <MyDropDown isauth={isauth} /> : <LoginFirst />
            }
          />

          <Route path="*" component={ErrorPage} />

          {/* <Route
            exact
            path="/allhighlights"
            render={props => <AllHighlights soccerVideos={soccerVideos} />}
          /> */}
          {/* <Route
            exact
            path="/dropdown"
            render={props => <MyDropDown soccerVideos={soccerVideos} />}
          /> */}
        </Switch>
      </BrowserRouter>

      {/* <Highlights /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemData: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
