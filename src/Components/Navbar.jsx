import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
          <div className="navbar-start">
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
                  </ul>
              </div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
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
              </ul>
          </div>
      </div>
  )
}

export default Navbar