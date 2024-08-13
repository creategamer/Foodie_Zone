// import React from 'react';
// import southindian from '../../assets/Southindian.jpg';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

function SouthIndian() {

  // const [dishes,setDishes]=useState([])
  const [MenuItems,setMenuItems]=useState([]);

  useEffect(()=>{
    axios.get('/api/order/southindianDish')
    .then((res)=>{
      // setDishes(res.data)
      setMenuItems(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <>
      <div className='flex flex-row flex-wrap justify-center dark:bg-gray-700'>
        {
          MenuItems.map((item)=>(
            <Card key={item.id} id={item._id} name={item.name} desc={item.desc} image={item.image} price={item.price} type={item.type} 
            />
          ))
        }
      </div>
    </>
  )
}

export default SouthIndian
