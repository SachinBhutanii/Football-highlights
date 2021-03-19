import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./Highlights.css";
import "./MyDropDown.css";
import error_found from "../images/error.gif";
import { connect } from "react-redux";
import { addFav } from "../redux/FBActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const MyDropDown = ({ soccerVideos, fav_videos }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [dropselected, setDropSelected] = useState([]);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  var array_dropdown = [];
  var unquie_dropdown_array = [];
  useEffect(() => {
    console.log("soccer video", soccerVideos);

    soccerVideos.map(
      video => (
        array_dropdown.push(video.competition.name.split(":")[1]),
        (unquie_dropdown_array = new Set(array_dropdown))
      )
    );

    setResult(Array.from(unquie_dropdown_array));
  }, [soccerVideos]);

  //from drop down
  useEffect(() => {
    //filter
    var result2 = soccerVideos.filter(
      video => video.competition.name.split(":")[1] === selectedValue
    );

    setDropSelected(result2, console.log("dropselected value", dropselected));
  }, [selectedValue]);

  const handleDropdown = e => {
    setSelectedValue(e.target.value, console.log(selectedValue));
  };

  const addtofav = index => {
    console.log("Index of this video is ", index);
    console.log(soccerVideos[index]);
    var video = soccerVideos[index];

    if (fav_videos.includes(video)) {
      // alert("Item is already in favourites");
      toast.error("Item is already in favourites");
    } else {
      setFav(!fav);
      // alert("Kyaa");
      //add to redux by dispatching action
      dispatch(addFav(video));
      toast.info("Added To Favourites");
    }
  };

  return (
    <div>
      {" "}
      <div className="drop-div">
        <label for="matches">Choose a league:</label>
        {console.log("Result is", result)}
        <div className="select-container">
          <select className="matches" onChange={e => handleDropdown(e)}>
            {result.map(video => (
              <option value={video}>{video}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row ">
        {dropselected && selectedValue ? (
          dropselected.map(video => (
            <div className="p-4 col-md-3">
              <Card style={{ width: "24rem" }}>
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Img variant="top" src={video.thumbnail} />
                  <Card.Title>{video.competition.name}</Card.Title>
                  <Card.Title>{video.date.slice(0, 10)}</Card.Title>
                  <a href={video.url} target="_blank">
                    <Button variant="secondary">Watch Highlights</Button>
                  </a>
                  {!fav_videos.includes(video) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => addtofav(soccerVideos.indexOf(video))}
                      width="35"
                      height="35"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: "80px" }}
                    >
                      <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => addtofav(soccerVideos.indexOf(video))}
                      width="35"
                      height="35"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: "80px" }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h2 className="league">Please select a league </h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    soccerVideos: state.items,
    fav_videos: state.fav,
  };
};

export default connect(mapStateToProps, null)(MyDropDown);
