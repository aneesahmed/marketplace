import React from 'react'
import Image, { StaticImageData} from "next/image"



function ProductCard(props: {title:string, price:number, image:StaticImageData, category:string})  {
  return (
    <div className=' px-6 py-4 rounded-lg shadow-md max-w-sm w-[30%] md:mx-auto'>
    <Image  src={props.image} alt='product Image' />
    <h1 className='font-bold text-2xl'>{props.title}</h1>
    <p className='text-gray-500'>${props.price}</p>
    <p className='text-gray-500'>category:{props.category}</p>


    </div>
  )
}

export default ProductCard