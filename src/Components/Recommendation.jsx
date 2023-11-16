import React, { useEffect, useState } from 'react'
import Title from '../SharedComponents/Title';

const Recommendation = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularProducts = data.filter(product => product.category === 'popular');
                setMenus(popularProducts);
            });
    }, []);

    return (
        <div>
            <Title title={'---Should Try---'} subTitle={'CHEF RECOMMENDS'} />
            <div className='flex justify-center items-center my-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20'>
                    {
                        menus?.slice(0, 3).map(menu => <div key={menu?._id}>
                            <img src={menu?.image} alt="" />
                            <div className='bg-gray-100 space-y-3 text-center px-5 py-8'>
                                <h1 className='text-2xl font-bold'>{ menu?.name }</h1>
                                <h1>{menu?.recipe}</h1>
                                <button className='btn bg-black text-yellow-500 mt-5'>Add to cart</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommendation