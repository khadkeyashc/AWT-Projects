import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const API_URL = `https://api.tvmaze.com/search/shows?q=${query}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.map(item => item.show));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [query]);

  return movies;
};

export default useFetchMovies;
