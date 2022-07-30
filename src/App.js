import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./views/Home";
import NewRelease from "./views/NewRelease";
import Focus from "./views/Focus";
import Mood from "./views/Mood";
import RockHome from "./views/RockHome";

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/new-release" exact component={NewRelease} />
        <Route path="/focus" exact component={Focus} />
        <Route path="/mood" exact component={Mood} />
        <Route path="/rock-home" exact component={RockHome} />
      </>
    </BrowserRouter>
  );
}

export default App;
