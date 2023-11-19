import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useMenus = () => {
    const axiosInstance = useAxiosPublic();
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const res = await axiosInstance.get('/menus')
            return await res.data
        }
    })
    return { data, refetch, isLoading }
}

export default useMenus