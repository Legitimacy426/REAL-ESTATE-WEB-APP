import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  
  <>
  
  <div className="navbar bg-base-100">
    <div className="navbar-start ">
      <div className="dropdown rounded-none border">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <HamburgerMenuIcon  className='text-lg'/>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 rounded-xsm border">
         <li><Link href={'./'}  >Home</Link></li>
         <li><Link href={'./houses'}  >Houses</Link></li>
         <li><Link href={'./lands'}  >lands</Link></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl">Morani</a>
    </div>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-none border w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
  </div>
  <hr />
  </>
  )
}

export default Navbar
