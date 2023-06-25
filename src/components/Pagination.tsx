import { FC, useMemo } from "react";

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

const Pagination: FC<Props> = ({ page, limit, setPage, total, setLimit }) => {
  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < total / limit) {
      setPage(page + 1);
    }
  };

  const paginationRange = useMemo(() => {
    // max 5 pages
    const maxPages = 5;
    const halfPages = Math.floor(maxPages / 2);
    const start = Math.max(page - halfPages, 0);
    const end = Math.min(start + maxPages, total / limit);

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [page, limit, total]);

  return (
    <nav className="mx-auto">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={handlePrevious}
            className="px-3 py-2 ml-0 leading-tight bg-slate-800 bg-opacity-50 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-tl-md rounded-bl-md"
          >
            {"<"}
          </button>
        </li>
        {paginationRange.map((p) => (
          <li key={p}>
            <button
              className={`px-3 py-2 leading-tight ${
                p === page
                  ? "text-white bg-slate-900 border border-slate-700"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              } 
              hover:bg-slate-700 hover:text-white bg-opacity-50`}
              onClick={() => setPage(p)}
            >
              {p + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNext}
            className="px-3 py-2 leading-tight bg-slate-800 bg-opacity-50 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-tr-md rounded-br-md"
          >
            {">"}
          </button>
        </li>
      </ul>
      <select
        className="bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-md ml-2 h-full px-2 bg-opacity-50"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </nav>
  );
};

export default Pagination;
