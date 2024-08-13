// import React, { useState } from "react";
import {
  // FaFacebook,
  // FaInstagram,
  // FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/Logo.png";
// import FeedbackForm from "../../pages/FeedbackForm";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../pages/Profile";
import { logout } from "../../redux/userSlice";
import Darkmode from "../Darkmode";


const Footer = () => {

  const currentUser=useSelector(state=>state.user.currentUser)

  const dispatch=useDispatch()
    const handleLogout = () => {
        dispatch(logout());
        // Additional logout logic (e.g., redirect to login page)
    };

  return (
    <div className="bg-gray-300 dark:bg-gray-950 dark:text-white ">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Foodie Zone <Darkmode/>
            </h1>
            
            <p className="">
              Indulge in a world of flavors divine,
              Where Gujarati, Punjabi, South Indian, and Chinese combine.
              Savor the richness, taste the essence refined,
              At FoodieZone, culinary experiences entwined.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Sardarnagar </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9825679898</p>
            </div>
            <p> <Link to="/Feedback">Give Feedback</Link></p>
            {/* Social Handle */}
            {/* <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div> */}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                    <li>
                      <NavLink
                        to="/"
                          className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                      >
                        Home
                      </NavLink>
                    </li>
                  <li>
                    <NavLink
                      to="/Services"
                        className={({isActive}) =>
                          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                    Services
                    </NavLink>
                  </li>
                  <li className="cursor-pointer">
                  {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ? (
                                        <p>                                            
                                            <button
                                                className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 mx-0'
                                                onClick={handleLogout}>
                                                    Logout
                                            </button>
                                        </p>
                                        ) : (
                                        <p>
                                            <button
                                                className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 mx-0'
                                                onClick={handleLogout}>
                                                    Logout
                                            </button>
                                        </p>
                                    )}
                                    
                                </div>
                            ) : (
                                    <Link to="/Login">
                                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 ' > 
                                            
                                            <Profile/>
                                        </button>
                                    </Link>    
                          )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                
                <ul className="flex flex-col gap-3">
                {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        
                                        <li>
                                          <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                            Admin Links
                                          </h1>
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

                            

                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  
                {currentUser ? (
                                <div>
                                    {currentUser.Username === "Admin" ?  (
                                        <p>   
                                        </p>
                                        ) : (
                                            <li>
                                              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                                  Dishes
                                              </h1>
                                                <NavLink
                                                to="/Gujarati"
                                                className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                            
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Nihal
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;