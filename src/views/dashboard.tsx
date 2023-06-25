import { Helmet } from "react-helmet";
import DashboardWrapper from "../components/dashboard/DashboardWrapper";
import PokemonSearchInput from "../components/dashboard/PokemonSearchInput";
import PokemonList from "../components/dashboard/PokemonsList";
import useGetPaginatedPokemons from "../hooks/useGetPaginatedPokemons";
import DashboardBanner from "../components/dashboard/DashboardBanner";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { page, setPage, limit, setLimit, pokemons, loading, total } =
    useGetPaginatedPokemons();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <Helmet>
        <title>Monoma | Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <DashboardBanner />
      <DashboardWrapper>
        <PokemonSearchInput
          setSearch={(search) => console.log("search", search)}
        />
        <span className="text-gray-400 text-center text-sm">
          Haz click en un pokemon para ver más información sobre el mismo
        </span>
        {!loading ? (
          pokemons.length > 0 ? (
            <PokemonList pokemons={pokemons} />
          ) : (
            <span className="text-white text-center">
              No hay pokemons para mostrar
            </span>
          )
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-3">
            <Spinner size="large" />
            <span className="text-white">Cargando pokemons...</span>
          </div>
        )}
        <Pagination
          page={page}
          limit={limit}
          setPage={setPage}
          total={total}
          setLimit={setLimit}
        />
      </DashboardWrapper>
    </motion.div>
  );
};

export default Dashboard;
