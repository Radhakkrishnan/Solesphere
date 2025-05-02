import { useEffect, useState } from "react";
import { getProducts } from "../Services/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import AddToCartBtn from "../Components/AddToCartBtn";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all")

  const productsPerPage = 6;

  useEffect(() => {
    const loadAllProducts = async () => {
      let response = await getProducts();
      setProducts(response.allProducts);
    };
    loadAllProducts();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  

  const filteredProducts = products.filter((product) =>{
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesCategory && matchesSearch
  })

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentFilteredProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="pt-24 px-8 bg-[#e6e6e6] min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
        {currentFilteredProducts.map((product) => {
          return (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#f5f5f7] rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
            >
              <Link to={`/product/${product._id}`}>
              <div className="relative">
                <img
                  src={`${BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#e6e6e6] text-black text-xs px-2 py-1 rounded-lg">
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
                <AddToCartBtn product={product}/>
              </div>
              </Link>
            </motion.div>
          );
        })}
        {currentFilteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-xl py-16">
            No products found.
          </div>
        )}
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
