import React from 'react'
import useMenus from '../../Hooks/useMenus';
import MenuCard from '../../SharedComponents/MenuCard';

const OffersMenus = ({menus, loading}) => {

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            {
                menus?.map(menu =>
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

export default OffersMenus