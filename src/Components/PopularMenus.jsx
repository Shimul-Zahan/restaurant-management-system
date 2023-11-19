import React, { useEffect, useState } from 'react'
import MenuCard from '../SharedComponents/MenuCard';
import useMenus from '../Hooks/useMenus';

const PopularMenus = () => {

    const { data, refetch, isLoading } = useMenus();
    const popularProducts = data?.filter(product => product.category === 'popular');
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            {
                popularProducts?.map(menu =>
                    <MenuCard
                        key={menu?._id}
                        image={menu?.image}
                        name={menu?.name}
                        recipe={menu?.recipe}
                    >
                    </MenuCard>)
            }
        </div>
    )
}

export default PopularMenus