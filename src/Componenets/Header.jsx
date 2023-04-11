import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex sticky top-0 justify-between items-center lg:py-6 px-2 lg:px-20   bg-gray-100'>
            <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                <span>
                    {
                        isOpen
                            ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                            : <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
                    }
                </span>
            </div>
            <div className="">
                {
                    isOpen
                        ? <h1 className='text-3xl font-serif font-bold'>CM</h1>
                        : <h1 className='text-3xl font-bold'>CareerMatch</h1>
                }
            </div>
            <ul className={` lg:font-semibold  lg:static md:flex gap-9 duration-500 absolute ${isOpen ? "top-12 border w-full pl-3 rounded bg-gradient-to-r from-cyan-300 to-blue-200  " : '-top-28'}`}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'text-red-300' : 'default')}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to='statistics'
                        className={({ isActive }) => (isActive ? 'text-red-300' : 'default')}
                    >Statistics</NavLink>
                </li>
                <li>
                    <NavLink
                        to='jobApplied'
                        className={({ isActive }) => (isActive ? 'text-red-300' : 'default')}
                    >Applied Jobs</NavLink>
                </li>
                <li>
                    <NavLink
                        to='blog'
                        className={({ isActive }) => (isActive ? 'text-red-300' : 'default')}
                    >Blog</NavLink>
                </li>
            </ul>
            <button className='btn-primary '>Star Applying</button>
        </div>
    );
};

export default Header;