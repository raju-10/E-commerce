import React from 'react' 
import { useNavigate } from 'react-router-dom'

const ProductCart = ( {product} ) => {
  const navigate = useNavigate()
  const _id = product.title
  const idStirng = (_id) => {
    return String(_id).toLocaleLowerCase().split(" ").join("")
  } 
  const rootId = idStirng(_id)
  const DisplayProductDetail = () => {
    navigate(`/product/${rootId}`, {
      state:{
        item: product
      }
    })
  }

  return (  
    <div className="group p-1" onClick={DisplayProductDetail}>
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover" src={product.image} alt="product-img" />
      </div>
      <div className="text-center mt-2">
        <h2>{product.title}</h2>
      </div>
      <div className="text-center mt-1">
        <h2>{product.price} MAD</h2> 
      </div>
      <button className="bg-black text-white p-3 font-titleFont hover:bg-slate-900">Add to cart</button> 
    </div>
  )
}

export default ProductCart