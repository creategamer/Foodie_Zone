import  { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
  
const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
//   const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send payment data to backend for processing
    console.log('Payment data:', { cardNumber, cardName, expiry, cvv, billingAddress });
    // , amount
  };

  const currentUser=useSelector(state=>state.user.currentUser)
  console.log("FinalOrder parts currentUser");
  console.log(currentUser);
  
  const navigate=useNavigate();

  if (!currentUser) {
    console.log("current user not available");
    navigate(`/Login`)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 text-sm font-bold mb-2">Cardholder Name</label>
          <input
            type="text"
            id="cardName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter cardholder name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="expiry" className="block text-gray-700 text-sm font-bold mb-2">Expiry</label>
            <input
              type="text"
              id="expiry"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
            <input
              type="text"
              id="cvv"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="billingAddress" className="block text-gray-700 text-sm font-bold mb-2">Billing Address</label>
          <textarea
            id="billingAddress"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter billing address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input
            type="text"
            id="amount"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div> */}
        <NavLink to="/payment">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Pay Now
        </button>
        </NavLink>
        
      </form>
    </div>
  );
};

export default PaymentForm;
