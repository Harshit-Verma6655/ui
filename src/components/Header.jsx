/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
function Header() {


    let [open, setOpen] = useState(false);





    return (

        <div className='flex sticky top-0 z-40 justify-between w-full px-24  h-28 items-center bg-black text-white'>
            <div className='logo mr-12'>
                <img src='	https://html.themexriver.com/Orixy/assets/img/logo/logo1.png' />
            </div>
            <ul className='flex gap-10 font-[400] text-base'>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer'>COMPANY</li>

                <li className='hover:bg-white relative hover:text-black py-1 px-2 rounded cursor-pointer'
                    onMouseEnter={() => {
                        setOpen(true);
                    }}
                    onMouseLeave={() => {
                        setOpen(false)
                    }}

                >INVESTORS
                    <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                    </svg>
                    {open && <ul className='absolute top-8 -left-1 rounded text-center bg-gray-600 text-black w-32'>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold '>hello</li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold '>lorem</li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold '>ipsum</li>
                        <li className='hover:text-yellow-700 py-2 px-3 font-bold '>welcome</li>
                    </ul>}
                </li>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer'>PRODUCTS
                    <svg className="w-[16px] h-[16px] inline-block ml-1 hover:text-black  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                    </svg>
                </li>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer'>JOURNAL</li>
                <li className='hover:bg-white hover:text-black py-1 px-2 rounded cursor-pointer'>REACH US</li>
            </ul>

        </div>

    )
}

export default Header