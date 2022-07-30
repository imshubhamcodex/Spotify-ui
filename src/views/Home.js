import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import PlayerNav from "../components/PlayerNav";
import MusicBox from "../components/MusicBox";

function Home() {
  return (
    <div>
      <MusicBox />
      <SideNav />
      <TopNav />
      <PlayerNav />
    </div>
  );
}

export default Home;
