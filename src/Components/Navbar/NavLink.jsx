import React from 'react';

const NavLink = ({ item }) => {
    return (
        <li className='hover:text-red-300'>
            <a href={item.path}>{item.name}</a>
        </li>
    );
};

export default NavLink;