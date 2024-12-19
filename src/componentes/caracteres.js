import React from "react";

export default function Caracteres(props) {
  const { Caracteres } = props;
  // console.log(Caracteres);

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Volver al Inicio</span>
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
                    <span className="alive">Vivo</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Muerto</span>
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
