import { useState } from "react"
import { registerUser } from "../api"
import toast from "react-hot-toast"


export default function RegisterPage(){
    const [user,setUser] = useState({
        name: " ",
        email: " ",
        password: " ",
        isAdmin: false,
        address: " ",
        phone: " "
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleCheckbox = (e) => {
        setUser({...user, isAdmin: e.target.checked})
    }
    const handleRegister = async(e) => {
        e.preventDefault()
        try{
            const data = await registerUser(user)
            console.log(data)
            window.location.href="/login"
            toast.success("User created succesfully!")
        } catch (err){
            console.log(err)
            throw err
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center px-6 pt-24  bg-[#e6e6e6]">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <input
                    type = 'text'
                    placeholder = "Name"
                    name = "name"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    required
                />
                <input
                    type = 'email'
                    placeholder = "abc@example.com"
                    name = "email"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    required
                />
                
                <input
                    type = 'text'
                    placeholder = "Address"
                    name = "address"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    
                />
                <input
                    type = 'number'
                    placeholder = "Phone"
                    name = "phone"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    
                />
                <input
                    type = 'password'
                    placeholder = "Password"
                    name = "password"
                    onChange={handleChange}
                    className="mb-4 w-full p-3  border-b"
                    required
                />

                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox"
                        checked={user.isAdmin}
                        onChange={handleCheckbox}
                        className="mr-2"
                    />
                    <label>Register as admin</label>
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white rounded-xl transition-all from-[#1d1d1f] to-[#434343] text-white hover:scale-[1.02]"
                >
                    Register
                </button>
            </form>
        </div>
    )
}