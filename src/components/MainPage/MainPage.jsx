import React from "react";
import "../MainPage/MainPage.css";
import mainVideo from "../MainPage/mainVideo.mp4";
const MainPage    = () => {
  return (
    <div id="mainVideoContainer">
      <video id="mainVideo" autoPlay muted>
        <source src={mainVideo} />
      </video>
    </div>
  );
};

export default MainPage;
