import { Pokemon, PokemonResponse, getPokemon } from "../../api";
import { FC, useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";
import PokemonSearchInput from "./PokemonSearchInput";
import Swal from "sweetalert2";

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

  const handleSearch = async (search: string) => {
    try {
      const data = await getPokemon(search.toLowerCase());
      setData(data);
      setPokemon({
        name: data.name,
        url: data.sprites.front_default,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se encontró el pokemon",
        timer: 1500,
        background: "#1f2937",
        color: "#fff",
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <PokemonSearchInput setSearch={handleSearch} />
      <span className="text-gray-400 text-center text-sm">
        Haz click en un pokemon para ver más información sobre el mismo
      </span>
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
    </>
  );
};

export default PokemonList;
