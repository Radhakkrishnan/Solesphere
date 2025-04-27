import { useState, createContext, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext()

export default function CartProvider({children}){
    const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : []
    })

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const addToCart = (product) => {
        setCart((prevCart) => {
            //checking if product is already exists
            const existingProduct = prevCart.find((item) => item._id == product._id )
            if(existingProduct){
                //If product is already exists
                return prevCart.map((item) => 
                    item._id === product._id ? {...item, quantity: item.quantity + 1} : item
                )
            } else {
                //If product does not exist alrteady.
                return [...prevCart, {...product, quantity:1}]
            }
        })
        toast.success("Item added to cart!");
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id != id))
        toast.error("Item removed from cart");
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          //increasing quantity when + is clicked
          item._id == id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };

    const decreaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart
          .map((item) => {
            if (item._id == id) {
              if (item.quantity > 1) {
                //reducing quantity while clicking -
                return { ...item, quantity: item.quantity - 1 };
              } else {
                //if quantity 1 and clicked - , remove item
                return null;
              }
            }
            return item;
          })
          .filter(Boolean)
      );
    };

    const value = {
        cart,addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity
    }

    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}