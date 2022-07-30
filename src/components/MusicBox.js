import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">New Releases</h1>
          <div id="see-all-div">
            <p id="see-all">
              <a>SEE ALL</a>
            </p>
          </div>
          <div className="cards">
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
            <MusicCard className="cards__item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;
