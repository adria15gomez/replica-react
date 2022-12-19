import "../src/App.css";
import Navbar from "./componentes/Navbar";
import Girl from "./images/landing-page-girl.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Feel the Music</h1>
      <div>
        <img src={Girl} className="Landing" />
      </div>
    </div>
  );
}

export default App;
