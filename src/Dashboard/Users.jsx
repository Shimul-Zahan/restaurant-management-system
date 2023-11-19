import React from 'react'
import useUsers from '../Hooks/useUsers'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUsersLine } from "react-icons/fa6";
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Users = () => {

    const { data, refetch, isLoading } = useUsers();
    const axiosInstance = useAxiosPublic();

    if (isLoading) {
        return <div>Loadings...</div>
    }

    const deleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const makeAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.patch(`/users/admin/${id}`)
                    .then(res => {
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Congratulaitions!",
                                text: "Give role as admin successfully",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className='bg-white shadow-xl p-8 my-10'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-3xl font-bold'>TOTAL USERS: {data?.length}</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] pt-5 rounded-xl'>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                data?.map((item, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <h1 className='font-bold'>{item?.name}</h1>
                                    </td>
                                    <td>
                                        <h1 className='font-bold'>{item?.email}</h1>
                                    </td>
                                    <td className=''>
                                        {
                                            item.role === 'admin' ? <h1 className='font-bold'>admin</h1> :
                                                <button onClick={() => makeAdmin(item._id)} className="btn btn-lg bg-red-500">
                                                    <FaUsersLine className='text-2xl text-white' />
                                                </button>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => deleteUser(item._id)} className="btn btn-lg bg-red-500">
                                            <RiDeleteBin6Line className='text-2xl text-white' />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users