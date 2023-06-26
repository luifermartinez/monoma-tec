import { FC } from "react";
import { Pokemon, PokemonResponse } from "../../api";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  pokemon?: Pokemon;
  data?: PokemonResponse;
  close: () => void;
}

const PokemonModal: FC<Props> = ({ pokemon, data, close }) => {
  return (
    <AnimatePresence>
      {data && pokemon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-pokemon"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-slate-950 bg-opacity-75 transition-opacity">
            <span
              className="sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-slate-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <img
                        src={data?.sprites.front_default}
                        alt={pokemon?.name}
                        height={240}
                        className="h-60 w-full object-contain"
                      />
                    </div>

                    <div className="mt-2">
                      <span className="capitalize text-white text-lg font-bold">
                        {pokemon?.name}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-col gap-y-3">
                      <span className="capitalize font-semibold text-sm">
                        Tipo
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {data.types.map((type) => (
                          <span
                            key={type.type.name}
                            className="text-xs capitalize hover:underline text-sky-200 cursor-pointer"
                          >
                            {type.type.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-col gap-y-3">
                      <span className="capitalize font-semibold text-sm">
                        Peso
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {data ? `${(data?.weight / 10).toFixed(1)}kg` : "Peso"}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-col gap-y-3">
                      <span className="capitalize font-semibold text-sm">
                        Habilidades
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {data.moves.map((move) => (
                          <span
                            key={move.move.name}
                            className="text-xs capitalize hover:underline text-sky-200 cursor-pointer"
                          >
                            {move.move.name.replace(/-/g, " ")}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white"
                  onClick={close}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PokemonModal;
