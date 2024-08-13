import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Services from './Services/Services.jsx'
// import AppStore from './Components/AppStore/AppStore.jsx'
// import Banner from './Components/Banner/Banner.jsx'
import Gujarti from './Components/Gujarati/Gujarti.jsx'
import Punjabi from './Components/Punjabi/Punjabi.jsx'
import SouthIndian from './Components/SouthIndian.jsx/SouthIndian.jsx'
import Chinese from './Components/Chinese/Chinese.jsx'
import Order from './pages/Order.jsx';
import UserContextProvider from './Context/UserContextProvider.jsx';
import Loginpage from './pages/Loginpage';
// import Profile from './pages/Profile.jsx';
import OrderContextProvider from './Context/OrderContextProvider.jsx';
import Registration from './pages/Registration.jsx';
import FeedbackForm from './pages/FeedbackForm.jsx';
import { Provider, useSelector } from 'react-redux';
import store from './store/store.js';
import App from './App.jsx';
import AdminPanel from './AdminPanel.jsx';
import { persistor, userstore } from './redux/userstore.js';
import { PersistGate } from 'redux-persist/lib/integration/react.js';
import AdminPanel2 from './AdminPanel2.jsx';
import PaymentForm from './pages/finalOrder.jsx';
import Payment from './pages/Payment.jsx';
import AdminOrder from './AdminOrder.jsx';
import OrderStatus from './OrderProfile/OrderStatus.jsx';
import ForgotPassword from './pages/Forgotpassoword.jsx';


// element={currentUser ? <Home /> : <SignIn />}
// const currentUser=useSelector(state=>state.user.currentUser)
// console.log(currentUser);

const router = createBrowserRouter(
  
  createRoutesFromElements(
  
    <Route path='/' element={<Layout  />}>
      <Route path='' element={<Hero />} >    
      </Route>
      <Route path='home' element={<Hero />} />
      <Route path='services' element={<Services />} />
      <Route path='Gujarati'  element={<Gujarti />} />
      <Route path='punjabi' element={<Punjabi />} />
      <Route path='south-indian' element={<SouthIndian />} />
      <Route path='chinese' element={<Chinese />} />
      <Route path='Order' element={<Order/>}/>
      <Route path='Orderstatus' element={<OrderStatus/>}/>
      <Route path='paymentForm' element={<PaymentForm/>}/>
      <Route path='payment' element={<Payment/>}/>
      
      <Route path='Login' element={<Loginpage/>} >r
        
      </Route>
      <Route path='forgotpass' element={<ForgotPassword/>} />
      <Route path='register' element={<Registration/>} />
      <Route path='Feedback' element={<FeedbackForm/>} />
      <Route path='Admin' element={<AdminPanel />}>
        
      </Route>
      <Route path='Admin2' element={<AdminPanel2/>} />
      <Route path='AdminOrder' element={<AdminOrder/>} />
    </Route>
    
  )
)


{/* <UserContextProvider>
  
</UserContextProvider> */}


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <Provider store={userstore}>
        {/* <Provider store={userstore}> */}
        <UserContextProvider>
          <OrderContextProvider>
            <RouterProvider router={router} >
          
            </RouterProvider>
        
          </OrderContextProvider>
        </UserContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        {/* </Provider> */}
    </Provider>
  </React.StrictMode>,
);

