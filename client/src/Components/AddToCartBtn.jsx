import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


export default function AddToCartBtn({product}) {
  const { addToCart } = useContext(CartContext)
  return (
    <button 
    onClick={(e) => {
      e.preventDefault()
      addToCart(product)
    }}
    className="mt-4 py-2 px-4 bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white rounded-xl transition-all from-[#1d1d1f] to-[#434343] text-white hover:scale-[1.02]">
      Add to Cart
    </button>
  );
}