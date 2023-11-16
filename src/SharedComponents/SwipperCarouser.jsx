import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'

const SwipperCarouser = () => {
    return (
        <div className='my-20'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='lg:lg:text-4xl font-bold text-center -mt-16 text-white'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='lg:text-4xl font-bold text-center -mt-16 text-white'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='lg:text-4xl font-bold text-center -mt-16 text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='lg:text-4xl font-bold text-center -mt-16 text-white'>Deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='lg:text-4xl font-bold text-center -mt-16 text-white'>Sweets</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwipperCarouser