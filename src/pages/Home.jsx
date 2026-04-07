import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (q = "Avengers", type = "all") => {
    setLoading(true);
    const data = await searchMovies(q, type);
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">

      {/* 🔥 NAVBAR */}
      <div className="bg-gray-900 px-6 py-4 sticky top-0 z-50 shadow-md flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          🎬 CineSearch
        </h1>
      </div>

      {/* 🔥 SEARCH BAR */}
      <div className="bg-gray-900 px-6 py-4 sticky top-[64px] z-40 shadow">
        <SearchBar onSearch={fetchMovies} />
      </div>

      {/* 🔥 CONTENT */}
      <div className="p-6">

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg">Loading...</p>
        )}

        {/* No Movies */}
        {!loading && movies.length === 0 && (
          <p className="text-center mt-6 text-gray-400">
            No movies found 😢
          </p>
        )}

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loading &&
            movies.map((m) =>
              m?.imdbID ? (
                <MovieCard key={m.imdbID} movie={m} />
              ) : null
            )}
        </div>

      </div>
    </div>
  );
};

export default Home;