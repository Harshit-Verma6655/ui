import React from 'react'
import Carditem from './Carditem';
function Card() {
    return (
        <div className='flex gap-4 px-12 flex-wrap justify-center bg-transparent cursor-pointer w-full'>
            <Carditem />
            <Carditem />
            <Carditem />
        </div>
    )
}

export default Card;