import { pages } from "../pages";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Navbar() {
  const  { cart } = useContext(CartContext)
  const cartItemCount = cart.reduce((total,item) => total + item.quantity, 0)

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center items-center">
        <div className="text-xl font-semi-bold text-gray-900 mx-6 tracking-wide fade-in-down">
          <h2>Solesphere</h2>
        </div>

        <ul className="flex gap-8 items-center">
          {pages.map((page,index) => (
            <li key={index} className="fade-in-down relative group transition duration-500 ease-in-out text-gray-800 font-light text-md hover:scale-110 hover:-translate-y-1 hover:text-black">
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}

          <li className="font-light relative group text-md fade-in-down transition duration-500 ease-in-out text-gray-800 font-light text-md hover:scale-110 hover:-translate-y-1 hover:text-black">
            <Link to="/cart" >Cart</Link>
            {
              cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cartItemCount}</span>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}
