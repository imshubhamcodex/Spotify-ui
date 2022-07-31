import "../styles/MusicCard.css";
import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { mdiStopCircle } from "@mdi/js";
import React, { useState } from "react";

function MusicCard(props) {
  const [playing, setPlaying] = useState(null);
  const [random, setRandom] = useState(null);
  const handlePlay = () => {
    let action = "play";
    let url = window.location.pathname.split("/");
    if (url.length >= 4 && url[3] === "play" && url[2] == props.music.id) {
      action = "pause";
      setPlaying(false);
      let btn = document.getElementsByClassName("button-wrapper");
      Array.from(btn).forEach((item) => {
        item.classList.remove("button-wrapper-play");
      });
    } else {
      let btn = document.getElementsByClassName("button-wrapper");
      Array.from(btn).forEach((item, index) => {
        if (index + 1 === Number(props.music.id)) {
          item.classList.add("button-wrapper-play");
          console.log("hi");
        } else {
          item.classList.remove("button-wrapper-play");
        }
      });
      setPlaying(true);
    }
    if (Object.keys(props).length > 2) {
      props.handleMusic(props.music, action);
    }
    setRandom((Math.random() + 1).toString(36).substring(7));
  };
  return (
    <div>
      <div className="music-card-warpper">
        <div className="music-card">
          <div className="music-card-image">
            {/* <img
              className="music-img"
              src="https://picsum.photos/180/174"
              alt="music"
            /> */}
            <img className="music-img" src={props.music.image} alt="music" />
            <div className="logo-div">
              {" "}
              <img src={"/assets/small-logo.png"} width="25" alt="logo" />{" "}
            </div>
            <div className="button-wrapper">
              <button className="button" onClick={handlePlay} key={random}>
                {!playing ? (
                  <Icon
                    className="btn-icon"
                    path={mdiPlay}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                ) : (
                  <Icon
                    className="btn-icon"
                    path={mdiStopCircle}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="music-card-info">
            <div className="music-card-title">
              <h3>{props.music.title}</h3>
            </div>
            <div className="music-card-artist">
              <h4>{props.music.artist}</h4>
            </div>
            <div className="music-card-description">
              <h4>{props.music.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
