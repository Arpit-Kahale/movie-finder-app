import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie)
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
      >
        ⬅ Back
      </Link>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden md:flex">
        
        {/* Poster */}
        <div className="md:w-1/3">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>

          <p className="text-gray-400 mb-4">
            {movie.Year} • {movie.Genre}
          </p>

          <p className="mb-4 leading-relaxed">{movie.Plot}</p>

          <div className="space-y-2">
            <p><span className="font-semibold">🎭 Actors:</span> {movie.Actors}</p>
            <p><span className="font-semibold">🎬 Director:</span> {movie.Director}</p>
            <p><span className="font-semibold">🌍 Language:</span> {movie.Language}</p>
            <p><span className="font-semibold">⭐ IMDB:</span> {movie.imdbRating}</p>
          </div>

          {/* Extra Badge */}
          <div className="mt-6">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
              ⭐ {movie.imdbRating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;