// import React from 'react'
// import img2 from '../assets/Gujarati.jpg'
import SI from '../assets/SI.jpg'
import chinese from '../assets/CHINESES.jpg'
import punjabi from '../assets/pjb.jpg'
// import img3 from '../assets/chinese.jpg'
// import img4 from '../assets/punjabi.jpg'

import Banner from '../Components/Banner/Banner';


const ServiceData=[
    {
        id:1,
        img:SI,
        name:"South Indian",
        description: "Immerse yourself in the vibrant flavors of South India with our authentic Dosa, Uttapam dishes. Our menu offers a rich blend of sweet, savory, and spicy delights, bringing the true essence of South Indian cuisine to your table."
    },

    {
        id:2,
        img:chinese,
        name:"Chinese",
        description: "Take a flavorful journey through China with our Sweet and Sour, Vegetable Manchurian, and Szechuan Noodles. Each dish is a harmonious blend of sweet, salty, and umami, offering a taste of traditional Chinese culinary mastery."
    },
    {
        id:3,
        img:punjabi,
        name:"Punjabi",
        description: "Experience the bold and hearty flavors of Punjab with dishes like Butter Chicken and Sarson da Saag. Our menu captures the essence of Punjabi hospitality, delivering a culinary celebration that brings the warmth of spices and tradition to your dining experience."
    },
];


const Services = () => {
  return (
    <>
        <div className='py-10 text-white dark:bg-gray-700'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-20 max-w-[500px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary '>Our services</p>
                    <h1 className='text-3xl font-bold text-black dark:text-white'>Services</h1>
                    <p className='text-sm text-gray-400 '>Discover a world of culinary delights with our diverse menu featuring authentic Gujarati, Chinese, South Indian and Punjabi dishes. From the vibrant flavors of Gujarat to the rich and hearty Punjabi specialties, and the savory journey through Chinese cuisine, our menu promises a delightful experience for every palate. Immerse yourself in the taste of tradition with our expertly crafted dishes.</p>

                </div>

                {/* Card section */}
                <div >
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {ServiceData.map(({id,img,name,description})=>{
                        return <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl '>
                            <div className='h-[100px] '><img src={img} alt="images for" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-2xl shadow-xl  '  />
                            </div>
                            <div className='p-3 text-center '><h1 className='text-xl font-bold text-black dark:text-white'>{name} </h1>
                                <p className='text-gray-500 text-sm line-clamp-2  group-hover:text-white duration-300 '>{description}</p>
                            </div>
                        </div>
                    })}
                </div>
                </div>
            </div>
        </div>
        <Banner/>
    </>
  )
}

export default Services
