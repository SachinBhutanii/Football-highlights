import React from "react";
import { Carousel } from "react-bootstrap";
import msn from "../images/msn.jpg";
import team from "../images/team.jpg";
import dortmundteam from "../images/dortmundteam.jpg";
import athletico from "../images/athleticoo.jpg";
import madrid from "../images/madrid.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 club" src={team} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 club"
            src={athletico}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 club" src={madrid} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div className="content">
        <h1 className="football">Football</h1>
      </div> */}
    </div>
  );
};

export default Home;
