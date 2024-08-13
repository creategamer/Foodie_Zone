// import React from 'react'
import google from '../../assets/google.jpg'
import apple from '../../assets/appstore.jpg'
import gif from '../../assets/delivery.gif'

const AppStore = () => {
    return (
      <>
        <div className="bg-gray-100 dark:bg-gray-800 py-14">
          <div className="container">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="space-y-6 max-w-xl mx-auto"
              >
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                  Foodly is available for Android and IOS
                </h1>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5">
                  <a href="#">
                    <img
                      src={google}
                      alt="Play store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] h-[80px] "
                    />
                  </a>
                  <a href="#">
                    <img
                      src={apple}
                      alt="App store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="300">
                <img
                  src={gif}
                  alt="mobile bike"
                  className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AppStore;