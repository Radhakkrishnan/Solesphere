export default function OrderConfirmationPage(){
    return(
        <div className="pt-24 px-8 min-h-screen bg-[#e6e6e6]">
            <div className="flex flex-col items-center max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!🎉</h1>
            <p className="text-lg text-gray-700">Your Order has been placed successfully</p>
            <p className="text-sm mt-4">We will contact you soon</p>

            <a 
                href="/"
                className="mt-6 inline-block py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-80"
            >
                Back to Home
            </a>
            </div>
            
        </div>
    )
}