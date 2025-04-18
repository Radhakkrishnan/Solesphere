import { pages } from "../pages";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <div className="text-xl font-light text-gray-900 mx-6 tracking-wide fade-in-down">
          <h2>Solesphere</h2>
        </div>
        <ul className="flex gap-8">
          {pages.map((page) => {
            return (
              <li className="fade-in-down relative group transition duration-500 ease-in-out text-gray-800 font-light text-md hover:scale-110 hover:-translate-y-1 hover:text-black">
                <Link to={page.path}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
