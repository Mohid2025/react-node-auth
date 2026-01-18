import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="bg-black shadow-md p-4">
            <div className='container mx-auto flex items-center justify-between'>
                <div className='text-2xl text-white font-bold'>AUTH</div>
                <div className='space-x-4 flex items-end justify-between'>
                    <NavLink to="/" className="text-white hover:text-gray-300">Login</NavLink>
                    <NavLink to="/signup" className="text-white hover:text-gray-300">Signup</NavLink>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
