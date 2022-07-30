import React, { useState, useEffect } from "react";
import "../styles/MusicBox.css";
import "../styles/MusicCard.css";
import "../styles/Search.css";

function MusicBox(props) {
  useEffect(() => {
    document.getElementsByClassName("search-bar-top-nav")[0].style.opacity =
      "1";
    console.log(props);
  }, [props]);
  const [image, setImage] = useState([
    "/assets/s1.png",
    "/assets/s2.png",
    "/assets/s3.png",
    "/assets/s4.png",
    "/assets/s5.png",
    "/assets/s6.png",
    "/assets/s7.png",
    "/assets/s8.png",
    "/assets/s9.png",
    "/assets/s10.png",
    "/assets/s11.png",
    "/assets/s12.png",
    "/assets/s13.png",
    "/assets/s14.png",
    "/assets/s15.png",
    "/assets/s16.png",
    "/assets/s17.png",
    "/assets/s18.png",
    "/assets/s19.png",
    "/assets/s20.png",
    "/assets/s21.png",
    "/assets/s22.png",
    "/assets/s23.png",
    "/assets/s24.png",
    "/assets/s25.png",
  ]);

  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">Browse all</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a></a>
            </p>
          </div>
          <div className="cards">
            {image.map((ele) => (
              <div key={(Math.random() + 1).toString(36).substring(7)}>
                <div className="music-card-warpper music-card-warpper-search">
                  <div className="music-card">
                    <div className="music-card-image">
                      <img className="music-img" src={ele} alt="music" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;
