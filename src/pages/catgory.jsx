import React from "react";
import { LikeProduct } from "../assets/like-product";
import { newProductData } from "./data/product-data";

export const Catgory = () => {
  return <div>
     <div className='flex items-center justify-center gap-3 flex-col  mt-5   '>
  <div className='flex mt-8 gap-12 '>
  {newProductData.map((item) =>(
    <div className='w-[300px] h-[410px] bg-white rounded-xl flex items-center flex-col hover:scale-105 hover:shadow-lg hover:shadow-gray-300 '>
      <div className='flex w-[260px] items-center justify-between mt-5'>
        <span className='w-[30px] h-[30px] text-red-600 font-medium'>{item.discount}</span>
        <LikeProduct/>
      </div>
      <img className='w-[200px] h-[200px] mt-5' src={item.img} alt="img" />
      <h1 className='text-xl w-[200px] mr-10 font-medium'>{item.name}</h1>
      <div className='mr-12 mt-3 '>
        <span className='text-xl text-red-600 font-medium'>{item.price}</span>
        <span className='text-gray-500 line-through ml-5'>{item.price2}</span>
      </div>
    </div>
  ))}
  </div>

  <div className='flex mt-8 gap-12 '>
  {newProductData.map((item) =>(
    <div className='w-[300px] h-[410px] bg-white rounded-xl flex items-center flex-col hover:scale-105 hover:shadow-lg hover:shadow-gray-300 '>
      <div className='flex w-[260px] items-center justify-between mt-5'>
        <span className='w-[30px] h-[30px] text-red-600 font-medium'>{item.discount}</span>
        <LikeProduct/>
      </div>
      <img className='w-[200px] h-[200px] mt-5' src={item.img} alt="img" />
      <h1 className='text-xl w-[200px] mr-10 font-medium'>{item.name}</h1>
      <div className='mr-12 mt-3 '>
        <span className='text-xl text-red-600 font-medium'>{item.price}</span>
        <span className='text-gray-500 line-through ml-5'>{item.price2}</span>
      </div>
    </div>
  ))}
  </div>
  
</div>
  </div>
};
