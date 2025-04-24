import { useState } from "react";
import {ChevronDown} from 'lucide-react'


export default function Filter({selectedCategory, setSelectedCategory}){
    const [isOpen, setIsOpen] = useState(false)

    const categories = [
        {label: 'All', value: 'all'},
        {label: 'Formal Shoes', value: 'formal shoes'},
        {label: 'Boots', value: 'boots'},
        {label: 'Casual Shoes', value: 'casual shoes'}
    ]
   
    return (
      <div className="relative w-full md:w-1/4">
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-white to-gray-50 text-black shadow-inner hover:shadow-md active:scale-[0.99] cursor-pointer" 
        >
            <span>{categories.find(c => c.value === selectedCategory)?.label}</span>
            <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && 
        (
            <ul className="absolute mt-2 z-50 bg-white w-full rounded-xl shadow-xl overflow-hidden">
                {categories.map((c) => {
                   return(
                    <li
                    key={c.value}
                    onClick={() => {
                        setSelectedCategory(c.value)
                        setIsOpen(false)
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all"
                >
                    {c.label}
                </li>
                   )
                })}
            </ul>
        )
        }
      </div>
    );
}