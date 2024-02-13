import React from 'react'
import Carditem from './Carditem';
function Card() {
    return (
        <div className='flex gap-4  flex-wrap justify-center bg-transparent cursor-pointer w-full box-border'>
            <Carditem />
            <Carditem />
            <Carditem />
        </div>
    )
}

export default Card;