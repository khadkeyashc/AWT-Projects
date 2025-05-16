const MovieList = ({ movies, onSelect }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4 rounded shadow-lg">
            <img src={movie.image?.medium || "https://via.placeholder.com/150"} alt={movie.name} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 text-lg font-bold">{movie.name}</h3>
            <button
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
              onClick={() => onSelect(movie)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;
  