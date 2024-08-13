import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AdminOrder = () => {
    const [finalOrders, setFinalOrders] = useState([]);

    const items=useSelector((state)=>(state?.cart?.itemList))
    console.log("==============================");
    console.log(items);
    console.log("==============================");

    useEffect(() => {
        // Fetch all final orders when the component mounts
        const fetchFinalOrders = async () => {
            try {
                const response = await axios.get('/api/Finalorder/final-orders');
                setFinalOrders(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching final orders:', error);
            }
        };

        fetchFinalOrders();
    }, []);

    const handleConfirmOrder = async (orderId) => {
        try {
            await axios.put(`/api/Finalorder/orders/${orderId}/confirm`);
            // Refresh orders after confirmation
        } catch (error) {
            console.error('Error confirming order:', error);
        }
    };
    
    const handleMarkAsPending = async (orderId) => {
        try {
            await axios.put(`/api/Finalorder/orders/${orderId}/pending`);
            // Refresh orders after marking as pending
        } catch (error) {
            console.error('Error marking order as pending:', error);
        }
    };
    
    const handleCancelOrder = async (orderId) => {
        try {
            await axios.put(`/api/Finalorder/orders/${orderId}/cancel`);
            // Refresh orders after cancellation
        } catch (error) {
            console.error('Error cancelling order:', error);
        }
    };
    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">All Final Orders</h1>
            <ul className="space-y-4">
                {finalOrders.map((order) => (
                    <li key={order._id} className="border p-4 rounded-lg shadow-md">
                        <p><span className="font-semibold">User ID:</span> {order.userId}</p>
                        <p><span className="font-semibold">Order ID:</span> {order._id}</p>
                        <p><span className="font-semibold">Total Price:</span> {order.totalPrice}</p>
                        <p><span className="font-semibold">Status:</span> {order.status}</p>
                        
                            {/* Find the items for this order */}
                        {items
                            .filter((item) => item.id === order._id)
                            .map((item) => (
                                <div key={item.id}>
                                    <p><span className="font-semibold">Dishes:</span> {item.name}</p>
                                    <p><span className="font-semibold">Quantity:</span> {item.quantity}</p>
                                </div>
                            ))}
                            
                        {/* Add more details to display as needed */}
                        {order.status === 'pending' && (
                            <div className="mt-4">
                                <button onClick={() => handleConfirmOrder(order._id)} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Confirm Order</button>
                                <button onClick={() => handleCancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel Order</button>
                            </div>
                        )}
                        {order.status === 'confirmed' && (
                            <div className="mt-4">
                                <button onClick={() => handleMarkAsPending(order._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Mark as Pending</button>
                                <button onClick={() => handleCancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel Order</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminOrder;
