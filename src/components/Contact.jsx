/* eslint-disable react/no-unknown-property */
import React from 'react'

function Contact() {
    return (
        <div className='bg-gray-900 w-full h-[600px] px-5 mb-[80px] relative'>
            <section
                id="home"
                className="w-full flex xl:flex-row flex-col items-center min-h-screen max-container  "
            >
                <div className=" xl:w-2/5 flex mt-3 pl-12 flex-col justify-center items-start w-full   ">

                    <h1 className=" font-palanquin text-6xl max-sm:text-[45px] max-sm:leading-[60px]  z-1 max-lg:z-0 leading-12 ">
                        <span className=" text-white   rounded-full text-5xl ">

                            <span className='text-slate-600 font-bold'>Let's Get In</span><span className='text-yellow-800 font-bold'>Touch With Us</span>
                        </span>
                        <br />
                        <p className='text-base text-gray-300 my-3 flex'>
                            <svg className="w-[45px] h-[45px] text-yellow-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z" />
                            </svg>  +971 05 44 33 88 66
                        </p>
                        <p className='text-base text-gray-300 my-3 flex items-center'>
                            <svg className="w-[45px] h-[45px] text-yellow-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8-4.5a2 2 0 0 0-2 0L3 8m18 0-9 6.5L3 8" />
                            </svg>info.unifiedinvestments.ae</p>
                        <p className='text-base text-gray-300 my-3 flex items-center'>
                            <svg className="w-[45px] h-[45px] text-yellow-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
                            </svg>
                            Unified Investments, 2nd floor, Al Amal St-Business Bay-Dubai, United Arab Emirates</p>
                    </h1>

                </div>

                <div className=" relative flex-1 flex justify-center items-center   ">
                    <img
                        src={"https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt="quizzahut"
                        width={400}
                    />
                    <img
                        src={"https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt="quizzahut"
                        width={400}

                        className='absolute top-7 right-[100px]'
                    />
                    <img
                        src={"https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt="quizzahut"
                        width={400}

                        className='absolute top-16 right-[50px]'
                    />

                </div>
            </section>
            <div className='absolute w-full flex justify-center bg-yellow-500 '>
                <div className='absolute w-[85%] h-[120px] bg-yellow-500 -bottom-16 flex items-center justify-around text-5xl font-bold'>
                    <p className='text-2xl text-yellow-900'>Media &<br />
                        Publications</p>
                    <p>Forbes</p>
                    <p>Fortune</p>
                    <p>Outlook</p>
                </div>
            </div>
        </div>
    )
}

export default Contact