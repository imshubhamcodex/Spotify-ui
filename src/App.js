import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Home from "./views/Home";
import NewRelease from "./views/NewRelease";
import Focus from "./views/Focus";
import Mood from "./views/Mood";
import RockHome from "./views/RockHome";
import Search from "./views/Search";
import PlayerNav from "./components/PlayerNav";
import { Howl, Howler } from "howler";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [songs, setSongs] = useState([
    "/sounds/sound1.mp3",
    "/sounds/sound2.mp3",
  ]);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [seekWidth, setSeekWidth] = useState(0);

  const [sound, setSound] = useState(
    new Howl({
      src: songs[0],
      autoplay: false,
      loop: false,
      volume: 0.2,
      onend: () => {
        console.log("Finished!");
        nextSound();
      },
    })
  );

  useEffect(() => {
    let inv = null;
    clearInterval(inv);
    inv = setInterval(() => {
      if (sound.playing()) {
        let width = (sound.seek() / sound.duration()) * 100;
        setSeekWidth(width);
      }
    }, 1000);
    if (currentSongIndex === -1) {
      setCurrentSongIndex(0);
    }
  }, [currentSongIndex]);

  let setvolume = (val) => {
    sound.volume(val);
  };
  let playSound = () => {
    setVolume(sound.volume());
    sound.play();
  };
  let pauseSound = () => {
    sound.pause();
  };
  let stopSound = () => {
    sound.stop();
  };
  let nextSound = () => {
    if (currentSongIndex >= songs.length) return;
    stopSound();
    let currIndex = currentSongIndex + 1;
    setCurrentSongIndex(currIndex);

    let music = new Howl({
      src: songs[currIndex],
      autoplay: false,
      loop: false,
      volume: volume,
      onend: () => {
        console.log("Finished!");
        nextSound();
      },
    });
    setSound(music);
    music.play();
  };
  let prevSound = () => {
    if (currentSongIndex === 0) return;
    stopSound();
    let currIndex = currentSongIndex - 1;
    setCurrentSongIndex(currIndex);

    let music = new Howl({
      src: songs[currIndex],
      autoplay: false,
      loop: false,
      volume: volume,
      onend: () => {
        console.log("Finished!");
        nextSound();
      },
    });
    setSound(music);
    music.play();
  };
  let seekSound = (val) => {
    console.log();
    sound.seek(sound.duration() * val);
  };
  return (
    <>
      <BrowserRouter>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/new-release" exact component={NewRelease} />
          <Route path="/focus" exact component={Focus} />
          <Route path="/mood" exact component={Mood} />
          <Route path="/rock-home" exact component={RockHome} />
          <Route path="/search" exact component={Search} />
        </>
      </BrowserRouter>
      <PlayerNav
        playSound={playSound}
        pauseSound={pauseSound}
        nextSound={nextSound}
        prevSound={prevSound}
        setvolume={setvolume}
        seekSound={seekSound}
        width={seekWidth}
        vol={volume}
      />
    </>
  );
}

export default App;
