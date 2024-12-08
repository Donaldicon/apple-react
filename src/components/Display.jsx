import React from 'react'
import iPad from '../assets/ipad.jpg'
import iPadAir from '../assets/ipad-air.png'
import macBookPro from '../assets/macbook-pro.png'
import lovableIpads from '../assets/lovable-ipads.png'

const Display = () => {
  return (
    <div className='px-0 md:px-4 mt-4 font-abc mb-3'>
        <div>           
            <div className='flex flex-col items-center justify-center space-y-3 md:space-y-0 md:space-x-4 md:flex-row mt-4'>
                <div className='relative w-full cursor-pointer h-[480px] bg-black flex flex-col justify-center items-center'>
                    <img src={macBookPro} alt="" className='w-[320px] h-[300px] object-contain md:w-[600px] mt-36' />
                    <div className='flex justify-center'>
                    <div className='absolute top-8 text-white flex flex-col items-center'>
                        <p className='text-[50px] md:text-[30px] mb-1'> MacBook Pro </p>
                        <p className='text-[18px] md:text-[18px] -mt-2 text-wrap align-middle mb-3'>A work of smart.</p>
                        <div className=' text-white px-5 py-2 bg-[#0872e3] rounded-full cursor-pointer mt-1'>
                            Learn more
                        </div>
                    </div>
                    </div>
                </div>

                <div className='relative w-full cursor-pointer h-[480px] bg-gradient-to-b from-[#AFDCED] to-[#ecefef] flex flex-col justify-center items-center'>
                    <img src={iPadAir} alt="" className='w-[320px] h-[300px] object-contain md:w-[600px] mt-[240px] md:h-[400px] lg:w-[500px] lg:h-[500px] lg:mt-[330px]' />
                    <div className='flex justify-center'>
                    <div className='absolute top-8 text-white flex flex-col items-center'>
                    <p className='text-[50px] md:text-[30px] mb-1'> iPad <span className='text-blue-400 italic font-abc'>air</span> </p>
                        <p className='text-[18px] md:text-[18px] -mt-2 text-wrap align-middle mb-3'>Two sizes. Faster chip. Does it all.</p>
                        <div className=' text-white px-5 py-2 bg-[#000] rounded-full cursor-pointer'>
                            Learn more
                        </div>
                    </div>
                    </div>
                </div>
            </div>



            
            <div className='flex flex-col items-center justify-center space-y-3 md:space-y-0 md:space-x-4 md:flex-row mt-4'>
                <div className='relative w-full cursor-pointer h-[480px] bg-black flex flex-col justify-center items-center'>
                    <img src={iPad} alt="" className='w-[320px] h-[300px] object-contain md:w-[600px] mt-36' />
                    <div className='flex justify-center'>
                    <div className='absolute top-8 text-white flex flex-col items-center'>
                        <p className='text-[50px] md:text-[30px] mb-1'> iPad Pro </p>
                        <p className='text-[18px] md:text-[18px] -mt-2 text-wrap text-center  mb-3 lg:hidden '>Unbelievably thin.</p>
                        <p className='-mt-3 mb-3 lg:hidden '>Incredibly powerful.</p>
                        <p className='hidden lg:block'> Unbelievably thin. Incredibly powerful.  </p>
                        <div className=' text-white px-5 py-2 bg-[#0872e3] rounded-full cursor-pointer lg:mt-4 '>
                            Learn more
                        </div>
                    </div>
                    </div>
                </div>

                <div className='relative w-full cursor-pointer h-[480px] bg-gray-50 flex flex-col justify-center items-center'>
                    <img src={lovableIpads} alt="" className='w-[320px] h-[220px] object-contain md:w-[400px] mt-[170px] md:h-[300px] lg:w-[500px] lg:h-[300px] lg:mt-[175px]' />
                    <div className='flex justify-center'>
                    <div className='absolute top-8 text-black flex flex-col items-center'>
                        <p className='text-[50px] md:text-[30px] mb-1'>iPad</p>
                        <p className='text-[18px] md:text-[18px] -mt-2 text-wrap align-middle mb-3'>Lovable. Drawable. Magical</p>
                        <div className=' text-white px-5 py-2 bg-[#0872e3] rounded-full cursor-pointer'>
                            Learn more
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Display