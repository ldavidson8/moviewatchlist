import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="w-full rounded-md overflow-hidden relative block group">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-teal-200 rounded-md"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="w-full block rounded-md"
        />
      ) : (
        <div className="w-16 h-28 bg-gray-400 mr-4 rounded-md block text-transparent"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
