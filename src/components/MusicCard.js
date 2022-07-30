import "../styles/MusicCard.css";
import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";

function MusicCard() {
  return (
    <div>
      <div className="music-card-warpper">
        <div className="music-card">
          <div className="music-card-image">
            <img
              className="music-img"
              src="https://picsum.photos/180/174"
              alt="music"
            />
            <div className="logo-div"> <img
                src={require(process.env.PUBLIC_URL +
                  "../assets/small-logo.png")}
                width="25"
                alt="logo"
              /> </div>
            <div className="button-wrapper">
              <button className="button">
                <Icon className="btn-icon"
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
              <h3>Bollywood Butter</h3>
            </div>
            <div className="music-card-artist">
              <h4>Unknown</h4>
            </div>
            <div className="music-card-description">
              <h4>The finest quality of music</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
