import { useState, useCallback, useEffect } from "react";
import { PokemonResponse, getPokemon } from "../api";
import Swal from "sweetalert2";

const useGetPokemonDetails = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPokemonDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getPokemon(name);
      setPokemon(response);
    } catch (error) {
      console.log(
        "🚀 ~ file: useGetPokemonDetails.tsx:15 ~ getPokemonDetails ~ error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);

  return {
    pokemon,
    loading,
  };
};

export default useGetPokemonDetails;
