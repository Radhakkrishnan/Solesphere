import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
        toast.success("Loggedout succesfully")
        
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center pt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-6">Profile</h2>
                <p className="mb-4"><strong>Name:</strong> {user.name}</p>
                <p className="mb-4"><strong>Email:</strong> {user.email}</p>
                <p className="mb-4"><strong>Phone:</strong> {user.phone.trim() ? user.phone : "N/A"}</p>
                <p className="mb-4"><strong>Address:</strong> {user.address.trim() ? user.address : "N/A"}</p>
                <p className="mb-4"><strong>Admin:</strong> {user.isAdmin ? "Yes" : "No"}</p>

               <button
                onClick={logout}
                className="mt-6 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
               >
                    Logout
               </button>
            </div>
        </div>
    )
}