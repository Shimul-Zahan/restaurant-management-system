import React from 'react'

const Banner = ({img, title, submenu}) => {
    return (
        <div className="hero lg:h-[800px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-[#15151599] w-10/12 h-[350px] mt-20">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{ title}</h1>
                    <p className="mb-5 text-xl">{ submenu}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner