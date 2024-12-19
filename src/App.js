import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Caracteres from "./componentes/caracteres";

function App() {
  const [characters, setCharacteres] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    // console.log(characterApi);

    setCharacteres(characterApi.results);
  };

  // console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Caracteres Caracteres={characters} />
        ) : (
          <>
            <img
              src={imagenRickMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
