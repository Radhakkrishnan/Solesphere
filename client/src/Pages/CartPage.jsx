import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import RemoveBtn from "../Components/RemoveBtn"
import CheckoutBtn from "../Components/CheckoutBtn"

const BASE_URL = import.meta.env.VITE_SERVER_URL

export default function CartPage(){
    const{ cart, decreaseQuantity, increaseQuantity } = useContext(CartContext)
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) 

    if(cart.length == 0){
        return(
            <div className="flex flex-col min-h-screen justify-center items-center">
                <h2 className="text-2xl font-semibold mb-4">Your cart is Empty!</h2>
                <Link
                    to="/shop"
                    className="bg-[#1d1d1f] text-white px-6 py-2 rounded-lg hover:bg-[#333]"
                >
                    Go shopping
                </Link>
            </div>
        )
    }

    return(
        <div className="min-h-screen pt-24 px-8 bg-[#e6e6e6]">
           <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
            <div className="flex flex-col gap-6">
                {cart.map((item) => (
                    <motion.div
                        key={item._id}
                        initial = {{opacity:0, y:30}}
                        animate = {{opacity:1, y:0}}
                        transition = {{duration:0.5}}
                        className="flex gap-4 items-center bg-[#f9f9f9] p-4 rounded-xl shadow-md"
                    >
                        <img
                            src = {`${BASE_URL}${item.image}`}
                            alt = {item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-600 text-sm">{item.brand}</p>
                            <p className="font-bold mt-2">₹{item.price}</p>

                            {/*Quantity Control*/}
                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() => decreaseQuantity(item._id)}
                                    className="px-2 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                                >
                                    -
                                </button>

                                <span className="px-4">{item.quantity}</span>

                                <button
                                    onClick={()=> increaseQuantity(item._id)}
                                    className="px-2 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <RemoveBtn id={item._id}/>
                    </motion.div>
                ))}
            </div>
            {/*Total and Proceed button*/}
            <div className="mt-10 border-t pt-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Total:</h2>
                    <p className="text-2xl font-semibold text-[#1d1d1f]">₹{totalPrice}</p>
                </div>
                <CheckoutBtn/>
            </div>
           </div>
        </div>
    )
}