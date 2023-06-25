import { Pokemon, PokemonResponse } from "../../api";
import { FC } from "react";
import useGetPokemonDetails from "../../hooks/useGetPokemonDetails";

interface Props {
  pokemon: Pokemon;
  onClickPokemon: (pokemon: Pokemon, data: PokemonResponse) => void;
}

const PokemonCard: FC<Props> = ({ pokemon, onClickPokemon }) => {
  const { pokemon: data } = useGetPokemonDetails(pokemon.name);

  return (
    <article
      key={pokemon.name}
      className="flex flex-col bg-slate-700 bg-opacity-30 rounded-xl cursor-pointer hover:bg-opacity-80 transition duration-100 ease-in-out overflow-hidden"
      onClick={() => {
        data && onClickPokemon(pokemon, data);
      }}
    >
      <div className="relative bg-white bg-opacity-10">
        <img
          src={data?.sprites.front_default}
          alt={pokemon.name}
          height={128}
          className="h-32 w-full object-contain"
        />

        <div className="flex justify-end p-2 items-center">
          <span className="text-sm font-semibold bg-sky-600 px-2 rounded-full">
            {data ? `${(data?.weight / 10).toFixed(1)}kg` : "Peso"}
          </span>
        </div>
      </div>
      <div className="p-3">
        <span className="capitalize font-semibold">{pokemon.name}</span>
      </div>
      <div className="mt-2 p-3">
        {data && (
          <div className="flex flex-wrap gap-2">
            {data.moves.slice(0, 2).map((move) => (
              <span
                key={move.move.name}
                className="text-xs capitalize hover:underline text-sky-200"
              >
                #{move.move.name.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PokemonCard;
