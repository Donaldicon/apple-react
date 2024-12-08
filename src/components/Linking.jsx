import React, { useState } from 'react';

const Linking = () => {
  const [optionOpen, setOptionOpen] = useState(false);
  const [optionOpens, setOptionOpens] = useState(false);
  const [optionOpenss, setOptionOpenss] = useState(false);
  const [optionOpensss, setOptionOpensss] = useState(false);

  const toggleBar = () => {
    setOptionOpen(!optionOpen);
  };

  const toggleBars = () => {
    setOptionOpens(!optionOpens);
  };

  
  const toggleBarss = () => {
    setOptionOpenss(!optionOpenss);
  };

  const toggleBarsss = () => {
    setOptionOpensss(!optionOpensss);
  };


  return (
    <div className='bg-gray-100 font-abc'>
      <div className="bg-gray-100 mt-3 md:hidden">

        <div className="bg-gray-100 relative font-abc px-4">
          <div className="flex items-center justify-between pt-6">
            <div className="z-30 text-[12px]">Explore</div>
            <div
              className={`text-[14px] cursor-pointer transition-all z-30 duration-500 ${
                optionOpen ? 'rotate-180 transform' : 'rotate-0'
              }`}
              onClick={toggleBar}
            >
              ^
            </div>
          </div>
          {optionOpen && (
            <div className="pt-4 pl-4 space-y-3 text-[12px]">
              <p className='cursor-pointer hover:underline'>Mac</p>
              <p className='cursor-pointer hover:underline'>iPad</p>
              <p className='cursor-pointer hover:underline'>iPhone</p>
            </div>
          )}
          <div className="w-full h-[1px] rounded-full bg-gray-400 mb-2 mt-4" />
        </div>



        <div className="bg-gray-100 relative font-abc px-4">
          <div className="flex items-center justify-between pt-1">
            <div className="z-30 text-[12px]">Account</div>
            <div
              className={`text-[12px] cursor-pointer transition-all z-30 duration-500 ${
                optionOpenss ? 'rotate-180 transform' : 'rotate-0'
              }`}
              onClick={toggleBarss}
            >
              ^
            </div>
          </div>
          {optionOpenss && (
            <div className="pt-4 pl-4 space-y-3 text-[12px]">
              <p className='cursor-pointer hover:underline'>Manage Your Apple Account</p>
              <p className='cursor-pointer hover:underline'>iCloud.com</p>
            </div>
          )}
          <div className="w-full h-[1px] rounded-full bg-gray-400 mb-2 mt-4" />
        </div>


        <div className="bg-gray-100 relative font-abc px-4">
          <div className="flex items-center justify-between pt-2">
            <div className="z-30 text-[12px]">Apple Values</div>
            <div
              className={`text-[14px] cursor-pointer transition-all z-30 duration-500 ${
                optionOpensss ? 'rotate-180 transform' : 'rotate-0'
              }`}
              onClick={toggleBarsss}
            >
              ^
            </div>
          </div>
          {optionOpensss && (
            <div className="pt-4 pl-4 space-y-3 text-[12px]">
              <p className='cursor-pointer hover:underline'>About</p>
            </div>
          )}
          <div className="w-full h-[1px] rounded-full bg-gray-400 mb-2 mt-4" />
        </div>



        <div className="bg-gray-100 relative font-abc px-4">
          <div className="flex items-center justify-between pt-2">
            <div className="z-30 text-[12px]">About Apple</div>
            <div
              className={`text-[14px] cursor-pointer transition-all z-30 duration-500 ${
                optionOpens ? 'rotate-180 transform' : 'rotate-0'
              }`}
              onClick={toggleBars}
            >
              ^
            </div>
          </div>
          
          {optionOpens && (
            <div className="pt-4 pl-4 space-y-3 text-[12px]">
              <p className='cursor-pointer hover:underline'>Newsroom</p>
              <p className='cursor-pointer hover:underline'>Apple Leadership</p>
              <p className='cursor-pointer hover:underline'>Ethics & Compliance</p>
              <p className='cursor-pointer hover:underline'>Investors</p>
              <p className='cursor-pointer hover:underline'>Ethics & Compliance</p>
            </div>
          )}
          <div className="w-full h-[1px] rounded-full bg-gray-400 mb-2 mt-4" />
        </div>
      </div>



      {/* md and larger */}

      <div className='pl-8 pr-[100px] hidden flex-row justify-between items-start md:flex lg:pl-[5%] lg:pr-[20%] bg-gray-100 mt-3 pt-5'>
          <div className='text-gray-500 text-[11px] space-y-2'>
            <h1 className='text-black'>Explore</h1>
            <p className='cursor-pointer hover:underline'>Mac</p>
            <p className='cursor-pointer hover:underline'>iPad</p>
            <p className='cursor-pointer hover:underline'>iPhone</p>
          </div>

          
          <div className='text-gray-500 text-[11px] space-y-2'>
            <h1 className='text-black'>Account</h1>
            <p className='cursor-pointer hover:underline'>Manage Your Apple Account</p>
            <p className='cursor-pointer hover:underline'>iCloud.com</p>
          </div>

          <div className='text-gray-500 text-[11px] space-y-2'>
            <h1 className='text-black'>Apple Values</h1>
            <p className='cursor-pointer hover:underline'>Privacy</p>
          </div>

          <div className='text-gray-500 text-[11px] space-y-2'>
            <h1 className='text-black'>About Apple</h1>
            <p className='cursor-pointer hover:underline'>Newsroom</p>
            <p className='cursor-pointer hover:underline'>Apple Leadership</p>
            <p className='cursor-pointer hover:underline'>Career Opportunities</p>
            <p className='cursor-pointer hover:underline'>Investors</p>
            <p className='cursor-pointer hover:underline'>Ethics & Compliance</p>
          </div>

      </div>
      <div className='text-gray-500 text-[11px] pt-7 pb-4 lg:pl-[5%] lg:pr-[20%] pl-4 md:pl-8 pr-[100px]'>
        <span className='text-blue-500 underline pointer'>Find a retailer</span> near you.
      </div>  

      <div className='hidden md:block md:px-8 lg:px-[5%]'>
        <div className="w-full h-[1px] rounded-full bg-gray-400 mb-2" />   
      </div>  

      <div className='text-[11px] flex flex-col pt-2 px-4 md:px-8 lg:px-[5%] space-y-5 md:space-y-0 md:flex md:flex-row-reverse md:items-start md:justify-between text-gray-500 pb-5'>
        <p>Nigeria</p>
        <div className='flex flex-col space-y-1 lg:flex-row lg:space-y-0 lg:space-x-6'>
          <p>Copyright 2024 Apple Inc. All rights reserved.</p>
          <p>Terms of Use | Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Linking;
