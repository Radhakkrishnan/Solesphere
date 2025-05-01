import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LogoutBtn from "../Components/LogoutBtn";
import ViewOrderHistoryBtn from "../Components/ViewOrderHistoryBtn";

export default function ProfilePage(){
    const [user,setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = localStorage.getItem("userInfo")
        if(storedUser){
            setUser(JSON.parse(storedUser))
            console.log(storedUser)
        }else{
            navigate("/login")
        }
    },[navigate])

    if (!user) return null

    const logout = () => {
        localStorage.removeItem("userInfo")
        localStorage.removeItem("token")
        localStorage.removeItem("cart")
        toast.success("Loggedout succesfully")
        navigate("/login")
        
    }
    return(
        <div className="min-h-screen pt-24 px-8 bg-[#e6e6e6]">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
                <div className="flex flex-col items-center text-center px-24">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{user.name}</h2>
                    <div className="mt-8 space-y-4 w-full text-left">
                        <div className="flex justify-between">
                            <span className="text-gray-500 font-medium">Email:</span>
                            <span className="text-gray-800">{user.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 font-medium">Phone:</span>
                            <span className="text-gray-800">{user.phone.trim() ? user.phone : "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 font-medium">Address:</span>
                            <span className="text-gray-800">{user.address.trim() ? user.address : "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                                <span className="text-gray-500 font-medium">Admin status:</span>
                                <span className={`text-sm px-2 py-1 rounded-full 
                                    ${user.isAdmin ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-600"}`}
                                >
                                    {user.isAdmin ? "Admin" : "User"}
                                </span>
                        </div>
                    </div>
                </div>
                
                <ViewOrderHistoryBtn/>
               <LogoutBtn logout = {logout}/>
            </div>
        </div>
    )
}