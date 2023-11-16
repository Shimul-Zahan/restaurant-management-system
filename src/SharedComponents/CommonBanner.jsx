import React from 'react'

const CommonBanner = ({img, title}) => {
    return (
        <div className='w-full lg:h-[572px]' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
            <div className='flex h-full justify-center items-center'>
                <div className={`w-10/12 h-[350px] flex justify-center items-center ${title == 'BISTRO BOSS' ? 'bg-white' : 'bg-[#15151599]'}`}>
                    <div className='text-center space-y-5'>
                        <h1 className='text-2xl lg:text-4xl font-bold'>{ title}</h1>
                        <p className='lg:px-32 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// className = "bg-[url('banner')]
export default CommonBanner