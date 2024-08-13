import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState:{
    itemList:[],
    totalQuantity:0,
  },
  reducers: {
    addToCart(state,action){

        const newItem=action.payload;

        //check if item already exists
        const existingItem=state.itemList.find((item)=>item.id === newItem.id);
        
        if(existingItem){
            //we have increase the quantity
            existingItem.quantity++;
            existingItem.totalPrice =parseFloat(existingItem.totalPrice) + parseFloat(newItem.price); // Convert to number
            
        }
        else{
            //if the item is new then we have add to cart 
            state.itemList.push({
                id:newItem.id,
                price: newItem.price, // Convert to number
                quantity:1,
                totalPrice: newItem.price, // Convert to number
                name:newItem.name,
                image:newItem.image,

            });
            state.totalQuantity++; 
        }
    },
    removeFromCart(state, action) {
        const id = action.payload; // pass id to remove from cart
        
        //check if item already exists
        const existingItem=state.itemList.find((item)=>item.id === id);
        

        if (existingItem) {
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =parseFloat(existingItem.totalPrice) - parseFloat(existingItem.price); // subtract only price
            }
        } else {
            console.log("Item not found in cart.");
        }
    },
    
    clearCart(state){
        state.itemList=[];
        state.totalQuantity=0;

    }
  },
});

export const cartActions=cartSlice.actions

export const {clearCart} = cartSlice.actions

export default cartSlice;