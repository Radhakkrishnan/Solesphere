import { getUser } from "../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { UserCircleIcon } from "lucide-react"; 


export default function UserPage(){
    const [user, setUser] = useState({})
    const params = useParams()
    const id = params.id

    useEffect(() => {
        const loadUser = async() => {
            const response = await getUser(id)
            console.log(response.User)
            setUser(response.User)
        }
        loadUser()
    },[id])
    return(
        <div className="min-h-screen pt-24 px-8  bg-[#e6e6e6]">
           <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">   
                <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.5}}
                    className="flex flex-col items-center text-center"
                >
                     <UserCircleIcon className="w-20 h-20 text-gray-700 mb-6" />
                    
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">{user.name}</h2>
                        <p className="text-lg text-gray-600">{user.email}</p>
                        <div className="mt-8 space-y-4 w-full text-left">
                            <div className="flex justify-between">
                                <span className="text-gray-500 font-medium">Address:</span>
                                <span className="text-gray-800">{user.address?.trim() ? user.address : "N/A"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 font-medium">Phone:</span>
                                <span className="text-gray-800">{user.phone?.trim() ? user.phone : "N/A"}</span>
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
                </motion.div>
           </div>
        </div>
    )
}