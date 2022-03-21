import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisable = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisable = storedMovieWatched ? true : false;

  return (
    <div>
      <div className="mt-5 flex">
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="mr-4 block aspect-auto w-24 rounded-md bg-gray-400 text-transparent"
            />
          ) : (
            <div className="mr-4 block h-28 w-20 rounded-md bg-gray-400 text-transparent"></div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div className="header">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {movie.title}
            </h3>
            <h4 className="text-xl text-gray-500 dark:text-gray-400">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
          </div>
          <div className="controls">
            <button
              className="mr-2 rounded-md bg-teal-400 px-2 py-2 text-gray-700 disabled:cursor-default disabled:opacity-50"
              onClick={() => addMovieToWatchlist(movie)}
              disabled={watchlistDisable}
            >
              Add to Watchlist
            </button>
            <button
              className="disabled:opaci rounded-md bg-teal-400 px-2 py-2 text-gray-700 disabled:cursor-default disabled:opacity-50"
              onClick={() => addMovieToWatched(movie)}
              disabled={watchedDisable}
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
