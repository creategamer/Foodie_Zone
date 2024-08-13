// import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { FaIndianRupeeSign } from "react-icons/fa6";

// import img2 from '../assets/Gujarati.jpg'
// import img3 from '../assets/chinese.jpg'
// import img4 from '../assets/punjabi.jpg'

import { cartActions } from './../store/cartSlice';


// const ServiceData=[
//     {
//         id:1,
//         img:img3,
//     },

//     {
//         id:2,
//         img:img4,
//     },
//     {
//         id:3,
//         img:img2,
//     },
// ];


function Card({dish,id,name,desc,image,price,type}) {

    const dispatch=useDispatch()

    const addToCart=()=>{
        // console.log("id:",id);
        // console.log("name:",name);
        // console.log("price:",price);
        // console.log("image:",image);
        dispatch(cartActions.addToCart({id,name,price,image}));
        //pass the value we need    
        console.log("click button");
    };


  return (
    <>
    <div className='m-12 flex flex-row flex-wrap justify-center '>
      {/* secound card */}
      
      <div className='m-12'>
      
        <div className="w-[300px] rounded-md border">                  
                <img 
                // src={`data:image/png;base64,${image}`}
                src={image}
                alt="products"
                className="h-[200px] w-full rounded-md object-cover"
                />
            
            <div className="p-4">

                <h1 className="text-lg font-semibold dark:text-white">{name}</h1>
                <p className="mt-3 text-sm text-gray-600 dark:text-white">
                    {desc}
                </p>
                <p className="mt-3 flex text-sm text-gray-600 dark:text-white">
                    {price}<FaIndianRupeeSign className="mt-1 flex text-sm text-gray-600 dark:text-white"/>
                </p>
                {/*<p className="mt-3 text-sm text-gray-600 dark:text-white">
                    {type}
                </p>*/}
                <button type="button"
                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={addToCart}
                >
                    Add Card
                </button>
                
            </div>  
        </div>
    
    </div>
    </div>
    </>
  )
}

export default Card
