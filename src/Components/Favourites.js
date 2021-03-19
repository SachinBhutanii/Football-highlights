import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Favoutites.css";
import "./MyDropDown.css";
import { connect } from "react-redux";
import fav from "../images/fav.webp";
import { useDispatch } from "react-redux";
import { remFav } from "../redux/FBActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const MyDropDown = ({ fav_videos }) => {
  const [fav_items, setFavItems] = useState(fav_videos);
  const dispatch = useDispatch();

  const removeElement = title => {
    var filtered_arr = fav_items.filter(video => video.title !== title);
    setFavItems(filtered_arr);
    dispatch(remFav(title));
    toast.error("Item Removed");
  };

  return (
    <div>
      {" "}
      <div className="row ">
        {console.log("fav_items", fav_items)}
        {fav_items.length > 0 ? (
          fav_items.map(video => (
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
                  <Button
                    variant="danger"
                    onClick={() => removeElement(video.title)}
                  >
                    Remove favourite
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="cal">
            <h2 className="cal-text">
              You have not added any favourites yet !{" "}
            </h2>
            <br />
            <img className="cal-img" src={fav} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fav_videos: state.fav,
  };
};

export default connect(mapStateToProps, null)(MyDropDown);
