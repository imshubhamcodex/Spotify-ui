import "../styles/MusicCard.css";
import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";

function MusicCard(props) {
  let img = props.music.image;
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
            <img className="music-img" src={img} alt="music" />
            <div className="logo-div">
              {" "}
              <img src={"/assets/small-logo.png"} width="25" alt="logo" />{" "}
            </div>
            <div className="button-wrapper">
              <button className="button">
                <Icon
                  className="btn-icon"
                  path={mdiPlay}
                  size={1.2}
                  horizontal
                  vertical
                  rotate={-180}
                />
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
