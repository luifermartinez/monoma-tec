import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Pokemon, PokemonResponse } from "../../api";
import useGetPokemonDetails from "../../hooks/useGetPokemonDetails";
import Spinner from "../Spinner";

interface Props {
  pokemon: Pokemon;
  onClickPokemon: (pokemon: Pokemon, data: PokemonResponse) => void;
}

const PokemonCard: FC<Props> = ({ pokemon, onClickPokemon }) => {
  const { pokemon: data } = useGetPokemonDetails(pokemon.name);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article
      key={pokemon.name}
      className="flex flex-col bg-slate-700 bg-opacity-30 rounded-xl cursor-pointer hover:bg-opacity-80 transition duration-100 ease-in-out overflow-hidden"
      onClick={() => {
        data && onClickPokemon(pokemon, data);
      }}
    >
      <div className="relative bg-white bg-opacity-10 w-full flex flex-col items-center">
        <div
          className={`flex items-center justify-center w-full text-center ${
            !isLoaded && "animate-spin h-32 w-32"
          }`}
        >
          <LazyLoadImage
            placeholderSrc="/img/pokeball.svg"
            src={data?.sprites.front_default}
            alt={pokemon.name}
            placeholder={<Spinner />}
            afterLoad={() => setIsLoaded(true)}
            height={!isLoaded ? 64 : 128}
            width={!isLoaded ? 64 : 128}
            className={"h-32 w-full object-contain flex justify-center"}
          />
        </div>

        <div className="flex justify-end p-2 items-center w-full">
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
