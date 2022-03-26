import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 h-[80px] w-full bg-gray-700 text-gray-100 shadow-xl dark:bg-gray-700 dark:text-gray-100 sm:hidden">
        <div className="grid h-full grid-cols-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "flex h-full flex-col items-center justify-center border-r-2 border-gray-600",
                isActive ? "text-teal-200" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            <HomeIcon />
            Home
          </NavLink>
          <NavLink
            to="/watched"
            className={({ isActive }) =>
              [
                "flex h-full flex-col items-center justify-center border-r-2 border-gray-600",
                isActive ? "text-teal-200" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            <MovieIcon />
            Watched
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              [
                "flex h-full flex-col items-center justify-center",
                isActive ? "text-teal-200" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            <AddIcon />
            Add
          </NavLink>
        </div>
      </div>
    </>
  );
};
