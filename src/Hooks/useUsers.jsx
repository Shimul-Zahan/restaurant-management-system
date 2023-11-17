import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic';


const useUsers = () => {
    const axiosInstance = useAxiosPublic();
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosInstance.get('/users');
            return await res.data;
        }
    })
    return { data, refetch, isLoading };
}

export default useUsers