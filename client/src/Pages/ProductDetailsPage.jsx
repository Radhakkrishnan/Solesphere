import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getOneProduct, getProducts } from "../api"
import { motion } from "framer-motion"
import BackBtn from "../Components/BackBtn"
import AddToCartBtn from "../Components/AddToCartBtn"

const BASE_URL = import.meta.env.VITE_SERVER_URL

export default function ProductDetailsPage(){
    const [product, setProduct] = useState({})
    const [related, setRelated] = useState([])
    const Params = useParams()
    const id = Params.id

   

    useEffect(() => {
        const loadProduct = async() => {
            let response = await getOneProduct(id)
            setProduct(response.response)
            console.log(response.response)
            
        }
        loadProduct()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[id])

    useEffect(() => {
        const loadRelatedProducts = async() => {
            const response = await getProducts()
            let allProducts = response.allProducts
            const relatedProducts = allProducts.filter((item) => 
                item.category === product.category &&
                item._id !== product._id
            )
            console.log(relatedProducts)
            setRelated(relatedProducts)
        }
        if(product.category){
            loadRelatedProducts()
        }
    },[product])

    return(
        <div className="pt-24 px-8 min-h-screen bg-[#e6e6e6] relative">
            <div className="absolute top-14 left-2">
                <BackBtn/>
            </div>

            {/*Product Details Card*/}
            <motion.div
                initial = {{opcaity:0, y:30}}
                animate = {{opacity:1, y:0}}
                transition={{duration:0.5}}
                className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/*Product Image*/}
                <div className="md:w-1/2 bg-[#f9f9f9]">
                    <img
                        src={`${BASE_URL}${product.image}`}
                        alt={product.name}
                        className="w-full h-[416px] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                    />
                </div>

                {/*Product Details*/}
                <div className="md:w-1/2 p-8 flex flex-col gap-4 justify-between">
                    <div>
                        <div className="text-sm bg-[#1f1f1f] text-white inline-block px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                            # {product.tag}
                        </div>
                        <h1 className="text-3xl font-bold text-[#1d1d1f]">{product.name}</h1>
                        <p className="text-gray-600 text-sm mt-2">{product.brand}</p>
                        <p className="text-lg text-gray-800 mt-4">{product.description}</p>
                        <p className="text-[#1d1d1f] font-bold text-2xl mt-4">₹{product.price}</p>
                        <p className="text-sm text-gray-500 mt-1">Stock: {product.stock}</p>
                    </div>
                    <AddToCartBtn/>
                </div>
            </motion.div>

            {/*Related Products*/}
            <div className="mt-16 mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-6">Related Products</h2>
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {
                        related.map((item) => (
                            <Link 
                                to={`/product/${item._id}`}
                                key={item._id}
                                className="min-w-[220px] max-w-[220px] bg-white rounded-xl shadow-lg flex-shrink-0 hover:scale-[1.02] transition-transform"
                            >
                                <img
                                    src = {`${BASE_URL}${item.image}`}
                                    alt= {item.name}
                                    className="h-[200px] w-full object-cover rounded-t-xl"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">{item.tag}</p>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-[#1d1d1f] font-bold mt-1">₹{item.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}