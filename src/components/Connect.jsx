import React from 'react'

function connect() {
    return (
        <div className='office h-[400px] w-full flex flex-col justify-center items-center text-center '>
            <h1 className='sm:text-5xl text-xl font-bold w-[75%] text-yellow-600'>We are Dedicated <span className='text-white'>to the Expansion
                of </span>
                your Business </h1>
            <div className='flex flex-col sm:flex-row mt-12 gap-6'>
                <button className='text-[30px] bg-yellow-400 px-12 font-semibold py-4'><span className='text-yellow-600 '>FOR </span>INDIVIDUAL</button>
                <button className='text-[30px] bg-yellow-400 px-12 font-semibold py-4'><span className='text-yellow-600 '>FOR </span>CORPORATE</button>
            </div>
            <button className='mt-8 border-2 px-3 py-1 border-yellow-700 text-yellow-700 w-fit '>Let's connect</button>
        </div>
    )
}

export default connect