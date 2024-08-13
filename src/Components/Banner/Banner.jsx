// import React from "react";
import Gujarati from '../../assets/Gujarati.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Gujarati})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px] text-white dark:bg-gray-700">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={Gujarati}
                  alt=""
                  className="max-w-[330px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-full "
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white">
                  Our special Gujarati dish.
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5 lg:text-lg">
                Fluffy clouds kissed with chutney, Dhokla melts in your mouth, a Gujarati tastebud party.
                Savory meets sweet, crunchy meets soft. Handvo, a veggie & spice symphony, baked to perfection.
                Winter whispers in a pot. Sweet & savory veggies simmered in magic, Undhiyu warms your soul & heart.
                  <br />
                  <br />
                  Salty crunch meets sugary swirl, Fafda-Jalebi, a Gujarati love story in every bite.
                  More than bread, a flavor trip. Thepla, spiced & packed with goodness, pairs perfectly with any dish.
                  Add a location-specific detail! Mention the bustling streets where Fafda-Jalebi sizzles or the vibrant markets where Undhiyu's veggies are sourced.
                  
                </p>
                {/*<div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
  </div>*/}
                <div>
                  {/* <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;