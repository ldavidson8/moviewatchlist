import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const Navbar = () => {
  return (
    <header className="relative top-0 left-0 right-0 w-full bg-gray-800 text-gray-100">
      <div className="mx-auto flex h-[75px] max-w-screen-xl items-center">
        <div className="flex w-full justify-between">
          <div className="w-1/4 text-2xl">
            <Link to="/">
              <PlayCircleOutlineIcon />
              WatchList
            </Link>
          </div>
          <ul className="flex w-1/2 items-center justify-between">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link
                to="/add"
                className="rounded-md bg-teal-400 py-3 px-8 text-lg hover:bg-teal-200"
              >
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
