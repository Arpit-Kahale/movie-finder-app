import axios from "axios";

const API_KEY = "2eeabaae";

export const searchMovies = async (query = "Avengers", type = "all") => {
  let typeParam = type !== "all" ? `&type=${type}` : "";

  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${typeParam}`
    );

    if (res.data.Response === "False") {
      return { Search: [] };
    }

    return res.data;
  } catch (error) {
    return { Search: [] };
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    return res.data;
  } catch {
    return null;
  }
};