import { Navigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { useState, useEffect,useRef } from "react";

export default function AdminRoute({children}){
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const [showRedirect, setShowRedirect] = useState(false)
    const toastRef = useRef(false)

    useEffect(() => {
        if((!userInfo || !userInfo.isAdmin) && !toastRef.current){
            toast.error("Access Denied")
            toastRef.current = true
            setShowRedirect(true)
        }
    },[userInfo])

    if(showRedirect){
        return <Navigate to="/" />
    }

    return children
   
}