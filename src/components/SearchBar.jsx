import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
      <input
        className="px-4 py-2 rounded text-black w-full md:w-1/2"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="px-4 py-2 rounded text-black"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>

      <button
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white"
        onClick={() => onSearch(query, type)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;