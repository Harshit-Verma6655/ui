import { useState } from 'react';
import logo from '../assets/Screenshot 2024-02-12 193227.png'


export const HeroSection = () => {
    let [index, setIndex] = useState(0);

    const arr = [logo, "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1490381541006-5611e864dfc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://media.istockphoto.com/id/1295935658/photo/armchairs-and-coffee-table-in-classic-black-interior.jpg?s=1024x1024&w=is&k=20&c=FnTFJ13ke4GxSlUSmxqkNEtFDdEDJOJmItBVq7N4Yxc="]



    return (
        <div className='w-full flex  justify-center items-center'>
            <section

                className=" flex sm:flex-row flex-col cursor-none items-center justify-center  gap-10  "

            >

                <div className="relative wrapper  sm:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-10 md:pt-20 ">
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>


                    <h1 className=" font-palanquin text-6xl max-sm:text-[55px] max-sm:leading-[60px] font-bold z-1 max-lg:z-0 leading-12 ">
                        <span className=" text-white relative z-10 pr-10 rounded-full text-5xl ">

                            <span className='text-slate-600'>Empower Your<br />
                                Business</span><span className='text-yellow-800'>FINANCES</span>
                        </span>
                        <br />
                        <span className="text-yellow-100 text-sm font-thin  inline-block mt-3 pr-3 ">
                            Your Expert Partner in swift Business Financing, Bridging Gaps, and Ensuring success. Thrive with us.
                        </span>
                    </h1>
                    <button className="font-montserrat text-yellow-300 text-sm leading-8 mt-6 mb-14 ">
                        Discover more
                    </button>
                </div>

                <div className=" relative flex-1 text-center flex justify-center items-center w-fit  ">
                    <button className='bg-white cursor-none bg-opacity-40 px-2 py-1 font-bold rounded-full top-[300px] absolute left-[50px]  z-30 '
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
                        width={610}
                        height={500}
                        className=" relative -z-30 "
                    />
                    <button className='bg-white cursor-none bg-opacity-40 absolute px-2 py-1 font-bold rounded-full right-[50px] top-[300px]  z-30  '
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