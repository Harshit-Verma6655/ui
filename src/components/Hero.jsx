import { useState } from 'react';
import logo from '../assets/Screenshot 2024-02-12 193227.png'


export const HeroSection = () => {
    let [index, setIndex] = useState(0);

    const arr = [logo, "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1490381541006-5611e864dfc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://media.istockphoto.com/id/1295935658/photo/armchairs-and-coffee-table-in-classic-black-interior.jpg?s=1024x1024&w=is&k=20&c=FnTFJ13ke4GxSlUSmxqkNEtFDdEDJOJmItBVq7N4Yxc="]



    return (
        <div className='w-full flex box-border justify-center items-center'>
            <section

                className=" flex sm:flex-row w-full flex-col cursor-none items-center justify-center  gap-10  "

            >

                <div className="relative wrapper w-full  border-box px-4 sm:w-2/5 flex flex-col justify-center items-start  pt-10 md:pt-20 ">
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>


                    <h1 className=" font-palanquin   w-full font-bold z-1  leading-12 ">
                        <span className=" text-white  z-10  rounded-full text-4xl sm:text-6xl ">

                            <span className='text-slate-600'>Empower Your<br />
                                Business</span><span className='text-yellow-800'>FINANCE</span>
                        </span>
                        <br />
                        <span className="text-yellow-100 text-sm font-thin   inline mt-3  border-box ">
                            Your Expert Partner in swift Business Financing, Bridging Gaps, and Ensuring success. Thrive with us.
                        </span>
                    </h1>
                    <button className="font-montserrat pl-6 text-yellow-300 text-sm leading-8 mt-6 mb-14 ">
                        Discover more
                    </button>
                </div>

                <div className=" relative  text-center mb-8 flex justify-center items-center w-fit  ">
                    <button className='bg-white cursor-none bg-opacity-40 px-4 py-1 font-black rounded-full top-[200px] absolute left-[100px]  z-30 '
                        onClick={() => {

                            setIndex((prev) => {
                                if (prev == 0) {
                                    return 3;
                                } else {
                                    return --prev;
                                }
                            });
                        }}
                    >Back</button>
                    <img
                        src={arr[index]}
                        alt="quizzahut"


                        className=" relative h-[380px] -z-30 sm:w-[610px] w-full"
                    />
                    <button className='bg-white cursor-none bg-opacity-40 absolute px-4 py-1 font-black rounded-full right-[100px] top-[200px]  z-30  '
                        onClick={() => {

                            setIndex((prev) => {
                                if (prev == 3) {
                                    return 0;
                                } else {
                                    return ++prev;
                                }
                            });
                        }}

                    >Next</button>

                </div>
            </section>
        </div>
    );
};