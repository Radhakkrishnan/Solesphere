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

