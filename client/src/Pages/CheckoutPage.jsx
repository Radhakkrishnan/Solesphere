import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function CheckoutPage(){
    const { clearCart } = useContext(CartContext)

    const handleOrder = () => {
        clearCart()
        window.location.href = "/orderconfirmation"
    }
    return(
        <div className="pt-24 px-8 min-h-screen bg-[#e6e6e6]">
            <div className="flex flex-col items-center max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
            <p>This is a dummy Checkout Page. No real payment! 😄</p>
            <button
                onClick={() => handleOrder()}
                className="py-2 px-4 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Place Order
            </button>
            </div>
        </div>
    )
}