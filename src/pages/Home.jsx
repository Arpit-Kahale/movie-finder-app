import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("Avengers");
  const [type, setType] = useState("all");

  const fetchMovies = async (q = query, t = type, p = page) => {
    setLoading(true);
    const data = await searchMovies(q, t, p);
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleSearch = (q, t) => {
    setQuery(q);
    setType(t);
    setPage(1);
    fetchMovies(q, t, 1);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">

      {/* NAVBAR */}
      <div className="bg-gray-900 px-6 py-4 sticky top-0 z-50 shadow-md flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">🎬 CineSearch</h1>
      </div>

      {/* SEARCH */}
      <div className="px-6 py-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">

        {loading && <p className="text-center">Loading...</p>}

        {!loading && movies.length === 0 && (
          <p className="text-center text-gray-400">No movies found 😢</p>
        )}

        {/* MOVIE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loading &&
            movies.map((m) =>
              m?.imdbID ? (
                <MovieCard key={m.imdbID} movie={m} />
              ) : null
            )}
        </div>

        {/* 🔥 PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-8">

          {/* Prev */}
          <button
            className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            ⬅ Prev
          </button>

          <span className="font-bold">Page {page}</span>

          {/* Next */}
          <button
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
            onClick={() => setPage((p) => p + 1)}
          >
            Next ➡
          </button>

        </div>

      </div>
    </div>
  );
};

export default Home;