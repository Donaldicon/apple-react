import React, { useState } from 'react';
import AppleLogo from './AppleLogo';
import SearchLogo from './SearchLogo';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Hamburg = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='font-abc'>
        <div className='fixed w-full z-50 hidden md:flex flex-row items-center justify-between bg-[#181818] bg-opacity-80 backdrop-filter backdrop-blur-lg px-10 py-4 lg:px-[5%]'
        onMouseLeave={() => setActiveFlyout(null)}>

            <FlyoutLink
            FlyoutContent={None}
            isActive={activeFlyout === "appl"}
            setActive={() => setActiveFlyout("apple")}
            >
              <AppleLogo />
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={Mac}
            isActive={activeFlyout === "mac"}
            setActive={() => setActiveFlyout("mac")}
            >
              <div className='text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white font-abc'>
                <div className='absolute -top-6 left-0 right-0 h-6 bg-red'/>
                Mac
              </div>
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={Ipad}
            isActive={activeFlyout === "ipad"}
            setActive={() => setActiveFlyout("ipad")}
            >
              <div className='text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white font-abc'>
                  iPad
              </div>
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={Iphone}
            isActive={activeFlyout === "iphone"}
            setActive={() => setActiveFlyout("iphone")}
            >
              <div className='text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white font-abc'>
                  iPhone
              </div>
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={Support}
            isActive={activeFlyout === "support"}
            setActive={() => setActiveFlyout("support")}
            >
              <div className='text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white font-abc'>
                  Support
              </div>
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={Where}
            isActive={activeFlyout === "buy"}
            setActive={() => setActiveFlyout("buy")}
            >
              <div className='text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white font-abc'>
                  Where to Buy
              </div>
            </FlyoutLink>

            <FlyoutLink
            FlyoutContent={None}
            isActive={activeFlyout === "search"}
            setActive={() => setActiveFlyout("searc")}
            >
              <SearchLogo />
            </FlyoutLink>  
        </div>

        <div className="flex flex-row items-center justify-between fixed w-full bg-[#181818] bg-opacity-80 backdrop-filter backdrop-blur-lg md:hidden pl-5 py-4  z-30">
            <div className={`${isActive ? 'hidden' : 'flex'}`}>
                <FontAwesomeIcon
                icon={faApple}
                className='text-gray-300 text-xl transition-all cursor-pointer hover:text-white'
                />
            </div>
            <div className={`${isActive ? 'hidden' : 'flex'}`}>
                <FontAwesomeIcon
                icon={faSearch}
                className='text-gray-300 text-md transition-all cursor-pointer hover:text-white absolute top-[19px] right-20' 
                />
            </div>


            {/* Hamburger Icon */}
            <div className="relative h-[15px] w-[50px] ml-auto cursor-pointer -mr-[18px]" onClick={toggleMenu}>
                <span 
                className={`absolute h-[1px] w-[16px] bg-gray-300 hover:bg-white rounded-full transition-all duration-300 ease-linear ${
                isActive ? 'top-[10px] z-30 transform -translate-y-1/2 rotate-45' : 'top-[25%]'}`}>
                </span>
                <span
                className={`absolute h-[1px] w-[16px] bg-gray-300 hover:bg-white rounded-full transition-all duration-300 ease-linear ${
                isActive ? 'top-[10px] z-30 transform -translate-y-1/2 -rotate-45' : 'top-[75%]'}`}>
                </span>
            </div>

            {/* Menu Contents */}
            <div
              className={`absolute top-0 left-0 w-full bg-[#181818] transition-all duration-500 ease-in-out overflow-hidden ${
                isActive ? 'h-screen opacity-100' : 'h-0 opacity-0'
              }`}
            >
                {isActive && (
                  <div className="pt-[60px] pl-10 flex flex-col text-white">
                    <BrowserRouter>
                        <Link to="#home" className="text-2xl text-gray-300 py-2 hover:text-white transition-all duration-300 ease-linear">
                          <div className='flex justify-between items-center pr-9 group'>
                            <div>Mac</div>
                            <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'> &gt; </div>
                          </div>
                        </Link>
                    </BrowserRouter>
                    <BrowserRouter>
                        <Link to="#home" className="text-2xl py-2 text-gray-300 hover:text-white transition-all duration-300 ease-linear">
                          <div className='flex justify-between items-center pr-9 group'>
                            <div>iPad</div>
                            <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'> &gt; </div>
                          </div>
                        </Link>
                    </BrowserRouter>
                    <BrowserRouter>
                        <Link to="#home" className="text-2xl py-2 text-gray-300 hover:text-white transition-all duration-300 ease-linear">
                          <div className='flex justify-between items-center pr-9 group'>
                            <div>iPhone</div>
                            <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'> &gt; </div>
                          </div>
                        </Link>
                    </BrowserRouter>
                    <BrowserRouter>
                        <Link to="#home" className="text-2xl py-2 text-gray-300 hover:text-white transition-all duration-300 ease-linear">
                          <div className='flex justify-between items-center pr-9 group'>
                            <div>Support</div>
                            <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'> &gt; </div>
                          </div>
                        </Link>
                    </BrowserRouter>
                    <BrowserRouter>
                        <Link to="#home" className="text-2xl py-2 text-gray-300 hover:text-white transition-all duration-300 ease-linear">
                        <div className='flex justify-between items-center pr-9 group'>
                            <div>Where to Buy</div>
                            <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'> &gt; </div>
                          </div>
                        </Link>
                    </BrowserRouter>
                  </div>
                )}
            </div>
        </div>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, isActive, setActive }) => {
  return (
    <div
      onMouseEnter={setActive} 
      className="group relative h-fit w-fit"
      onMouseLeave={() => setActive(null)}
    >
      <a href={href} className="relative text-gray-300 text-[12px] transition-all duration-300 cursor-pointer hover:text-white ">
        {children}
        {/* Render underline animation */}
      </a>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0, ease: "easeInOut" }}
            className="fixed top-0 w-full inset-0 bg-[#181818] text-white z-50 mt-[52px] h-fit shadow-lg"
          >
            {/* Flyout content */}
            <div className="p-6 shadow-xl">
              <FlyoutContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Mac = () => {
  return (
    <div className="h-full w-full flex items-start bg-[#181818] px-4 lg:px-[8%] space-x-24">
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-2'>Explore Mac</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Explore All Mac</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Macbook Air</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Macbook Pro</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iMac</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Mac mini</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Mac Studio</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Mac Pro</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Displays</p>
      </div>

      
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-3'>More from Mac</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Mac Support</p>
      </div>


    </div>
  );
};

const Ipad = () => {
  return (
    <div className="h-full w-full flex items-start bg-[#181818] px-4 lg:px-[8%] space-x-24 mb-14">
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-2'>Explore iPad</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Explore All iPad</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPad Pro</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPad Air</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPad</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPad mini</p>
      </div>

      
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-3'>More from iPad</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>iPad Support</p>
      </div>


    </div>
  );
};

const Iphone = () => {
  return (
    <div className="h-full w-full flex items-start bg-[#181818] px-4 lg:px-[8%] space-x-24 mb-14">
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-2'>Explore iPhone</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Explore All iPhone</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone 16 Pro</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone 16</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone 15</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone 14</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone SE</p>
      </div>

      
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-3'>More from iPhone</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>iPhone Support</p>
      </div>


    </div>
  );
};

const Support = () => {
  return (
    <div className="h-full w-full flex items-start bg-[#181818] px-4 lg:px-[8%] space-x-24 mb-14">
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-2'>Explore Support</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPhone</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Mac</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>iPad</p>
        <p className='text-[18px] text-gray-200 cursor-pointer'>Music</p>
        <p className='text-[11px] text-gray-50 pt-2 cursor-pointer'>Explore Support</p>
      </div>

      
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-3'>Get Help</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Community</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Check Coverage</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Contact Us</p>
      </div>

      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-3'>Helpful Topics</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Apple Account and Password</p>
        <p className='text-[11px] text-gray-200 cursor-pointer'>Billing & Subscriptions</p>
      </div>


    </div>
  );
};

const Where = () => {
  return (
    <div className="h-full w-full flex items-start bg-[#181818] px-4 lg:px-[8%] space-x-24 mb-14">
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-gray-500 text-[11px] mb-2'>Explore</p>
        <p className='text-[18px] text-gray-200'>Authorized Resellers</p>
        <p className='text-[18px] text-gray-200'>Services and Support</p>
        <p className='text-[11px] text-gray-200 pt-2'>Explore All Ways to Buy</p>
      </div>

    </div>
  );
};

const None = () => {
  return(
    <div className='-pb-5'></div>
  )
};

export default Hamburg;
