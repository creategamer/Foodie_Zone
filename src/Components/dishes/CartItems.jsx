import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../store/cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import { cartActions } from "../../store/cartSlice.js";

const CartItems = ({id,image,name,price,quantity,totalPrice}) => {

  // const currentUser=useSelector(state=>state.user.currentUser)
  // console.log("current user in add to");
  // console.log(currentUser);

    const dispatch=useDispatch();

    const inCartitems=()=>{
        dispatch(cartActions.addToCart({id,name,price}));
    }

    const descCartitems=()=>{
        dispatch(cartActions.removeFromCart(id))
    }


    
  return (
    <>
      <div > 
        {/* this is new for reason */}
        <div className="flex items-center justify-between p-4 border-b " key={id}>
            {/* Tile */}
              {/* <div className="w-16 h-16 bg-gray-200 rounded-md">
                <div className="img">
                  <img src={image} alt="image" />
                </div>
              </div> */}

          {/* Item Details */}
          <div className="flex-grow mx-4">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-gray-500">Unit Price:{price}</p>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center space-x-2">
            <button
              className="bg-gray-300 px-2 py-1 rounded"
              onClick={descCartitems}
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              className="bg-gray-300 px-2 py-1 rounded"
              onClick={inCartitems}
            >
              +
            </button>
          </div>

          {/* Price Display */}
          <p className="text-lg flex font-semibold">Total:{totalPrice}<FaIndianRupeeSign className="mt-2 flex text-sm text-gray-600" /></p>
        </div>
      </div>

      
    </>
  )
}

export default CartItems
