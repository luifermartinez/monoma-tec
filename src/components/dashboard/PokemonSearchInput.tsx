import { FC, useRef } from "react";
interface Props {
  setSearch: (search: string) => void;
}

const PokemonSearchInput: FC<Props> = ({ setSearch }) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <input
        id="search"
        ref={inputRef}
        className="appearance-none bg-[#434459] border-none w-full text-white leading-tight focus:outline-none rounded-xl px-2 pt-5 pb-2 font-semibold"
        onFocus={() => {
          if (labelRef.current) {
            labelRef.current.classList.add(`-translate-y-[1.5rem]`);
            labelRef.current.classList.add(`text-xs`);
          }
        }}
        onBlur={(e) => {
          if (!labelRef.current) return;
          if (e.target.value !== "") return;
          labelRef.current.classList.remove(`-translate-y-[1.5rem]`);
          labelRef.current.classList.remove(`text-xs`);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(e.currentTarget.value);
          }
        }}
      />
      <label
        htmlFor="search"
        ref={labelRef}
        className="absolute left-0 transition-all duration-100 ease-out top-1/2 -translate-y-1/2 px-2 font-semibold text-gray-400"
      >
        BUSCAR POKEMON...
      </label>
      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 px-2 font-semibold text-gray-400"
        onClick={() => {
          if (!inputRef.current) return;
          setSearch(inputRef.current.value);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-current"
          viewBox="0 0 20 20"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="7.5" />
          <path d="M17 17l-4.35-4.35" />
        </svg>
      </button>
    </div>
  );
};

export default PokemonSearchInput;
