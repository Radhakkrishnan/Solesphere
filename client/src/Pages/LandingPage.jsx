import ShopNowBtn from "../Components/ShopNowBtn";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 bg-[#e6e6e6] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            Welcome to <span>Solesphere</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
            Discover sleek and modern products that suit your lifestyle. Built
            with precision, just like we did this site.
          </p>
          <ShopNowBtn />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/images/Hero2.jpg"
            alt="Hero img"
            className="w-full h-auto aspect-[3/2] object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
