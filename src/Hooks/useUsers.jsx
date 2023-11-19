import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure';


const useUsers = () => {
    const axiosInstance = useAxiosSecure();
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosInstance.get('/users', {withCredentials: true});
            return await res.data;
        }
    })
    return { data, refetch, isLoading };
}

export default useUsers