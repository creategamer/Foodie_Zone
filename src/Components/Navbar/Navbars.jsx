// import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Darkmode from '../Darkmode';
import Logo from '../../assets/Logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import Profile from '../../pages/Profile';
import { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';



export default function Navbars() {
    
    const { isLoggedIn, user, setUser } =useContext(UserContext)    

    const currentUser=useSelector(state=>state.user.currentUser)

    const dispatch=useDispatch()
    const handleLogout = () => {
        dispatch(logout());
        // Additional logout logic (e.g., redirect to login page)
    };


    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className=" bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black dark:text-white">
                <div className="flex  justify-evenly items-center mx-auto max-w-screen-xl gap-5">
                
                <div className='text-black dark:text-white'>
                
                    <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold '>
                    
                    <img src={Logo} alt="Foodie Zone" className='w-10 mix-blend-multiply dark:mix-blend-screen' />
                      Foodie Zone
                    </a>
                </div>

                
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-6 font-medium lg:flex-row lg:space-x-5 lg:mt-0">
                            
                        {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <li>
                                        <NavLink
                                            to="/Admin2"
                                            className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            User
                                        </NavLink>
                                        </li>
                                        ) : (
                                            
                                            <span></span>
                                    )} 
                                    </div>
                                    ) : (
                                <span></span>
                            )}        
                        
                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <li>
                                        <NavLink
                                            to="/Admin"
                                            className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Product Add
                                        </NavLink>
                                        </li>
                                        ) : (
                                            <span></span>
                                    )}
                                    
                                </div>
                                    ) : (
                                <span></span>
                            )}

                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <li>
                                        <NavLink
                                            to="/AdminOrder"
                                            className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Order Add
                                        </NavLink>
                                        </li>
                                        ) : (
                                            <span></span>
                                    )}
                                    
                                </div>
                                    ) : (
                                <span></span>
                            )}

                            

                            <div>                                   
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({isActive}) =>
                                            `block py-2 pr-3 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>                            
                            </div>
                              
                            <div>                                   
                                <li>
                                    <NavLink
                                        to="/Services"
                                        className={({isActive}) =>
                                            `block py-2 pr-2 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>                            
                            </div>

                           
                            
                            {/* this is for usecontext using future purpose and dual pursose */}
                            {/* {isLoggedIn  && 
                                <li>
                                <NavLink
                                to="/Gujarati"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Gujarati
                                </NavLink>
                            </li>
                            } */}
                            
                            
                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <p>   
                                        </p>
                                        ) : (
                                            <li>
                                                <NavLink
                                                to="/Gujarati"
                                                className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                }
                                                >
                                                    Gujarati
                                                </NavLink>
                                            </li>
                                    )}
                                    
                                    </div>
                                    ) : (
                                <p></p>
                            )}



                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <p>
                                            
                                        </p>
                                        ) : (
                                            <li>
                                            <NavLink
                                                to="/chinese"
                                                className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                }
                                            >
                                                Chinese
                                            </NavLink>
                                            </li>
                                    )}
                                    
                                    </div>
                                    ) : (
                                <p></p>
                            )}


                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <p>
                                            
                                        </p>
                                        ) : (
                                            <li>
                                                <NavLink
                                                to="/punjabi"
                                                className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                }
                                                >
                                                    Punjabi   
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                </div>
                                    ) : (
                                <p></p>
                            )}
                           
                            

                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <p>
                                            
                                        </p>
                                        ) : (
                                            <li>
                                                <NavLink
                                                    to="/south-indian"
                                                    className={({isActive}) =>
                                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                    }
                                                >
                                                South Indian
                                                </NavLink>

                                            </li>
                                            )}
                                    
                                            </div>
                                    ) : (
                                <p></p>
                            )}                         

                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ? (
                                        <p>
                                            
                                        </p>
                                        ) : (
                                            <NavLink
                                            to="/Orderstatus"
                                            
                                                 className={({isActive}) =>
                                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                    }
                                              >  
                                              Order Status
                                                {/*<button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 ' >
                                                    Status 
                                                    {<FaCartShopping className="text-xl text-whtie drop-shadow-sm cursor-pointer " />}
                                                </button>*/}
                                            </NavLink>
                                    )}
                                    
                                </div>
                            ) : (
                                <p></p>
                            )}

                            <Darkmode/>

                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ? (
                                        <p>
                                            
                                        </p>
                                        ) : (
                                            <NavLink
                                            to="/Order"
                                            >
                                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 ' >Order <FaCartShopping className="text-xl text-whtie drop-shadow-sm cursor-pointer " /></button>
                                            </NavLink>
                                    )}
                                    
                                </div>
                            ) : (
                                <p></p>
                            )}

                            {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ? (
                                        <p>
                                            Welcome {currentUser.Username}
                                            <button
                                                className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 mx-4'
                                                onClick={handleLogout}>
                                                    Logout
                                            </button>
                                        </p>
                                        ) : (
                                        <p>
                                            Welcome {currentUser.Username}
                                            <button
                                                className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 mx-4'
                                                onClick={handleLogout}>
                                                    Logout
                                            </button>
                                        </p>
                                    )}
                                    
                                </div>
                            ) : (
                                    <Link to="/Login">
                                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 ' > 
                                            <FaRegUserCircle className="text-xl text-whtie drop-shadow-sm cursor-pointer " />
                                            <Profile/>
                                        </button>
                                    </Link>    
                            )}

                        </ul>
                    </div>
                    
    
                    
                </div>
                
                    
            </nav>
        </header>
    
    );
    
}