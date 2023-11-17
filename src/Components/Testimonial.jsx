import React, { useEffect, useState } from 'react'
import Title from '../SharedComponents/Title';
import quote from '../assets/icon/quote.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data);
            });
    }, []);

    return (
        <div className='my-20'>
            <Title title={'---What Our Clients Say---'} subTitle={'TESTIMONIALS'} />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonial?.map(review => <SwiperSlide key={review._id}>
                        <div className='m-20 flex justify-center items-center flex-col gap-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                // onChange={setRating}
                            />
                            <img src={quote} alt="" className='mx-auto' />
                            <p className='text-lg text-center'>{review?.details}</p>
                            <h1 className='text-2xl font-bold'>{ review?.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default Testimonial