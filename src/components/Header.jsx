/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
function Header() {


    let [open, setOpen] = useState(false);





    return (

        <div className='flex sticky top-0 z-40 justify-between w-full sm:pl-24  h-28 items-center  text-white bg-black cursor-default  '
        >
            <div className='logo sm:mr-12 text-center'>
                <img src='	https://html.themexriver.com/Orixy/assets/img/logo/logo1.png' className='  sm:w-40' />
            </div>
            <ul className='sm:flex sm:gap-10 font-[400] float-right hidden sm:visible sm:text-base text-xs w-fit ' >
                <li className='hover:bg-white hover:text-black font-bold py-1 px-2 rounded cursor-pointer '>COMPANY</li>

                <li className='hover:bg-white font-bold relative item hover:text-black py-1 px-2 rounded cursor-pointer'
                // onMouseEnter={() => {
                //     setOpen(true);
                // }}
                // onMouseLeave={() => {
                //     setOpen(false)
                // }}

                >INVESTORS
                    <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                    </svg>
                    {<ul className='absolute top-8 -left-1 drop rounded text-center bg-gray-600 text-black w-32'>
                        <li className='hover:text-yellow-700 py-2 px-3 flex flex-col justify-center font-bold relative '><a>hello</a></li>

                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>lorem</a></li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative'><a>ipsum</a></li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>welcome</a></li>
                    </ul>}
                </li>
                <li className='hover:bg-white relative item hover:text-black py-1 px-2 rounded cursor-pointer font-bold'>PRODUCTS
                    <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                    </svg>
                    {<ul className='absolute top-8 -left-1 drop rounded text-center bg-gray-600 text-black w-32'>
                        <li className='hover:text-yellow-700 py-2 px-3 flex flex-col justify-center font-bold relative '><a>hello</a></li>

                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>lorem</a></li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative'><a>ipsum</a></li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>welcome</a></li>
                    </ul>}
                </li>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer font-bold'>JOURNAL</li>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer font-bold'>REACH US</li>
            </ul>
            <div className={`sm:hidden float-right relative    `}>
                <svg className="w-[48px] h-[48px] text-white lines" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    onClick={() => setOpen(!open)}
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2.7" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
                </svg>
                {<ul className={`flex-col flex z-40 sm:gap-10 font-[400] absolute top-12 right-0 bg-black  sm:text-base text-xs w-screen p-4 nav  ${open ? "translate-x-0 " : "translate-x-full "} `}  >
                    <li className='hover:bg-white hover:text-black font-bold py-1 px-2 rounded cursor-pointer '>COMPANY</li>

                    <li className='hover:bg-white font-bold relative item hover:text-black py-1 px-2 rounded cursor-pointer'


                    >INVESTORS
                        <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                        </svg>
                        {<ul className='absolute top-8 -left-1 drop rounded text-center bg-gray-600 text-black w-32 z-10'>
                            <li className='hover:text-yellow-700 py-2 px-3 flex flex-col justify-center font-bold relative '><a>hello</a></li>

                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>lorem</a></li>
                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative'><a>ipsum</a></li>
                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>welcome</a></li>
                        </ul>}
                    </li>
                    <li className='hover:bg-white relative item hover:text-black py-1 px-2 rounded cursor-pointer font-bold z-0'>PRODUCTS
                        <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                        </svg>
                        {<ul className='absolute top-8 -left-1 drop rounded text-center bg-gray-600 text-black w-32 '>
                            <li className='hover:text-yellow-700 py-2 px-3 flex flex-col justify-center font-bold relative '><a>hello</a></li>

                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>lorem</a></li>
                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative'><a>ipsum</a></li>
                            <li className='hover:text-yellow-700 py-2 px-3 font-bold relative '><a>welcome</a></li>
                        </ul>}
                    </li>
                    <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer font-bold'>JOURNAL</li>
                    <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer font-bold'>REACH US</li>
                </ul>}
            </div>

        </div >

    )
}

export default Header