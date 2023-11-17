import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './dashboard.css'
import { MdHome } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";

const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className='flex justify-start gap-10'>
            <div className='w-64 bg-[#D1A054] pb-20'>
                <ul className='list-none text-lg font-semibold'>
                    <div className='py-10 px-6'>
                        <h1 className='text-2xl font-bold'>BISTRO BOSS</h1>
                        <h1 className='text-xl font-thin tracking-widest'>RESTAURANT</h1>
                    </div>
                    {
                        isAdmin ? <>
                            {/* for admin */}
                            <li className='py-4 px-6'>
                                <NavLink to='/dashboard/admin-home' className="flex items-center gap-2">
                                    <span className='text-2xl'><MdHome /></span>
                                    <h1>ADMIN HOME</h1>
                                </NavLink>
                            </li>
                            <li className='py-4 px-6'>
                                <NavLink to='/dashboard/add-item' className="flex items-center gap-2">
                                    <span className='text-2xl'><ImSpoonKnife /></span>
                                    <h1>ADD ITEMS</h1>
                                </NavLink>
                            </li>
                            <li className='py-4 px-6'>
                                <NavLink to='/dashboard/manage-items' className="flex items-center gap-2">
                                    <span className='text-2xl'><TbBrandBooking /></span>
                                    <h1>MANAGE ITEMS</h1>
                                </NavLink>
                            </li>
                            <li className='py-4 px-6'>
                                <NavLink to='/dashboard/manage-booking' className="flex items-center gap-2">
                                    <span className='text-2xl'><IoCart /></span>
                                    <h1>MANAGE BOOKING</h1>
                                </NavLink>
                            </li>
                            <li className='py-4 px-6'>
                                <NavLink to='/dashboard/all-users' className="flex items-center gap-2">
                                    <span className='text-2xl'><FaUsersLine /></span>
                                    <h1>ALL USERS</h1>
                                </NavLink>
                            </li>
                        </> :
                            <>
                                {/* for user */}
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/home' className="flex items-center gap-2">
                                        <span className='text-2xl'><MdHome /></span>
                                        <h1>USER HOME</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/reservation' className="flex items-center gap-2">
                                        <span className='text-2xl'><RiReservedFill /></span>
                                        <h1>RESERVATION</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/payment-history' className="flex items-center gap-2">
                                        <span className='text-2xl'><MdPayments /></span>
                                        <h1>PAYMENT HISTORY</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/cart' className="flex items-center gap-2">
                                        <span className='text-2xl'><IoCart /></span>
                                        <h1>MY CART</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/review' className="flex items-center gap-2">
                                        <span className='text-2xl'><MdOutlineReviews /></span>
                                        <h1>ADD REVIEW</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/bookings' className="flex items-center gap-2">
                                        <span className='text-2xl'><TbBrandBooking /></span>
                                        <h1>MY BOOKINGS</h1>
                                    </NavLink>
                                </li>
                            </>
                    }

                    <hr className='bg-white my-6 mx-6' />
                    {/* shared components */}
                    <li className='py-4 px-6'>
                        <NavLink to='/' className="flex items-center gap-2">
                            <span className='text-2xl'><MdHome /></span>
                            <h1>HOME</h1>
                        </NavLink>
                    </li>
                    <li className='py-4 px-6'>
                        <NavLink to='/shop/salad' className="flex items-center gap-2">
                            <span className='text-2xl'><IoMenu /></span>
                            <h1>MENU</h1>
                        </NavLink>
                    </li>
                    <li className='py-4 px-6'>
                        <NavLink to='/' className="flex items-center gap-2">
                            <span className='text-2xl'><FaShopify /></span>
                            <h1>SHOP</h1>
                        </NavLink>
                    </li>
                    <li className='py-4 px-6'>
                        <NavLink to='/' className="flex items-center gap-2">
                            <span className='text-2xl'><MdEmail /></span>
                            <h1>CONTACT</h1>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard