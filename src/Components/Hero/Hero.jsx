
import  { useState } from 'react'
// import bgimg from '../../assets/bgimages.jpg';
import changebg from '../../assets/bg.jpg'
import chinese from '../../assets/chinese.jpg';
import Gujarati from '../../assets/Gujarati.jpg';
import Southindian from '../../assets/Southindian.jpg';
import punjabi from '../../assets/punjabi.jpg';
import china from '../../assets/CHINESES.jpg';
import backimage from '../../assets/bgimg.jpg'
// import Banner from '../Banner/Banner';
import Testimonial from '../../Testimonial/Testimonial';
import AppStore from '../AppStore/AppStore';



const imageList=[
    {
        id:1,
        img: Gujarati,
    },
    {
        id:2,
        img: china,
    },
    {
        id:3,
        img: punjabi,
    },
    
]

const bgimage={
    backgroundImage: `url(${backimage})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"100%",
    opacity: 1, // Adjust the opacity value as needed (0 for completely transparent, 1 for completely opaque)
    
};


const Hero = () => {
    const [imageid,setImageid]=useState(Gujarati)

    return (
    <>
        <div style={bgimage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark-bg-gray-650 dark:text-gray-800 dark:bg-gray-700  duration-200 flex justify-center items-center '>
            <div className='container pb-8 sm-pb-0'>
                <div className='grid grid-cols-2 sm:grid-cols-2 '>
                    {/* Text conents section
                     */}
                    <div className='flex flex-col justify-center ml-60 mt-19 gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 '>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold  '>Welcome to the Foodie Zone</h1>
                        <p className='text-2xl'>This is our largest food chain we made and we promise that we delivar.</p>
                        
                    </div>

                    {/* Image conents sectoin */}
                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative '>
                        {/* Main Image section */}
                        <div className='flex justify-between items-center h-[300px] sm:h-[450px] overflow-hidden'>
                            
                            <img src={imageid} alt=""  className='w-[2000px] sm:w-[300px] mx-auto spin  rounded-full  '/>
                        </div>
                        {/* Main Image list section */}
                        {/* <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                            {imageList.map((item)=>(
                                <img key={item.id} src={item.img} className='max-w-[80px] h-[85px] object-contain inline-block hover:scale-105 duration-200 rounded-full' 
                                onClick={
                                    ()=>{
                                        setImageid(
                                            item.id===1 ? Gujarati : item.id===2 ? chinese : Southindian 
                                        );
                                    }
                                }
                                />
                            ))}
                        </div> */}
                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-12 bg-white/30 rounded-full'>
                            {imageList.map((item) => (
                            <img key={item.id} src={item.img} className='max-w-[80px] h-[85px] object-contain inline-block hover:scale-105 duration-200 rounded-full' 
                                onClick={() => {
                                    setImageid(
                                        item.id===1 ? Gujarati : item.id===2 ? china : Southindian 
                                    );
                            }}
                            />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <Testimonial/>
        <AppStore/>
    </>
  )
}

export default Hero
