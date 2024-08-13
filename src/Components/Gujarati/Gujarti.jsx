// import React from 'react'
// import { useContext, useState } from 'react';
// import southindian from '../../assets/Gujarati.jpg';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


function Gujarti() {


  // const [orderval,setOrderval]=useState('')
  // const {setOrder} =useContext(OrderContext)
  
  // const hanndleSubmit=(e)=>{
  //     e.preventDefault()
  //     setOrder({orderval})
  // }

  // const [MenuItems,setMenuItems]=useState(Gujaratidishes);

  // const filterItems=category=>{
  //   const newItems=Gujaratidishes.filter((item)=>item.category===category);
  //   setMenuItems(newItems);
  //   //to show all data
  //   if(category==="all"){
  //     setMenuItems(Gujaratidishes);
  //     return;
  //   }
  // }

  // const [dishes,setDishes]=useState([])
  const [MenuItems,setMenuItems]=useState([]);

  useEffect(()=>{
    axios.get('/api/order/gujaratiDish')
    .then((res)=>{
      // setDishes(res.data)
      setMenuItems(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])


  return (

    <>

      <div className='  flex flex-row flex-wrap justify-center dark:bg-gray-700 dark:text-white'>
      
          {
            MenuItems.map((item)=>(
              <Card key={item.id} id={item._id} name={item.name} desc={item.desc} image={item.image} price={item.price} type={item.type} 
              />
              ))
          }
      </div>
      
      {/* <div className="button">
            <button onClick={()=>filterItems("BURGER")}>Bugger</button>
          </div> */}

        {/* working code */}
      {/* <div className="button">
        <button onClick={()=>filterItems("all")}>all</button> */}
      
                
      {/* <section className='dishes'>
        {MenuItems.map((item)=>(
          <DishesProduct key={item.id} id={item.id}  category={item.category} subcategory={item.sub} cover={item.cover}
            price={item.price} title={item.title} desc={item.dec}
          />

          ))}
      </section> */}

    {/* </div> */}
      
    </>
  )
}

export default Gujarti
