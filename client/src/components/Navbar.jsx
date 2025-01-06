import Link from 'next/link';
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const Navbar = ({ currentAccount, connectAccount }) => {
  // Define States
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style jsx>
        {`
          .sticky {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 990;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      <nav className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link className="text-4xl font-semibold font-heading tracking-wider text-white hover:text-gray-200" href={"/"}>
                NFT Marketplace
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                {!menuOpen ? (
                  <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="text-white hover:text-gray-200 focus:outline-none"
                    aria-label="toggle menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="text-white hover:text-gray-200 focus:outline-none"
                    aria-label="toggle menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${menuOpen ? 'translate-x-0 opacity-100 h-[100vh]' : 'opacity-0 -translate-x-full'}`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link onClick={() => setMenuOpen(false)} className="px-4 py-2 mt-2 text-lg font-semibold text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700" href={'/'}>
                  Home
                </Link>

                <Link onClick={() => setMenuOpen(false)} className="px-4 py-2 mt-2 text-lg font-semibold text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700" href={'/mint'}>
                  Mint NFT
                </Link>

                <Link onClick={() => setMenuOpen(false)} className="px-4 py-2 mt-2 text-lg font-semibold text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700" href={'/shop'}>
                  Buy NFT
                </Link>

                <Link onClick={() => setMenuOpen(false)} className="px-4 py-2 mt-2 text-lg font-semibold text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700" href={'/about'}>
                  About Us
                </Link>

                <Link onClick={() => setMenuOpen(false)} className="px-4 py-2 mt-2 text-lg font-semibold text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700" href={'/contact'}>
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <Link onClick={() => setMenuOpen(false)} href={'/notification'}>
                  <button className="hidden mx-4 text-white transition-colors duration-300 transform lg:block hover:text-gray-200 focus:text-gray-200 focus:outline-none" aria-label="show notifications">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </Link>

                {currentAccount && (
                  <Link onClick={() => setMenuOpen(false)} href={'/profile'}>
                    <button type="button" className="flex items-center focus:outline-none">
                      <div className="w-8 h-8 overflow-hidden border-2 border-white rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" className="object-cover w-full h-full" alt="avatar" />
                      </div>
                    </button>
                  </Link>
                )}

                {currentAccount ? (
                  <Link href={'/mint'}>
                    <CustomButton handleClick={() => { }} text={'Create NFT'} />
                  </Link>
                ) : (
                  <CustomButton handleClick={connectAccount} text={'Connect Wallet'} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
