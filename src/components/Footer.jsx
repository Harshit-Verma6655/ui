/* eslint-disable react/no-unknown-property */
import React from 'react'
import logo from '../assets/2.png';
import uni from '../assets/unified.png';
function Footer() {
    return (
        <div className='px-[20px] pt-[110px] w-full z-20' >
            <div className='h-[300px] w-full flex box-border flex-col sm:flex-row justify-center gap-[90px]'>
                <div >
                    <p className=" font-palanquin max-sm:text-[45px] max-sm:leading-[60px]  z-1 max-lg:z-0 leading-12 ">
                        <p className='text-white text-xl mb-3 flex items-center gap-2'><img width={60} src={uni} />Unified Investments</p>
                        <p className='text-gray-600'>Interior Design Center Inc. A USA based<br /> Photo Editing Company in Tokyo, <br />Japan. Corporation No. 524172-2, Check here</p>
                        <br />
                        <p className='text-base text-gray-600 my-3 flex'>
                            <svg className="w-[45px] h-[45px] text-yellow-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z" />
                            </svg>  +971 05 44 33 88 66
                        </p>
                        <p className='text-base text-gray-600 my-3 flex items-center'>
                            <svg className="w-[45px] h-[45px] text-yellow-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8-4.5a2 2 0 0 0-2 0L3 8m18 0-9 6.5L3 8" />
                            </svg>info.unifiedinvestments.ae</p>

                    </p>
                </div>
                <div className='flex flex-col text-white'>
                    <h2 className='mb-4'>Menu</h2>
                    <p className='text-gray-600'>Company</p>
                    <p className='text-gray-600'>Innvestors</p>
                    <p className='text-gray-600'>Products</p>
                    <p className='text-gray-600'>jopunral</p>
                    <p className='text-gray-600'>Reach us</p>
                </div>
                <div className='flex flex-col text-white'>
                    <h2 className='mb-4'>Useful links</h2>
                    <p className='text-gray-600'>Home</p>
                    <p className='text-gray-600'>Company</p>
                    <p className='text-gray-600'>Privacy Policy</p>
                    <p className='text-gray-600'>Terms & conditions</p>
                    <p className='text-gray-600'>Return & Refund</p>
                </div>

                <div>
                    <p className='text-white'>Follow us</p>
                    <div className='cursor-pointer'>
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer