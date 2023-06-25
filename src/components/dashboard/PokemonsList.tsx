import { Pokemon, PokemonResponse } from "../../api";
import { FC, useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

interface Props {
  pokemons: Pokemon[];
}

const PokemonList: FC<Props> = ({ pokemons }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [data, setData] = useState<PokemonResponse>();

  const onClickPokemon = (pokemon: Pokemon, data: PokemonResponse) => {
    setPokemon(pokemon);
    setData(data);
  };

  const close = () => {
    setPokemon(undefined);
    setData(undefined);
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          onClickPokemon={onClickPokemon}
        />
      ))}
      <PokemonModal pokemon={pokemon} data={data} close={close} />
    </div>
  );
};

export default PokemonList;
