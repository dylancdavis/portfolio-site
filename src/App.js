import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import IntroBox from "./components/IntroBox";
import ShowcaseBox from "./components/ShowcaseBox";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1 className="title-text">
            <span className="invertable">d</span>
            <span className="invertable">y</span>
            <span className="invertable">l</span>
            <span className="invertable">c</span>
            <span className="invertable">d</span>
            <span className="invertable">a</span>
            <span className="invertable">v</span>
            <span className="muted">.dev</span>
          </h1>
        </div>
        <nav>
          <div>home</div>
          <div>projects</div>
          <div>about</div>
          <button>contact</button>
        </nav>
      </header>
      <hr></hr>
      <main>
        <IntroBox />
        <hr></hr>
        <ShowcaseBox />
      </main>
    </div>
  );
}

export default App;
