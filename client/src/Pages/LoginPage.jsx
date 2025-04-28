import { loginUser } from "../api"
import { useState, useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom'
import toast from "react-hot-toast"



export default function LoginPage(){
    const navigate = useNavigate()
    const [user, setUser] = useState(
        {
            email : '',
            password : " "
        }
    )
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
   
    const handleLogin = async(e) => {
        e.preventDefault()
        try{
            const data = await loginUser(user)
            localStorage.setItem("userInfo", JSON.stringify(data.User))
            toast.success("Login succesful")
            navigate("/")
        } catch(err){
           console.log(err)
           toast.error("Login Failed")
        }
    }
    return(
        <div className="min-h-screen pt-24 px-8 flex items-center justify-center  bg-[#e6e6e6]">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Log-in</h2>

                <input
                    name='email'
                    type="email"
                    placeholder="abc@examplemail.com"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    required
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="mb-6 w-full p-3  border-b"
                    required
                />

                <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white rounded-xl transition-all from-[#1d1d1f] to-[#434343] text-white hover:scale-[1.02]"
                >
                    Login
                </button>

               <div className="flex justify-center">
               <Link to="/register">Register</Link>
               </div>
            </form>
        </div>
    )
}