import React from 'react'
import { sliderone } from '../assets'

const Banner = () => {

  return (
    <div className="w-full h-auto">
        <div>
            <div className="w-full h-1/2 flex">
                <img src={sliderone} className="w-screen h-full object-cover" alt="" srcset="" />
            </div>
        </div>
    </div>   
  )
}

export default Banner