import React from 'react'
import Card from './Card'

const Maps = ({ items }) => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20'>
                {
                    items?.map(item => <Card key={item?._id} item={item}></Card>)
                }
            </div>
        </div>
    )
}

export default Maps