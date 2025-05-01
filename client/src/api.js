import axios from 'axios'
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const getProducts = async() => {
    try{
        let response = await axios.get(`${BASE_URL}/product`)
        return response.data
    }
    catch(err){
       console.log(err)
       throw err
    }
}

export const getOneProduct = async(id) => {
    try{
        let response = await axios.get(`${BASE_URL}/product/${id}`)
        return response.data
        
    }
    catch(err){
        console.log(err)
        throw err
    }
}

export const registerUser = async(user) => {
    try{
        let response = await axios.post(`${BASE_URL}/register`, user)
        console.log(user)
        return response.data
    } catch(err){
        console.log(err)
        throw err
    }
}

export const loginUser = async(user) => {
    try{
        let response = await axios.post(`${BASE_URL}/login`, user)
        return response.data
    } catch(err){
        console.log(err)
        throw err
    }
} 

export const getUsers = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/getUsers`)
        return response.data
    }
    catch(err){
        console.log(err)
        throw err
    }
}

export const getUser =async(id) => {
    try{
        const response = await axios.get(`${BASE_URL}/getUser/${id}`)
        return response.data
    }
    catch(err){
        console.log(err)
        throw err
    }
}

export const placeOrder = async(order,token) => {
    try{
        const response = await axios.post(`${BASE_URL}/postOrder`,order,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response
    } catch(err){
        console.log(err)
        throw err
    }
}

export const getOrders = async(token) => {
    try{
        const response = await axios.get(`${BASE_URL}/myOrders`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(err){
        console.log(err)
        throw err
    }
}