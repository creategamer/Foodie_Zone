import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullname: '',
    Username: '',
    password: '',
    email: '',
    address: '',
    phonenumber: '',
    pincode: '',
    city: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  const hanndleSubmit = async (e) => {
    e.preventDefault()
    // dispatch(loginStart())
    try {
      // axios.post('/api/auth/signin',{Username,password})
      const res = await axios.post('/api/auth/signup', formData)
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
          // setSubmitMessage('Error Login form. Please try again.');
          // dispatch(loginFailure());
        })
    } catch (error) {
      //
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="fullname" className="sr-only">Full Name</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="Username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.Username}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Address"
                />
              </div>
              <div>
                <label htmlFor="phonenumber" className="sr-only">Phone Number</label>
                <input
                  id="phonenumber"
                  name="phonenumber"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phonenumber}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="pincode" className="sr-only">Pin Code</label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  autoComplete="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="Pin Code"
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                  placeholder="City"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={hanndleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
