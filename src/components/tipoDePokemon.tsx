import { debilidades } from "debilidades";
import "./tiposDePokemon.css"

interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
}

type Props = {
  selectedPokemon: Pokemon | null;
};

function TipoDePokemon({ selectedPokemon }: Props) {

  const selectedPokemonTypes: string[] =
    selectedPokemon?.types.map((type) => type.type.name) || [];

  const getWeaknesses = (type: string): string[] => {
    return debilidades[type]?.weaknesses || [];
  };

  return (
    <div className="typeOfPokemon">
      <div className="grid">
        <div className="col1">
          <h3 className="heading">Tipos:</h3>
          {/* //Segundo intento: TYPES*/}
          <div className="tipos fila2">
            <>
              {selectedPokemonTypes.map((type, index) => (
                <h3 key={index}>{type}</h3>
              ))}
            </>
          </div>
        </div>
        <div className="col2">
          <h3 className="heading">Debilidades:</h3>
          {/* //Segundo intento: DEBILIDADES*/}
          <div className="lista fila2">
            <ul className="debilidades">
              {selectedPokemonTypes.map((type) => (
                <>
                  {getWeaknesses(type).map((weakness, index) => (
                    <li className="items" key={index}>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipoDePokemon;


