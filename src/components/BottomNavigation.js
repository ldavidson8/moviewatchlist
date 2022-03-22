import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 h-[80px] w-full bg-gray-700 shadow-xl sm:hidden">
        <div className="grid h-full grid-cols-3">
          <Link
            to="/"
            className="flex h-full flex-col items-center justify-center border-r-2 border-gray-600"
          >
            <HomeIcon />
            Home
          </Link>
          <Link
            to="/watched"
            className="flex h-full flex-col items-center justify-center border-r-2 border-gray-600"
          >
            <MovieIcon />
            Watched
          </Link>
          <Link
            to="/add"
            className="flex h-full flex-col items-center justify-center border-gray-600"
          >
            <AddIcon />
            Add
          </Link>
        </div>
      </div>
    </>
  );
};
