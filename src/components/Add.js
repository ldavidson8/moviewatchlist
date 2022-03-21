import { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setsearchQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="mx-auto max-w-[600px] p-12">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for a movie"
              className="w-full rounded-md border-none bg-bluishcyan-200 p-2 text-xl text-gray-100 dark:bg-gray-600 dark:text-gray-100"
              value={searchQuery}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="mt-5">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
