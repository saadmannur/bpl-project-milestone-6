import React, { useState } from 'react';
import dollarImg from "../../assets/dollar 1.png"
import logoImg from "../../assets/logo.png"
import { CircleX, Menu } from 'lucide-react';
import NavLink from './NavLink';

const navItems = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: "home",
    },
    {
        id: 2,
        name: "Fixture",
        path: "/fixture",
        icon: "info",
    },
    {
        id: 3,
        name: "Teams",
        path: "/teams",
        icon: "settings",
    },
    {
        id: 4,
        name: "Schedule",
        path: "/blog",
        icon: "article",
    }
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navLinks = navItems.map(item => <NavLink key={item.id} item={item}></NavLink>)
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <div className="flex items-center space-x-2.5" onClick={() => { setOpen(!open) }}>
                    <span className='md:hidden'>
                        {
                            open ? <CircleX></CircleX> : <Menu></Menu>
                        }
                        <ul className={`p-3 space-y-1 bg-gray-500 text-white rounded-2xl absolute z-50 duration-1000 ${open ? `top-12 left-8` : `-left-60 top-8`}`}>
                            {navLinks}
                        </ul>
                    </span>
                    <img src={logoImg} alt="" />
                </div>
                <div className="flex  items-center space-x-6 ">
                    <ul className='hidden md:flex items-center space-x-4'>
                        {navLinks}
                    </ul>
                    <button className='btn font-bold text-xl'>
                        <p><span>0</span> Coins</p>
                        <img src={dollarImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;