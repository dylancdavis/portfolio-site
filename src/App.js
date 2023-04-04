import "./App.css";

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
        <div className="intro-box">
          <div className="intro-text">
            <h2>
              Hello! I'm Dylan Davis, a
              <div className="hero-text">
                <span className="muted">(partially)</span> self-taught
                <div>web developer.</div>
              </div>
            </h2>
            <p>
              I started learning how to create websites nearly eight years ago,
              and began studying computer science seriously at the{" "}
              <span className="garnet">
                University of South Carolina in 2018.
              </span>{" "}
              I continued my pursuit of software development after graduation,
              focusing on fundamentals and building side projects.
            </p>
            <p>
              This year, I enrolled with the University of Helsinki to learn
              more about full-stack web development. I've build a few projects
              with React, and I've primarily worked with the MERN stack, though
              I've gotten to know Vue more recently as well.
            </p>
          </div>
          <div className="intro-images">Just a placeholder for now</div>
        </div>

        <hr></hr>
        <section>
          <h2>projects</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
