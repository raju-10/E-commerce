import React from 'react'
import { cart, logo } from '../assets'

const Header = () => {
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={logo} alt="Logo here" />
                </div>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont">Home</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont ">Pages</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont ">Shop</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont ">Elements</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont ">Blog</li>
                    </ul>
                    <div className="relative">
                        <img className="w-12" src={cart} alt="cart" />
                        <span className="absolute w-12 top-2 left-1 text-sm flex items-center justify-center font-semibold">0</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Header