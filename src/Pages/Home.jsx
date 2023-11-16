import React from 'react'
import Carouser from '../SharedComponents/Carouser'
import Title from '../SharedComponents/Title'
import SwipperCarouser from '../SharedComponents/SwipperCarouser'
import PopularMenus from '../Components/PopularMenus'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carouser />
            <div className='my-20'>
                <Title title={"--- From 11:00am to 10:00pm---"} subTitle={"ORDER ONLINE"} />
            </div>
            <SwipperCarouser />
            <div className='my-20'>
                <Title title={"---Cheek it out---"} subTitle={"FROM OUR MENU"} />
            </div>
            <div>
                <PopularMenus />
            </div>
        </div>
    )
}

export default Home