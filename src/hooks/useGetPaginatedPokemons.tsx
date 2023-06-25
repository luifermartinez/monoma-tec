import { useState, useCallback, useEffect } from "react";
import { Pokemon, getPokemons } from "../api";
import Swal from "sweetalert2";

const useGetPaginatedPokemons = () => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getPokemons({ page, limit });
      setPokemons(response.results);
      setTotal(response.count);
    } catch (error) {
      console.log(
        "🚀 ~ file: useGetPaginatedPokemons.tsx:18 ~ fetchPokemons ~ error:",
        error
      );
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error al obtener los pokemons.",
        background: "#1f2937",
        color: "#fff",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return {
    page,
    setPage,
    limit,
    setLimit,
    total,
    pokemons,
    loading,
  };
};

export default useGetPaginatedPokemons;
