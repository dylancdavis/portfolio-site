import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="title-text">
          <span class="invertable">d</span>
          <span class="invertable">y</span>
          <span class="invertable">l</span>
          <span class="invertable">c</span>
          <span class="invertable">d</span>
          <span class="invertable">a</span>
          <span class="invertable">v</span>
        </h1>
        <nav>
          <div>home</div>
          <div>projects</div>
          <div>about</div>
          <button>contact</button>
        </nav>
      </header>
      <hr></hr>
      <main>
        <h2 class="intro-text">
          hello! i'm a
          <div class="hero-text">
            <span className="muted">partially</span> self-taught web developer
          </div>
        </h2>
        <hr></hr>
        <section>
          <h2>projects</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
