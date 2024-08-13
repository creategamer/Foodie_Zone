import { GoPlus } from "react-icons/go";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../store/cartSlice";


const DishesProduct = ({id,rate,cover,subcategory,category,price,title,desc}) => {


  //this is use of order list page display pay attentions
    // const dispatch=useDispatch()

    // const addToCart=()=>{
    //     dispatch(cartActions.addToCart({id,title,price}));//pass the value we need
    //     console.log("click button");
    // };
  

  return (
    <>

     {/* secound card */}
      <div className='m-12'>
          <div className="w-[300px] rounded-md border">
            <img src={cover}
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              
                <h1 className="text-lg font-semibold" >{title}</h1>
                <h4 className="text-lg font-semibold" >{subcategory},{category}</h4>
              <label htmlFor="">Price:${price}</label>  
              <p className="mt-3 text-sm text-gray-600">
                {desc}
              </p>
              
              <button type="button"
                onClick={addToCart}
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <GoPlus />
              </button>
            </div>  
          </div>
      </div> 

    </>
  )
}

export default DishesProduct
