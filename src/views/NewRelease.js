import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import PlayerNav from "../components/PlayerNav";
import MusicBoxRelease from "../components/MusicBoxNewRelease";

function Home() {
  return (
    <div>
      <MusicBoxRelease />
      <SideNav />
      <TopNav />
      <PlayerNav />
    </div>
  );
}

export default Home;