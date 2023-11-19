import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenus from '../../Hooks/useMenus';
import Maps from './Maps';
import { useParams } from 'react-router-dom';

const ShopTabs = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const { data, refetch, isLoading } = useMenus();
    const deserts = data?.filter(desert => desert.category === 'dessert');
    const pizzas = data?.filter(pizza => pizza.category === 'pizza');
    const salads = data?.filter(salad => salad.category === 'salad');
    const soups = data?.filter(soup => soup.category === 'soup');
    const drinks = data?.filter(drink => drink.category === 'drinks');

    return (
        <div className='mb-10'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex justify-center items-center gap-5 focus:border-b-2'>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <Maps items={salads}></Maps>
                </TabPanel>
                <TabPanel>
                    <Maps items={pizzas}></Maps>
                </TabPanel>
                <TabPanel>
                    <Maps items={soups}></Maps>
                </TabPanel>
                <TabPanel>
                    <Maps items={deserts}></Maps>
                </TabPanel>
                <TabPanel>
                    <Maps items={drinks}></Maps>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ShopTabs