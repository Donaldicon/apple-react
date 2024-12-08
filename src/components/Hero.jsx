import React from 'react'
import iphone16 from '../assets/iphone.jpg'
import iphone16Main from '../assets/blue-iphone16.png'
import macBook from '../assets/mac.png'

const Hero = () => {
  return (
    <>
        <div>
            {/* iphone 16 pro */}
            <div className='bg-black h-fit flex justify-center pt-[170px] pb-[170px] md:pt-[50px] md:pb-[10px] relative z-100'>
                <img src={iphone16} alt="iphone16 image" className='w-[400px] md:h-[600px] md:w-[800px] object-cover'/> 
                <div className='absolute top-[60px] text-white text-[30px] md:text-[50px]'>
                    iPhone 16 Pro
                </div>

                <div className='absolute bottom-12 text-white px-7 py-3 bg-[#0872e3] rounded-full cursor-pointer'>
                    Learn more
                </div>
            </div>

            {/* iphone 16 phone */}
            <div className='mt-3 bg-gradient-to-b from-blue-950 from-25% via-blue-500 via-50% to-blue-100 to-80% h-fit flex justify-center pt-[50px] pb-[50px] relative z-100'>
                <img src={iphone16Main} alt="iphone16 image" className='w-[350px] md:w-[800px] md:h-[500px]'/> 
                <div className='absolute top-10 text-white text-[30px] md:text-[50px]'>
                    iPhone 16
                </div>

                <div className='absolute bottom-12 text-white px-7 py-3 bg-[#0872e3] rounded-full cursor-pointer'>
                    Learn more
                </div>
            </div>
            
            <div className='mt-3 bg-gray-100 h-fit flex justify-center pt-[200px] pb-[50px] md:pt-[250px] relative z-100'>
                <img src={macBook} alt="iphone16 image" className='w-[350px] md:w-[800px] md:h-[300px] object-contain'/> 
                <div className='absolute top-10 text-black flex flex-col items-center'>
                    <p className='text-[30px] md:text-[50px] mb-1'> MacBook Air </p>
                    <p className='text-[18px] md:text-[25px] -mt-3 mb-3'>Lean.Mean.M3 machine</p>
                    <div className=' text-white px-7 py-3 bg-[#0872e3] rounded-full cursor-pointer'>
                        Learn more
                    </div>
                </div>

            </div>


        </div>
    </>
  )
}

export default Hero