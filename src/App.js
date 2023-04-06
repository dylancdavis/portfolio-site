import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import IntroBox from "./components/IntroBox";
import ShowcaseBox from "./components/ShowcaseBox";
import ProjectsPage from "./components/ProjectsPage";

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
          <NavLink to="/">home</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact" className="contact">
            contact
          </NavLink>
        </nav>
      </header>
      <hr></hr>
      <main>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <IntroBox /> <hr></hr> <ShowcaseBox />
              </>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
