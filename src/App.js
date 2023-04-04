import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1 class="title-text">
            <span class="invertable">d</span>
            <span class="invertable">y</span>
            <span class="invertable">l</span>
            <span class="invertable">c</span>
            <span class="invertable">d</span>
            <span class="invertable">a</span>
            <span class="invertable">v</span>
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
        <div class="intro-box">
          <h2 class="intro-text">
            hello! i'm a
            <div class="hero-text">
              <span className="muted">partially</span> self-taught web developer
            </div>
          </h2>
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
