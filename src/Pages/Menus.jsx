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
import OrderButton from '../SharedComponents/OrderButton'
import { Link } from 'react-router-dom'

const Menus = () => {

    const { data, refetch, isLoading } = useMenus();
    const offers = data?.filter(offer => offer.category === 'offered');
    const deserts = data?.filter(desert => desert.category === 'dessert');
    const pizzas = data?.filter(pizza => pizza.category === 'pizza');
    const salads = data?.filter(salad => salad.category === 'salad');
    const soups = data?.filter(soup => soup.category === 'soup');
    console.log(data, offers, deserts?.category)

    if (isLoading) {
        return <div>Loadings...</div>
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menus</title>
            </Helmet>
            <Banner img={menuBanner} title={'OUR MENUS'} submenu={'Would you like to try a dish?'} />
            <Title title={"---Don't miss---"} subTitle={"TODAY'S OFFER"} />
            <div>
                <OffersMenus menus={offers} loading={isLoading} />
            </div>
            <div className='text-white'>
                <CommonBanner img={desertBanner} title={'DESERT'} />
            </div>
            <div>
                <OffersMenus menus={deserts} loading={isLoading} />
                <Link to={`/shop/${deserts[0]?.category}`}><OrderButton /></Link>
            </div>
            <div className='text-white'>
                <CommonBanner img={desertBanner} title={'PIZZA'} />
            </div>
            <div>
                <OffersMenus menus={pizzas} loading={isLoading} />
                <Link to={`/shop/${pizzas[0]?.category}`}><OrderButton /></Link>
            </div>
            <div className='text-white'>
                <CommonBanner img={saladBanner} title={'SALADS'} />
            </div>
            <div>
                <OffersMenus menus={salads} loading={isLoading} />
                <Link to={`/shop/${salads[0]?.category}`}><OrderButton /></Link>
            </div>
            <div className='text-white'>
                <CommonBanner img={soupsBanner} title={'SOUPS'} />
            </div>
            <div>
                <OffersMenus menus={soups} loading={isLoading} />
                <Link to={`/shop/${soups[0]?.category}`}><OrderButton /></Link>
            </div>
        </div>
    )
}

export default Menus
