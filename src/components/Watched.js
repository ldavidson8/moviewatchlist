import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="px-7 py-4">
      <div className="mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <h1 className="text-2xl">Watched Movies</h1>
          <span className="block rounded-full bg-teal-400 py-2 px-4 text-gray-100">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-5xl text-gray-400">
            No movies in your list
          </h2>
        )}
      </div>
    </div>
  );
};
