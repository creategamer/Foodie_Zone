// import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbars from './Navbar/Navbars'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
    <Navbars/>
      <Outlet />
    <Footer/>
    </>
  )
}

export default Layout