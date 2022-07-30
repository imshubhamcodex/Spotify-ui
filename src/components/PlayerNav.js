import "../styles/PlayerNav.css";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { mdiShuffle } from "@mdi/js";
import { mdiChevronDoubleLeft } from "@mdi/js";
import { mdiChevronDoubleRight } from "@mdi/js";
import { mdiPlayCircleOutline } from "@mdi/js";
import { mdiRepeatVariant } from "@mdi/js";
import { mdiFormatListGroupPlus } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import { mdiCheckboxBlankCircle } from "@mdi/js";

function PlayerNav() {
  return (
    <div>
      <div id="player-nav">
        <div id="player-nav-content">
          <div className="player-wrapper">
            <div className="player-wrapper-left">
              <div className="song-name">
                <span>Love me like you do</span>
                <br />
                <span>Artist name</span>
              </div>
              <div className="like-icon-player">
                <Icon
                  className="btn-icon"
                  path={mdiHeart}
                  size={0.8}
                  horizontal
                  vertical
                  rotate={-180}
                />
              </div>
            </div>
            <div className="player-wrapper-middle">
              <div className="controls-btn">
                <Icon
                  className="control-icon"
                  path={mdiShuffle}
                  size={1}
                  horizontal
                  vertical
                  rotate={-180}
                />
                <Icon
                  className="control-icon"
                  path={mdiChevronDoubleLeft}
                  size={1.5}
                  horizontal
                  vertical
                  rotate={-180}
                />

                <Icon
                  className="control-icon"
                  path={mdiPlayCircleOutline}
                  size={1.5}
                  horizontal
                  vertical
                  rotate={-180}
                />
                <Icon
                  className="control-icon"
                  path={mdiChevronDoubleRight}
                  size={1.5}
                  horizontal
                  vertical
                  rotate={-180}
                />
                <Icon
                  className="control-icon"
                  path={mdiRepeatVariant}
                  size={1}
                  horizontal
                  vertical
                  rotate={-180}
                />
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill">
                  <div className="progress-bar-fill-inner"></div>
                  <div>
                    <Icon
                      className="seek-icon"
                      path={mdiCheckboxBlankCircle}
                      size={0.7}
                      horizontal
                      vertical
                      rotate={-180}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="player-wrapper-right">
              <div className="volume-icon">
                <Icon
                  className="btn-icon-right"
                  path={mdiFormatListGroupPlus}
                  size={1}
                  horizontal
                  vertical
                  rotate={0}
                />
                <Icon
                  className="btn-icon-right"
                  path={mdiVolumeHigh}
                  size={1}
                  horizontal
                  vertical
                  rotate={-180}
                />
              </div>
              <div className="volume-bar">
                <div className="volume-bar-fill">
                  <div className="volume-bar-fill-inner"></div>
                  <div>
                    <Icon
                      className="vol-icon"
                      path={mdiCheckboxBlankCircle}
                      size={0.7}
                      horizontal
                      vertical
                      rotate={-180}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerNav;
