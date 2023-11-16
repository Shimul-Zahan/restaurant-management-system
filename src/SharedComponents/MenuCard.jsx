import React from 'react'
// import img from '../assets/home/01.jpg'

const MenuCard = ({image, name, recipe}) => {
    return (
        <div className=''>
            <div className='flex justify-start gap-5'>
                <div>
                    <img src={image} alt="" className='h-[104px] w-[118px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' />
                </div>
                <div>
                    <h1 className='text-xl'>{name} ------------------</h1>
                    <p className='text-lg text-[#737373]'>{ recipe }</p>
                </div>
                <div>
                    <h1 className='text-[#BB8506] text-xl'>$14.5</h1>
                </div>
            </div>
        </div>
    )
}

export default MenuCard