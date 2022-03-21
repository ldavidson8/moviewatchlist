import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Clear from "@mui/icons-material/Clear";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="absolute bottom-5 left-1/2 inline -translate-x-1/2 rounded-md bg-gray-700 bg-opacity-80 p-1 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100">
      {type === "watchlist" && (
        <>
          <button
            className="cursor-pointer p-1 text-xl text-gray-200 transition-all duration-300 ease-in hover:text-teal-400"
            onClick={() => addMovieToWatched(movie)}
          >
            <VisibilityIcon />
          </button>
          <button
            className="cursor-pointer p-1 text-xl text-gray-200 transition-all duration-300 ease-in hover:text-teal-400"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <Clear />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="cursor-pointer p-1 text-xl text-gray-200 transition-all duration-300 ease-in hover:text-teal-400"
            onClick={() => moveToWatchlist(movie)}
          >
            <VisibilityOffIcon />
          </button>
          <button
            className="cursor-pointer p-1 text-xl text-gray-200 transition-all duration-300 ease-in hover:text-teal-400"
            onClick={() => removeFromWatched(movie.id)}
          >
            <Clear />
          </button>
        </>
      )}
    </div>
  );
};
