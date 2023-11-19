import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(MyAuthContext);
    const axiosInstance = useAxiosSecure();
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["admin", user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/admin/${user.email}`);
            return await res.data.admin;
        }
    })
    return { data, refetch, isLoading };
}

export default useAdmin