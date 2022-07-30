import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import PlayerNav from "../components/PlayerNav";
import MusicBoxRelease from "../components/MusicBoxSearch";

function Home() {
  const [query, setQuery] = useState("");
  const handleSaveNote = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <MusicBoxRelease query={query} />
      <SideNav />
      <TopNav onClickCallback={handleSaveNote} />
      <PlayerNav />
    </div>
  );
}

export default Home;
