import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext'
import Swal from 'sweetalert2'
import './navbar.css'
import useCarts from '../Hooks/useCarts'

const Navbar = () => {

    const { user, logOut } = useContext(MyAuthContext);
    const { data, refetch, isLoading } = useCarts();

    const handleLOgOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to log out? ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => console.log('succeefully logOut'))
                    .catch(err => console.log(err))

                Swal.fire({
                    title: "Log Out!",
                    text: "Log out successfull",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
            <div className='grid grid-cols-6 justify-between  w-full'>
                <div className="navbar-start w-full col-span-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>CONTACT US</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard'>DASHBOARD</NavLink>
                            </li>
                            <li>
                                <NavLink to='/menus'>OUR MENU</NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop/salad'>OUR SHOP</NavLink>
                            </li>
                            <li>
                                <NavLink to='/cart'>
                                    <label tabIndex={0} className="btn btn-ghost bg-green-500 btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">{ data?.length }</span>
                                        </div>
                                    </label>
                                </NavLink>
                            </li>
                            {
                                user ? <li>
                                    <button onClick={handleLOgOut}>LOG OUT</button>
                                </li> :
                                    <li>
                                        <NavLink to='/login'>SIGN IN</NavLink>
                                    </li>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex lg:items-center col-span-4 w-full">
                    <ul className="flex justify-center items-center gap-10 px-1">
                        <li>
                            <NavLink to='/'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>CONTACT US</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>DASHBOARD</NavLink>
                        </li>
                        <li>
                            <NavLink to='/menus'>OUR MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop/salad'>OUR SHOP</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/cart'>
                                <label tabIndex={0} className="btn btn-ghost bg-green-500 btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{data?.length}</span>
                                    </div>
                                </label>
                            </NavLink>
                        </li>
                        {
                            user ? <li>
                                <button onClick={handleLOgOut}>LOG OUT</button>
                            </li> :
                                <li>
                                    <NavLink to='/login'>SIGN IN</NavLink>
                                </li>
                        }
                        <li>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={user?.photoURL} className='rounded-full' />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar