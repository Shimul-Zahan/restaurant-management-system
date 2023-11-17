import React from 'react'
import Title from '../SharedComponents/Title'
import useCarts from '../Hooks/useCarts'
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Cart = () => {

    const { data, refetch, isLoading } = useCarts();
    const axiosInstance = useAxiosSecure()
    const totalPrice = data?.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

    if (isLoading) {
        return <div>Loading....</div>
    }

    const deleteItem = id => {
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
                axiosInstance.delete(`/carts/${id}`)
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

    return (
        <div>
            {/* <div className=''>
                <Title title={'---My Cart---'} subTitle={'WANNA ADD MORE?'} />
            </div> */}
            <div className='bg-white shadow-xl p-8 my-10'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-3xl font-bold'>TOTAL ORDERS: {data?.length}</h1>
                    <h1 className='text-3xl font-bold'>TOTAL PRICES: ${totalPrice}</h1>
                    <button className='btn bg-[#D1A054]'>PAY</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] pt-5 rounded-xl'>
                            <tr>
                                <th>ID</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                data?.map((item, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className='font-bold'>{item?.name}</h1>
                                    </td>
                                    <td className='font-bold'>{item?.price}</td>
                                    <th>
                                        <button onClick={() => deleteItem(item._id)} className="btn btn-lg bg-red-500">
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

export default Cart