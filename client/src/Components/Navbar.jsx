import { pages } from "../pages";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Navbar() {
  const  { cart } = useContext(CartContext)
  const cartItemCount = cart.reduce((total,item) => total + item.quantity, 0)

  return (
    <nav className="backdrop-blur-md bg-white/50 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center items-center">
        <div className="text-2xl font-semi-bold text-gray-900 mx-6 tracking-wide fade-in-down">
          <h2>Solesphere</h2>
        </div>

        <ul className="flex gap-8 items-center">
          {pages.map((page,index) => (
            <li key={index} className="fade-in-down relative group transition-all duration-300 ease-in-out text-gray-700 font-light text-sm md:text-base hover:scale-110 hover:-translate-y-1 hover:text-black">
              <Link 
              to={page.path}
              className="hover:text-black after:block after:h-[0.5px] after:bg-gray-700 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >{page.name}</Link>
            </li>
          ))}

          <li className="font-light relative group text-md fade-in-down transition duration-500 ease-in-out text-gray-800 font-light text-md hover:scale-110 hover:-translate-y-1 hover:text-black">
            <Link 
            to="/cart"
            className="hover:text-black after:block after:h-[0.5px] after:bg-gray-700 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >Cart</Link>
            {
              cartItemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 animate-bounce"
                >
                  {cartItemCount}
                </span>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}
