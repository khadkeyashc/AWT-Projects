import { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieList from "../components/MovieList";
import SelectedMovies from "../components/SelectedMovies";

const Home = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const movies = useFetchMovies("action"); // Default search query

  const handleSelectMovie = (movie) => {
    if (!selectedMovies.some((m) => m.id === movie.id)) {
      setSelectedMovies([...selectedMovies, movie]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Recommendations</h1>
      <SelectedMovies selectedMovies={selectedMovies} />
      <MovieList movies={movies} onSelect={handleSelectMovie} />
    </div>
  );
};

export default Home;
