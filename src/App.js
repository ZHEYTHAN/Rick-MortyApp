import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";

function App() {
  const reqApi = () => {
    console.log("clickimg");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imagenRickMorty} alt="Rick & Morty" className="img-home" />
        <button onClick={reqApi} className="btn-search">
          Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;
