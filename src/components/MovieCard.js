import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <>
      <div className="group relative block w-full overflow-hidden rounded-md">
        <div className="absolute top-0 left-0 h-full w-full rounded-md border-2 border-transparent group-hover:border-teal-200 group-hover:bg-gray-700 group-hover:opacity-75 group-hover:transition-all group-hover:duration-300"></div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="block h-full w-full rounded-md"
          />
        ) : (
          <div className="mr-4 block h-full w-full rounded-md bg-gray-500"></div>
        )}
        <h2 className="absolute top-1/2 left-5 text-xl opacity-0 duration-200 group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-150">
          {movie.title}
        </h2>

        <MovieControls type={type} movie={movie} />
      </div>
    </>
  );
};
