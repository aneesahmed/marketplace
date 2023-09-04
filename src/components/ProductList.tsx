import Image from "next/image"
import React from 'react'
import ProductCard from "@/components/ProductCard"

//import p1 from "/public/p1.jpg"
//import p2 from "/public/p2.jpg"
//import p3 from "/public/p3.jpg"
import { Products } from "@/utils/mock"


const ProductList = () => {
  const productChecks = Products.slice(0,4);

  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {productChecks.map( (product) => (
        <ProductCard 
        key={product.id} 
        title={product.name} 
        price={product.price} 
        image = {product.image}
        category = {product.category}
        />
      ))
    }
    </div>
  )
}

export default ProductList
