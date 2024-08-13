import  { useState } from 'react'
import { useSelector } from 'react-redux';
import CartItems from '../Components/dishes/CartItems.jsx';
// import Card from '../Components/Card.jsx';
import Orderform from './Orderform.jsx';
// import AdminPanel from '../AdminPanel.jsx';

const Order = () => {

  

  const [cartOpen,setcartOpen]=useState(false);
  const closeCart=()=>{
    setcartOpen(null);
  }

//in this part we should display selected card
const quantity=useSelector((state) => state.cart.totalQuantity);
const cartItems=useSelector((state) => state.cart.itemList);



let total=0;

const itemlists =useSelector((state)=>state.cart.itemList)

itemlists.forEach((item)=>{
  total += parseFloat(item.totalPrice); // Use += for mathematical addition

})

const handlePaymentSuccess=()=>{
  console.log("=========================================================================");
  console.log("Payment Success");
  console.log("=========================================================================");
  closeCart()
}


  return (
    <>
      <div  onClick={()=>setcartOpen(!cartOpen)} >
        <span className='text-2xl flex justify-center pt-9'>Dishes:{quantity}</span>
      </div>
      <div className={cartOpen ? "overlay" : "nonoverlay"}></div>
      
      <div className={cartOpen ? "cartItem":"cardhide" }>
        <div className="flexs8">
          <h2 className='text-2xl  flex justify-center' >Shopping cart</h2>

        </div>
        <button onClick={closeCart} className='closebtn'>
          <i className='fa-solid fa-x'></i>
        </button>
      </div>

    {/* at that time componets that used  */}
    {cartItems.map((item)=>(
      <CartItems id={item.id} cover={item.cover} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
    ))}

    

    <div className="py-8 ">
      <div className='flex justify-center align-middle'>
        <Orderform total={total} handlePaymentSuccess={handlePaymentSuccess} />
      </div>
      
    </div>

    </>
  )
}

export default Order
