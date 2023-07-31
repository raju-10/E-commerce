import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState({})
  const location = useLocation()
  useEffect(() => { setProduct(location.state.item) }, [location.state])

  return (

    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img className="w-full h-[560px] object-cover" src={product.image} alt="product" />
        </div>

        <div className="w-3/5 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">{product.title}</h2>
          <p className="text-2xl font-medium text-gray-900">{product.price} MAD</p>
          <p className="text-base text-gray-800 mt-2">{product.description}</p>

          <div>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 p-3">
              {/* <p className="text-sm text-black">Quantity</p> */}
              <div className="flex items-center gap-4 text-sm font-bodyFont">
                <button className="bg-black text-white p-3">-</button>
                <span className="text-black text-clip">{1}</span>
                <button className="bg-black text-white p-3">+</button>
                <button className="bg-black w-[200px] h-10 text-white font-titleFont hover:underline">Add to cart</button> 
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
