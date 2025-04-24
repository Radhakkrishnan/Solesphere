


export default function Search({searchQuery, setSearchQuery}){
   
    return(
       <input 
            type="text"
            placeholder="Search your product...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 rounded-xl w-full md:w-1/2 backdrop-blur-md bg-white/50
 bg-gradient-to-r from-white to-gray-50 text-black shadow-inner focus:outline-none hover:shadow-md active:scale-[0.99] placeholder:text-gray-400 placeholder:italic transition-all ease-in-out duration-200"

       />
    )
}