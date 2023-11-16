import React, { useEffect, useState } from 'react'
import MenuCard from '../SharedComponents/MenuCard';

const PopularMenus = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularProducts = data.filter(product => product.category === 'popular');
                setMenus(popularProducts);
            });
    }, []);

    // console.log(menu);

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

export default PopularMenus