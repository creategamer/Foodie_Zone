// import React from 'react'
import { useEffect, useState } from 'react';
// import southindian from '../../assets/chinese.jpg';
import  axios  from 'axios';
import Card from '../Card';

function Chinese() {

  // const [dishes,setDishes]=useState([])
  const [MenuItems,setMenuItems]=useState([]);

  useEffect(()=>{
    axios.get('/api/order/chineseDish')
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

export default Chinese
