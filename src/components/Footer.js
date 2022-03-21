import GitHub from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="bg-gray-800 py-12 text-gray-100">
        <div className="mx-auto flex max-w-screen-xl justify-between">
          <span>
            All rights go to the rightful owners - no copyright infringement
            intended.
          </span>
          <div>
            <a
              href="/"
              className="flex items-center gap-2 transition-all duration-200 hover:text-teal-100"
            >
              <GitHub />
              View code on Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
