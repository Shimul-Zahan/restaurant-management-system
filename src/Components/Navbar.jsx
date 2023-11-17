import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext'

const Navbar = () => {

    const { user, logOut } = useContext(MyAuthContext);

    const handleLOgOut = () => {
        logOut()
            .then(res => console.log('succeefully logOut'))
            .catch(err => console.log(err))
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
                                <Link to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link>CONTACT US</Link>
                            </li>
                            <li>
                                <Link>DASHBOARD</Link>
                            </li>
                            <li>
                                <Link to='/menus'>OUR MENU</Link>
                            </li>
                            <li>
                                <Link to='/shop/salad'>OUR SHOP</Link>
                            </li>
                            {
                                user ? <li>
                                    <button onClick={handleLOgOut}>LOG OUT</button>
                                </li> :
                                    <li>
                                        <Link to='/login'>SIGN IN</Link>
                                    </li>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex lg:items-center col-span-4 w-full">
                    <ul className="flex justify-center items-center gap-10 px-1">
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link>CONTACT US</Link>
                        </li>
                        <li>
                            <Link>DASHBOARD</Link>
                        </li>
                        <li>
                            <Link to='/menus'>OUR MENU</Link>
                        </li>
                        <li>
                            <Link to='/shop/salad'>OUR SHOP</Link>
                        </li>
                        {
                            user ? <li>
                                <button onClick={handleLOgOut}>LOG OUT</button>
                            </li> :
                                <li>
                                    <Link to='/login'>SIGN IN</Link>
                                </li>
                        }
                        <li>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={user?.photoURL} className='rounded-full'/>
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