import React from "react";

export default function Caracteres(props) {
  const { Caracteres, setCharacteres } = props;
  // console.log(Caracteres);

  const resetCharacteres = () => {
    console.log("reseteando");

    setCharacteres(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacteres}>
        Volver al Inicio..
      </span>
      <div className="container-characters">
        {Caracteres.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">
                      <br />
                      Vivo
                    </span>
                  </>
                ) : (
                  <>
                    <span className="dead">
                      <br />
                      Muerto
                    </span>
                  </>
                )}
              </h6>
              <p>
                <br />
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacteres}>
        Volver a Inicio..
      </span>
    </div>
  );
}
