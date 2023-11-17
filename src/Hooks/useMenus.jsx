import React, { useEffect, useState } from 'react'

const useMenus = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => {
                setMenus(data);
                setLoading(false);
            });
    }, []);

    return {menus, loading}
}

export default useMenus