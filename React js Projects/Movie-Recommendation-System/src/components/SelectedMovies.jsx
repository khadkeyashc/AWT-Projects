const SelectedMovies = ({ selectedMovies }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Selected Movies</h2>
        {selectedMovies.length === 0 ? (
          <p>No movies selected.</p>
        ) : (
          <ul className="list-disc pl-5">
            {selectedMovies.map((movie) => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SelectedMovies;
  