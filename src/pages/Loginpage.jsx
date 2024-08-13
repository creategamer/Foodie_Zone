// import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'
import imagelogin from '../assets/LoginImage.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth"
// import AdminPanel from '../AdminPanel'


function Loginpage() {


  const [Username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitMessage, setSubmitMessage] = useState('');

  const navigate = useNavigate()

  //this is for use dispatch 
  const { setUser } = useContext(UserContext)

  const dispatch = useDispatch()

  const hanndleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      // axios.post('/api/auth/signin',{Username,password})
      axios.post('/api/auth/adminsignin', { Username, password })
        .then((res) => {
          dispatch(loginSuccess(res.data))
          setSubmitMessage('Login successfully!');
          navigate(`/admin`)
        }).catch((err) => {
          //console.log(err);
          setSubmitMessage('Error Login form. Please try again.');
          dispatch(loginFailure());
        })
    } catch (error) {
      //
    }
    try {
      axios.post('/api/auth/signin', { Username, password })
        // axios.post('/api/auth/adminsignin',{username,password})
        .then((res) => {
          dispatch(loginSuccess(res.data))
          setSubmitMessage('Login successfully!');
          // setUser({Username,password})
          navigate("/")
        }).catch((err) => {
          //console.log(err);
          setSubmitMessage('Error Username or password wrong form. Please try again.');
          dispatch(loginFailure());
        })
    } catch (error) {
      //console.log(error);
    }
  }


  //Google Login was pending
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }




  return (
    <div>
      <div className="bg-gray-300 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img src={imagelogin} alt="Placeholder Image" className="object-cover w-full h-full opacity-100" />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
            {/* <!-- Username Input --> */}
            <div className="mb-4">
              <label className="block text-gray-600">Username</label>
              <input type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>
            {/* <!-- Remember Me Checkbox --> */}
            <div className="mb-4 flex items-center">
              {/* <input type="checkbox" id="remember" name="remember" className="text-blue-500" /> */}
              {/* <label  className="text-gray-600 ml-2">Remember Me</label> */}
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 text-blue-500">
              {/* <a href="#" className="hover:underline">Forgot Password?</a> */}
              <Link to="/forgotpass">Forgot Password?</Link>
            </div>
            {/* <!-- Login Button --> */}
            <button type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              onClick={hanndleSubmit}>
              Login
            </button>
            {submitMessage && <p className="text-sm text-gray-500 mt-2">{submitMessage}</p>}
            {/* <h2 className='px-28 font-semibold text-xl'>or</h2>
              <button type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" 
                onClick={signInWithGoogle}
                >
                Signin with Google
              </button> */}
          </form>
          {/* <!-- Sign up  Link --> */}
          <div className="mt-6 text-blue-500 text-center">
            <p>
              Already have an account? <Link to="/register">Sign up Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
