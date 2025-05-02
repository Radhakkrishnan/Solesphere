import { useState, useEffect } from "react"
import { getUsers } from "../Services/api"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { UserCircleIcon } from "lucide-react"; 


export default function AdminPage(){
    const [users, setUsers] = useState([ ])

    useEffect(() => {
        const loadAllUsers = async() => {
            const response = await getUsers()
            console.log(response.users)
            setUsers(response.users)
        }
        loadAllUsers()
    },[])
    return(
        <div className="min-h-screen pt-24 px-6 bg-[#e6e6e6]">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">User-Management</h2>
                <div className="flex flex-col gap-6">
                    {
                        users.map((user) => (
                            <motion.div
                                key={user._id}
                                initial ={{opacity:0, y:20}}
                                animate={{opacity:1, y:0}}
                                transition={{duration:0.4}}
                                className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl hover:shadow-lg transition"
                            >
                                 <UserCircleIcon className="w-10 h-10 text-gray-600" />
                                <div className="flex-1">
                                   <Link to={`/getUser/${user._id}`} className="text-lg font-semibold text-gray-700 hover:text-black">
                                        {user.name}
                                   </Link>
                                </div>

                                <div>
                                    {user.isAdmin ? (
                                        <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                            Admin
                                        </span>
                                    ) : (
                                        <span className="text-xs font-medium px-2 py-1 bg-gray-200 text-gray-600 rounded-full">
                                            User
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}