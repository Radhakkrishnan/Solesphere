import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function RemoveBtn({id}){
    const { removeFromCart } = useContext(CartContext)
    return(
        <button
            onClick={() => removeFromCart(id)}
            className="text-red-500 hover:text-red-700 text-sm font-semibold"
        >
            Remove
        </button>
    )
}