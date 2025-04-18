import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { motion } from "framer-motion";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const loadAllProducts = async () => {
      let response = await getProducts();
      console.log(response.allProducts);
      setProducts(response.allProducts);
    };
    loadAllProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="pt-28 px-8 bg-gray ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  bg-[#f9f9f9] ">
        {currentProducts.map((product) => {
          return (
            <motion.div
              key={product._id}
              inital={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
            >
              <div className="relative">
                <img
                  src={`${BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-xs p-1 rounded">
                  # {product.tag}
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-lg font-semibold text-[#1d1d1f]">
                  ₹{product.price}
                </p>
                <p className="text-sm text-gray-400">Stock: {product.stock}</p>
                <button className="mt-4 py-2 px-4 bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === i + 1
                ? "bg-[#1d1d1f] text-white"
                : "bg-gray-200 text-gray-800"
            } hover:scale-105 transition-transform`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
