import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Topbar from '@components/Topbar';
import Crossmark from '@Images/navbar/crossmark.png';
import Home from '@Images/navbar/home.svg';
import About from '@Images/navbar/about.svg';
import Compare from '@Images/navbar/compare.svg';
import Location from '@Images/navbar/location.svg';
import Loan from '@Images/navbar/loan.svg';
import ContentGallery from '@Images/navbar/contentGallery.svg';
import Blog from '@Images/navbar/blog.svg';
import Contact from '@Images/navbar/call.svg';
import Facebook from '@Images/navbar/facebook.png';
import Xpath from '@Images/navbar/Xpath.png';
import Indeed from '@Images/navbar/indeed.png';
import Instagram from '@Images/navbar/instagram.png';
import Search from '@Images/topbar/search.svg';
import Logo from '@Images/navbar/logo.svg';
import NavbarSearch from '@Images/navbar/search.svg'
import MblLogo from '@Images/navbar/mblLogo.svg'
import EndTractor from '@Images/navbar/endTractor.png'
 

export default function Navbar({ currentPage }) {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const openNavbar = () => {
    setIsNavbarOpen(true);
  };
  const hideNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      {/* <Topbar /> */}
      <nav className=" bg-white z-10 sm:py-0 py-2">
        <div className="flex sm:flex-nowrap flex-wrap items-center sm:justify-between mx-auto sm:py-1
         py-0 lg:px-14 md:px-6 sm:px-3">

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center
       p-2 w-10 h-10 justify-center text-sm text-secondaryColorrounded-lg sm:hidden dark:text-gray-400
        dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default"
            aria-expanded="false" onClick={openNavbar}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <a href="./" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Logo} alt="Tractor World Logo" />
          </a>

          <span className="sm:hidden ml-auto mr-2 mt-1">
            <Image src={Search} alt="Search" />
          </span>

          <div className="sm:hidden items-center flex bg-secondaryColor px-4 py-1
         text-white text-sm mr-2 border-gradient">
            {/* <div><img src="/images/navbar/calculator.png" alt="Sell"
              className="w-3 mr-1" /></div> */}
            {/* <a href="/sell-tractor">Sell</a> */}

            <Link href="/sell-tractor" >
                    <a>Sell</a>
             </Link>
            </div>

          <div className={`${isNavbarOpen ? 'block' : 'hidden'} transition-max-height duration-300 
        ease-in-out w-full sm:block sm:w-auto`} id="navbar-default">

            <div className="sm:w-auto w-[280px] sm:h-auto h-screen
         sm:bg-transparent bg-white z-50 sm:relative fixed top-0 py-4 Navbar">
              <div className="sm:hidden block px-4 ">
                <div className="flex justify-between">
                  <Link href="./" >
                    <a className="self-center text-2xl font-semibold 
              whitespace-nowrap dark:text-white">
                      <Image src={MblLogo} alt="mblLogo"></Image>
                    </a>
                  </Link>
                  <div>
                    <Image src={Crossmark} onClick={hideNavbar} className="crossIcon" alt="Crossmark" /></div>
                </div>
                <div className="flex my-3">

                  <Link href="/tractor-details#compareTractor" >
                    <a className="text-[.84rem] pr-4">Compare Tractor</a>
                  </Link>

                  <Link href="#testimonials" >
                    <a className="text-[.84rem] pl-4 border-l border-[#EFEAEA]">
                      Testimonials</a></Link>

                </div>
                <hr className=" border-l border-[#EFEAEA]" />
              </div>

              <ul className="font-medium flex flex-col mt-3 sm:mt-0 sm:flex-row 
             xl:space-x-2 lg:space-x-1 md:space-x-2 sm:space-x-2 rtl:space-x-reverse
              sm:items-center xl:text-base lg:text-sm
               sm:text-[0.7rem] text-[.84rem]  sm:px-0 sm:py-0 px-4">

                {/* <Link href="/">
                  <a className={`${currentPage == "home" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}
                    aria-current="page">
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Home} /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "home" ? 'active' : ''}`}>Home</span>
                    </div>
                  </a>
                </Link> */}

                <Link href="/aboutus" >
                  <a className={`${currentPage == "about" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={About} alt="about" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "about" ? 'active' : ''}`}>About Us</span>
                    </div>
                  </a>
                </Link>

                <Link href="/compare-tractors" >
                  <a className={`${currentPage == "compare" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Compare} alt="compare" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "compare" ? 'active' : ''}`}>Compare</span>
                    </div>
                  </a>
                </Link>

                <Link href="/dealer-locator" >
                  <a className={`${currentPage == "dealerLocator" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Location} alt="location" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "dealerLocator" ? 'active' : ''}`}>Locate Dealer</span>
                    </div>
                  </a>
                </Link>

                <Link href="/loan" >
                  <a className={`${currentPage == "loan" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Loan} alt="loan" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "loan" ? 'active' : ''}`}>Loan</span>
                    </div>
                  </a>
                </Link>

                <Link href="/content-gallery" >
                  <a className={`${currentPage == "contentGallery" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={ContentGallery} alt="ContentGallery" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "contentGallery" ? 'active' : ''}`}>Content Gallery</span>
                    </div>
                  </a>
                </Link>

                {/* <Link href="/sell-tractor">
                  <a className={`${currentPage == "sellTractor" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Tractor} /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "sellTractor" ? 'active' : ''}`}>Sell Tractor</span>
                    </div>
                  </a>
                </Link> */}

                {/* <div className="relative sell_tractor">
                  <li>
                    <a href="#" className="block py-2 md:px-3 text-black md:p-0 
                    hover:md:text-secondaryColor">
                      <div className="flex items-center">
                        <span className="sm:hidden block"><Image src={Tractor} /></span>
                        <span className="sm:ml-0 ml-2">Sell Tractor </span>
                        <svg className="lg:w-2.5 lg:h-2.5 md:w-2 md:2 sm:w-2 sm:h-2 w-2.5 h-2.5 md:ms-3 sm:ms-1 ms-3" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </div>
                    </a>
                  </li>

                  <div
                    id="sell_tractorInformation"
                    className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow
                    xl:w-32 sm:w-28 w-32 dark:bg-gray-700 dark:divide-gray-600  xl:text-base lg:text-sm
               sm:text-xs text-sm">

                    <ul
                      className="py-2 xl:text-base lg:text-sm
                      sm:text-xs text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownInformationButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100
                           dark:hover:bg-gray-600
                         dark:hover:text-white">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 
                      hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
                       dark:hover:text-white">
                        Sign out
                      </a>
                    </div>
                  </div>
                </div> */}

                {/* <div className="relative loanConteiner">
                  <li>
                    <a href="#" className="hover:md:text-secondaryColor block py-2 md:px-3
                     text-black md:p-0">
                      <div className="flex items-center">
                        <span className="sm:hidden block"><Image src={Loan} /></span>
                        <span className="sm:ml-0 ml-2">Loan </span>

                        <svg className="lg:w-2.5 lg:h-2.5 md:w-2 md:2 sm:w-2 sm:h-2 w-2.5 h-2.5 md:ms-3 sm:ms-1 ms-3" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <div
                    id="loanInformation"
                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg 
                      shadow xl:w-32 sm:w-28 w-32 dark:bg-gray-700 dark:divide-gray-600">

                    <ul
                      className="py-2 xl:text-base lg:text-sm
                      sm:text-xs text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownInformationButton"
                    >
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100
                           dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 
                          dark:hover:bg-gray-600dark:hover:text-white">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2  text-gray-700 hover:bg-gray-100
                         dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>

                <Link href="/exclusive-offers">
                  <a className={`${currentPage == "offers" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Offers} /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "offers" ? 'active' : ''}`}>Offers</span>
                    </div>
                  </a>
                </Link> */}

                {/* <li>
                  <a href="#" className="hover:md:text-secondaryColor block py-2 md:px-3
                   text-black md:p-0">
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Blog} /></span>
                      <span className="sm:ml-0 ml-2">Blog</span>
                    </div>
                  </a>
                </li> */}

                <Link href="/contact-us">
                  <a className={`${currentPage == "contact" ? 'text-secondaryColor font-bold' : ''} hover:md:text-secondaryColor block py-3 md:px-3 md:p-0`}>
                    <div className="flex items-center">
                      <span className="sm:hidden block"><Image src={Contact} alt="Contact-image" /></span>
                      <span className={`md:ml-0 ml-2 ${currentPage == "contact" ? 'active' : ''}`}>Contact us</span>
                    </div>
                  </a>
                </Link>

                <li className="sm:block hidden">
                  <div className="flex items-center relative top-[.15rem]">
                    <Image src={NavbarSearch} className="cursor-pointer" alt="NavbarSearch"
                      width={45} height={45} />
                  </div>
                </li>

                <li className="sm:block hidden">
                  <div className="items-center flex bg-secondaryColor px-6 py-[0.3rem] text-white 
                   border-gradient xl:text-base lg:text-sm cursor-pointer
                  sm:text-xs text-sm">
                    {/* <div>
                      <img src="/images/navbar/calculator.png" alt="EMI Calculator" className="w-3 mr-1" /></div> */}
                    {/* <a href="/sell-tractor"> Sell </a> */}
                    <Link href="/sell-tractor">
                    <a>Sell</a>
                  </Link>
                    </div>
                </li>
              </ul>

              <div className="sm:hidden block mt-3 px-4 ">
                <hr></hr>
                <p className="my-3 text-[0.84rem">Connect with Tractor World</p>
                <div className="my-4 flex gap-2">
                  <Image src={Facebook} alt="facebook" />
                  <Image src={Xpath} alt="xpath" />
                  <Image src={Indeed} alt="indeed" />
                  <Image src={Instagram} alt="instagram" />
                </div>
              </div>

              <div className="sm:hidden block">
                <Image src={EndTractor}
                  className="w-full relative bottom-0 left-0" alt="sidebarFooterImage" />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>

    // <div className="navbar bg-primaryColor text-white">
    //   <div className="flex-1">
    //     <a className="btn btn-ghost text-xl">Tractor World</a>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1">

    //       <li>
    //         <details>
    //           <summary>
    //             Language
    //           </summary>
    //           <ul className="p-2 bg-primaryColor text-white rounded-t-none">
    //               {locales.map((locale) => {
    //               return (
    //               <li key={locale}> 
    //               <Link href={asPath} locale={locale}>
    //               <a className="text-white">{locale.toUpperCase()}</a>
    //               </Link>
    //               </li>
    //               );
    //               })}
    //           </ul>
    //         </details>
    //       </li>
    //     </ul>
    //   </div>
    // </div> 
  );
}