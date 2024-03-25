import c from "classnames";
import { useTheme } from "contexts/use-theme";
//ambos hooks: usePokemon y usePokemon list vienen de acá: "hooks"
import { usePokemon, usePokemonList, useTextTransition } from "hooks";
import { useState } from "react";
import { randomMode } from "utils/random";
import { Button } from "./button";
import { LedDisplay } from "./led-display";
import TipoDePokemon from "../components/tipoDePokemon";

import "./pokedex.css";
import { Pokemon } from "models";

export function Pokedex() {
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();
  //pokeomList viene de aqui: de este hook: usePokemonList()
  const { pokemonList } = usePokemonList();
  const [i, setI] = useState(0);
  //el selected Pokemon viene de aqui: nombre de la variable: pokemon. viene del use state usePokemon que pasa el parametro pokemonList[i]
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]);
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]);

  //Estado para almacenar el pokemon seleccionado al equipo:
  const [team, setTeam] = useState<Pokemon[]>([]);

  //Función para agregar uno al equipo
  const addToTeam = () => {
    if (selectedPokemon && team.length < 6 ) {
      setTeam([...team, selectedPokemon]);
    } else {alert("Has llegado al límite. Elimina un Pokemon para añadir uno nuevo a tu equipo.")}
  };
  //Función para eliminar uno del equipo:
  const removeFromTeam = (index: number) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  }

  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };

  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <div className="panel left-panel">
        <div className="screen main-screen">
          {selectedPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
          )}
        </div>
        <div className="screen name-display">
          <div
            className={c(
              "name",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
          >
            {/* //this displays the name of the pokemon */}
            {selectedPokemon?.name}
          </div>
          {/* boton agregar al equipo */}
          <div>
            <button className="addToTeam plusMinus" onClick={addToTeam}>
              +
            </button>
          </div>
        </div>
        {selectedPokemon && <TipoDePokemon selectedPokemon={selectedPokemon} />}
      </div>
      <div className="panel right-panel">
        <div className="controls leds">
          <LedDisplay color="blue" />
          <LedDisplay color="red" />
          <LedDisplay color="yellow" />
        </div>
        <div className="screen second-screen">
          {nextPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={nextPokemon.sprites.front_default}
              alt={nextPokemon.name}
            />
          )}
        </div>
        <div className="controls">
          <Button label="prev" onClick={prev} />
          <Button label="next" onClick={next} />
        </div>
      </div>
      {/* el equipo */}
      <div className="team">
        <h2>Mi Equipo</h2>
        {team.map((pokemon, index) => (
          <div key={index} className="team-member">
            <button className="plusMinus" onClick={() => removeFromTeam(index)}>
              -
            </button>
            <span>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

