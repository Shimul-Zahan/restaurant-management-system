import React from 'react'
import { Helmet } from 'react-helmet'
import shopBanner from '../assets/shop/banner2.jpg'
import Banner from '../SharedComponents/Banner'
import ShopTabs from '../Components/Shops/ShopTabs'

const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <div className='mb-20'>
                <Banner img={shopBanner} title={'OUR SHOP'} submenu={'Would you like to try a dish?'} />
            </div>
            <ShopTabs />
        </div>
    )
}

export default OurShop