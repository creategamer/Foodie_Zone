import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from 'axios';

const Orderform = ({total,handlePaymentSuccess}) => {

  // State to store the menu items fetched from the backend
  const [menuItems, setMenuItems] = useState([]);

  console.log("order parts");
  const currentUser=useSelector(state=>state.user.currentUser)
  console.log("Order parts currentUser");
  console.log(currentUser);
  
  const navigate=useNavigate();

  if (!currentUser) {
    console.log("current user not available");
    navigate(`/Login`)
  }

  console.log(currentUser._id);
  const items=useSelector((state)=>(state?.cart?.itemList))
  console.log("==============================");
  console.log(items);
  console.log("==============================");

  // const userId = currentUser._id;
  // const cartItemIds = items.map(item => item.id);
      
  const dispatch=useDispatch()

  useEffect(() => {
    // Populate menuItems state when items state changes
    setMenuItems(items);
  }, [items]);

  

  // Function to handle payment
  const handleToken = async (token) => {
    try {
      const userId = currentUser._id;
      console.log("click");
      console.log(userId);
       // Wait for the menuItems state to be updated
    // await setMenuItems(items);

      const cartItemIds = menuItems.map(item => item.id);
      console.log("click");
      console.log(cartItemIds);

      const response = await axios.post('/api/Finalorder/final-orders', {
        userId: userId,
        cartItems: cartItemIds,
        totalPrice: total
      });

      console.log("data store succefuuly");
      console.log(response.data);

    } catch (error) {
      console.error('Error creating final order:', error);
    }
  };

  return (
    <div>
        <NavLink to="/paymentForm">
            
            <button type="button"
              onClick={handleToken}
              className="bg-yellow-500 flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Pay {total}<FaIndianRupeeSign className="mt-1 flex text-sm text-white-600 dark:text-white"/>
            </button>

      </NavLink>
    </div>
  )
}

export default Orderform
