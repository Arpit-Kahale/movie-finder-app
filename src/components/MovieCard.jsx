import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // Safety check
  if (!movie || !movie.imdbID) return null;

  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
      
      {/*  Poster Fix */}
      <img
        src={
          movie?.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x400?text=No+Image"
        }
        alt={movie?.Title}
        className="w-full h-[400px] object-cover"
      />

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">
          {movie?.Title || "No Title"}
        </h3>

        <p className="text-gray-400">
          {movie?.Year || "N/A"}
        </p>

        {/* Button */}
        <Link to={`/movie/${movie.imdbID}`}>
          <button className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;