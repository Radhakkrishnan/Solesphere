import { useNavigate } from "react-router-dom"

export default function ShopNowBtn(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/shop")
    }
    return(
        <button 
        className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        onClick={handleClick}
        >
            Shop Now
        </button>
    )
}