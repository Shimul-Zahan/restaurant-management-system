import React from 'react'
import banner from '../assets/home/chef-service.jpg'

const CommonBanner = () => {
    return (
        <div className='w-full lg:h-[572px]' style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
            <div className='flex h-full justify-center items-center'>
                <div className='w-10/12 h-[450px] bg-white flex justify-center items-center'>
                    <div className='text-center space-y-5'>
                        <h1 className='text-2xl lg:text-4xl font-bold'>Bistro Boss</h1>
                        <p className='lg:px-32 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// className = "bg-[url('banner')]
export default CommonBanner