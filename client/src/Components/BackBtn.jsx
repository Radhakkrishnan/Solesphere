import { useNavigate } from "react-router-dom";


export default function BackBtn(){
    const navigate = useNavigate()
    return(
        <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#2C2C2E] to-[#3A3A3C] text-[#F5F5F7] font-semibold shadow-sm hover:shadow-md hover:opacity-95 transition-transform transform hover:scale-105 duration-200"
        >
            Back
        </button>
    )
}