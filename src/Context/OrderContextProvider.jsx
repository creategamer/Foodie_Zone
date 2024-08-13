import React from "react";
import OrderContext from "./OrderContext";

const OrderContextProvider=({children})=>{
    const [Order,setOrder]=React.useState(null)

    return(
        <>
            <OrderContext.Provider value={{Order,setOrder}}>
            {children}
            </OrderContext.Provider>
        </>
    )
}

export default  OrderContextProvider