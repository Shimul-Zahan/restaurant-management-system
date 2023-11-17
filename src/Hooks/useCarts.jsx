import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {

    const { user } = useContext(MyAuthContext);
    const axiosInstance = useAxiosSecure();
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/carts?email=${user?.email}`)
            return await res.data
        }
    })
    return { data, refetch, isLoading }
}

export default useCarts