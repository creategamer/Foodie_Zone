// // FeedbackForm.js
import axios from 'axios';
import { useState } from 'react';

const FeedbackForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  //   feedback: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform feedback submission logic, such as sending data to a server
  //   console.log('Form data submitted:', formData);
  // };


  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [phonenumber,setphonenumber]=useState('')
  const [feedbacks,setfeedbacks]=useState('')
  
  const [submitMessage, setSubmitMessage] = useState('');


  const RegisterUser=async (e)=>{
    e.preventDefault()
    try {
      axios.post('/api/users/feedback',{name,email,phonenumber,feedbacks})
        
      .then((res)=>{
          console.log(res.data);
          setname('');
          setemail('');
          setphonenumber('');
          setfeedbacks('');
          // Display submission message
          setSubmitMessage('Form submitted successfully!');
      }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
      console.log(error);
      // Display error message if submission fails
      setSubmitMessage('Error submitting form. Please try again.');
    }  
  }


  return (
    <div className="max-w-md mx-auto mt-8 ">
       {/* onSubmit={handleSubmit} */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">  
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e)=>setname(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={(e)=>setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Your Phone Number"
            onChange={(e)=>setphonenumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            name="feedback"
            placeholder="Your Feedback"
            rows="4"
            onChange={(e)=>setfeedbacks(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={RegisterUser}
          >
            Submit Feedback
          </button>
        </div>
        {submitMessage && <p className="text-sm text-gray-500 mt-2">{submitMessage}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
