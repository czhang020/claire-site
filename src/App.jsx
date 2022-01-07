import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Animation from "./components/animation/Animation";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Projects/>
        <Portfolio/>
        <Animation/>
      </div>
    </div>
  );
}

export default App;
