import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../SharedComponents/Banner'
import menuBanner from '../assets/menu/banner3.jpg'
import Title from '../SharedComponents/Title'
import OffersMenus from '../Components/Menus/OffersMenus'
import CommonBanner from '../SharedComponents/CommonBanner'
import desertBanner from '../assets/menu/dessert-bg.jpeg'
import pizzaBanner from '../assets/menu/pizza-bg.jpg'
import saladBanner from '../assets/menu/salad-bg.jpg'
import soupsBanner from '../assets/menu/soup-bg.jpg'
import useMenus from '../Hooks/useMenus'

const Menus = () => {

    const { menus, loading } = useMenus();
    const offers = menus.filter(offer => offer.category === 'offered');
    const deserts = menus.filter(desert => desert.category === 'dessert');
    const pizzas = menus.filter(pizza => pizza.category === 'pizza');
    const salads = menus.filter(salad => salad.category === 'salad');
    const soups = menus.filter(soup => soup.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menus</title>
            </Helmet>
            <Banner img={menuBanner} title={'OUR MENUS'} submenu={'Would you like to try a dish?'} />
            <Title title={"---Don't miss---"} subTitle={"TODAY'S OFFER"} />
            <div>
                <OffersMenus menus={offers} loading={loading} />
            </div>
            <div className='text-white'>
                <CommonBanner img={desertBanner} title={'DESERT'} />
            </div>
            <div>
                <OffersMenus menus={deserts} loading={loading} />
            </div>
            <div className='text-white'>
                <CommonBanner img={desertBanner} title={'PIZZA'} />
            </div>
            <div>
                <OffersMenus menus={pizzas} loading={loading} />
            </div>
            <div className='text-white'>
                <CommonBanner img={saladBanner} title={'SALADS'} />
            </div>
            <div>
                <OffersMenus menus={salads} loading={loading} />
            </div>
            <div className='text-white'>
                <CommonBanner img={soupsBanner} title={'SOUPS'} />
            </div>
            <div>
                <OffersMenus menus={soups} loading={loading} />
            </div>
        </div>
    )
}

export default Menus
