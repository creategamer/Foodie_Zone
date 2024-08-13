import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import  axios from 'axios';

const OrderStatus = () => {
    const currentUser=useSelector(state=>state.user.currentUser)

    const [status,setstatus]=useState([]);
    const [finalOrders, setFinalOrders] = useState([]);

    useEffect(() => {
        // Fetch all final orders when the component mounts
        const fetchFinalOrders = async () => {
            try {
                const response = await axios.get('/api/Finalorder/final-orders');
                setFinalOrders(response.data);
                console.log('order status');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching final orders:', error);
            }
        };

        fetchFinalOrders();
    }, []);

    const currUser=currentUser._id
    console.log(currUser);



  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Final Orders</h1>
        <ul className="space-y-4">
            {finalOrders.map((order) => (
                <li key={order._id} className="border p-4 rounded-lg shadow-md">
                    <p><span className="font-semibold">User ID:</span> {order.userId}</p>
                    <p><span className="font-semibold">Total Price:</span> {order.totalPrice}</p>
                    <p><span className="font-semibold">Status:</span> {order.status}</p>
                    
                </li>
            ))}
        </ul>
    </div>
);
}

export default OrderStatus
