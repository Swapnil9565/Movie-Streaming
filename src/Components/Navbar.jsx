import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='w-[426px] flex justify-around items-center bg-slate-900 text-white h-[10vh] sm:w-[641px] md:w-[768px] lg:w-full'>
        <div>
            <h1 className='text-3xl sm:text-3xl md:text-4xl'>Movies<span className='text-red-600'>Hub</span></h1>
        </div>
         <ul className='flex gap-x-10 items-center text-sm uppercase cursor-pointer font-bold sm:text-md md:text-lg lg:text-lg'>
            
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Movies'>Movies</NavLink></li>
         </ul>
      </nav>
    </>
  )
}

export default Navbar