
export default function CheckoutBtn(){
    return(
        <button
            onClick={() =>{ 
                alert("Proceeding to checkout!🚀")
                window.location.href = "/checkout"}}
            className="mt-4 w-full bg-[#1d1d1f] text-white py-3 rounded-lg hover:bg-[#333]"
        >
            Proceed to Checkout
        </button>
    )
}