import React from 'react'

const Title = ({ title, subTitle }) => {
    return (
        <div className='text-center lg:mt-20'>
            <h1 className='text-yellow-500 italic text-lg'>{title}</h1>
            <h1 className='text-2xl font-thin'>{subTitle}</h1>
        </div>
    )
}

export default Title