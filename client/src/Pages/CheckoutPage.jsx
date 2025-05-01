import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { placeOrder } from "../api";
import toast from "react-hot-toast";

export default function CheckoutPage(){
    const { cart, clearCart } = useContext(CartContext)

    const handleOrder = async () => {
        const token = localStorage.getItem("token")
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const userId = userInfo?._id

        const orderItems = cart.map((item) => (
            {
                product: item._id,
                name: item.name || "Unnamed Product",
                number: Number(item.quantity) || 1,
                price: Number(item.price) || 0
            }
        ))
        const orderData = {
            user: userId,
            orderItems,
            totalAmount: orderItems.reduce((total,item) => total + Number(item.price) * Number(item.number), 0)
        }

        try{
            console.log("Final orderData before placing:", orderData);

            await placeOrder(orderData, token)
            toast.success("Order placed successfully")
            clearCart()
            window.location.href = "/orderconfirmation"
        }
        catch(err){
            toast.error("Failed to place order")
        }
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