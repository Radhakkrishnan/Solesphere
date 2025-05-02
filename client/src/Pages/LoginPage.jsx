import { loginUser } from "../Services/api"
import { useState, useEffect, useRef } from "react"
import {Link, useNavigate} from 'react-router-dom'
import toast from "react-hot-toast"
import LoginBtn from "../Components/LoginBtn"



export default function LoginPage(){
    const navigate = useNavigate()
    const [user, setUser] = useState(
        {
            email : '',
            password : " "
        }
    )
    const toastShown = useRef(false)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token && !toastShown.current){
            toast.error("You are already logged in.Logout first to switch accounts.")
            toastShown.current = true
            navigate("/")
        }
    },[])
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
   
    const handleLogin = async(e) => {
        e.preventDefault()


        try{
            const data = await loginUser(user)
            localStorage.setItem("token",data.token)
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

                <LoginBtn/>

               <div className="flex justify-center mt-2">
               <Link to="/register">Register</Link>
               </div>
            </form>
        </div>
    )
}