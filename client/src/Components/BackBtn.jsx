import { useNavigate } from "react-router-dom";


export default function BackBtn(){
    const navigate = useNavigate()
    return(
        <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white font-medium shadow-md hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
            Back
        </button>
    )
}