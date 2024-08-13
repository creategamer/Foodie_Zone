// import React from 'react'
import { useEffect, useState } from 'react';
// import southindian from '../../assets/Punjabi.jpg';
import axios from 'axios';
import Card from '../Card';

function Punjabi() {

  // const [dishes,setDishes]=useState([])
  const [MenuItems,setMenuItems]=useState([]);

  useEffect(()=>{
    axios.get('/api/order/punjabiDish')
    .then((res)=>{
      // console.log(res.data);
      // setDishes(res.data)
      setMenuItems(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  

  return (
    <>
    <div className='flex flex-row flex-wrap justify-center dark:bg-gray-700 '>
      

    {
      MenuItems.map((item)=>(
        <Card key={item.id} id={item._id} name={item.name} desc={item.desc} image={item.image} price={item.price} type={item.type} 
        />

        ))
    }

      {/* secound card */}
      {/* <div className='m-12'>
      <div className="w-[300px] rounded-md border">
        <img src=""
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Dosa</h1>
          <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add Card
          </button>
        </div>  
      </div>
      </div> */}


      </div>
      
    </>
  )
}

export default Punjabi
