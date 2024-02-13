import React from 'react'

function Explore() {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <div className='my-8 sm:flex-row flex flex-col '>
                <div className='img1 sm:w-[500px] w-full h-[500px]  px-6 flex flex-col justify-center'>
                    <div className='flex flex-col justify-center text-xs '>
                        <p className='text-yellow-300 flex justify-between mb-3'>
                            DEVELOPMENT <span>11 march 2023</span>
                        </p>
                        <h1 className='text-red-300 font-bold text-xl mb-3'>
                            Best Website to research for your next
                            project
                        </h1>
                        <p className='text-sm text-yellow-100'>
                            Capitalize on low hanging fruit to identify a ballpark value
                            added activity to beta test. Override the digital divide with
                            additional clickthroughs
                        </p>
                        <button className='text-yellow-400 text-sm font-bold text-left'>Read more...</button>
                    </div>
                </div>
                <div>
                    <div className='img2 sm:w-[300px] w-full h-[250px]'>

                    </div>
                    <div className='img3 sm:w-[300px] w-full h-[250px] p-3'>
                        <div className='flex flex-col justify-center '>
                            <p className='text-yellow-100 flex justify-between text-xs mb-3'>
                                DEVELOPMENT <span>11 march 2023</span>
                            </p>
                            <h1 className='text-gray-400 font-bold  text-sm mb-3'>
                                Best Website to research for your next
                                project
                            </h1>
                            <p className='text-xs text-gray-500 mb-2'>
                                Capitalize on low hanging fruit to identify a ballpark value
                                added activity to beta test. Override the digital divide with
                                additional
                            </p>
                            <button className='text-yellow-100 text-sm font-bold text-left'>Read more...</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='img3 sm:w-[300px] w-full h-[250px]'>
                        <div className='img3 w-[300px] h-[250px] p-3'>
                            <div className='flex flex-col justify-center '>
                                <p className='text-yellow-100 flex justify-between text-xs mb-3'>
                                    DEVELOPMENT <span>11 march 2023</span>
                                </p>
                                <h1 className='text-gray-400 font-bold text-sm mb-3'>
                                    Best Website to research for your next
                                    project
                                </h1>
                                <p className='text-xs text-gray-500 mb-2'>
                                    Capitalize on low hanging fruit to identify a ballpark value
                                    added activity to beta test. Override the digital divide with
                                    additional
                                </p>
                                <button className='text-yellow-100 text-sm font-bold text-left'>Read more...</button>
                            </div>
                        </div>
                    </div>
                    <div className='img4 sm:w-[300px] w-full h-[250px]'>

                    </div>
                </div>

            </div>
            <button className='mt-6 border-2 px-3 border-yellow-700 text-yellow-700 w-fit '>Explore more...</button>
        </div>
    )
}

export default Explore