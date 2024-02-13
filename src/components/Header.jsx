/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
function Header() {


    let [open, setOpen] = useState(false);





    return (

        <div className='flex sticky top-0 z-40 justify-center w-full sm:px-24  h-28 items-center  text-white bg-black cursor-default '

        >



            <div className='logo sm:mr-12 invisible sm:visible'>
                <img src='	https://html.themexriver.com/Orixy/assets/img/logo/logo1.png' />
            </div>
            <ul className='flex sm:gap-10 font-[400] sm:text-base text-sm ' >
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

        </div>

    )
}

export default Header