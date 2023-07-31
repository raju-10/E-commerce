import React from 'react'

const ProductCart = ( {product} ) => {
  return (
    <div className="group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover" src={product.image} alt="product-img" />
      </div>
    </div>
  )
}

export default ProductCart