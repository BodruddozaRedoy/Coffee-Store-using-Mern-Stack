import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-[url('./images/more/15.jpg')] grid grid-cols-3 items-center justify-between py-3">
            <div></div>
            <div className='flex items-center justify-center gap-2'>
            <img className='w-[40px]' src="./images/more/logo1.png" alt="" />
            <Link to={'/'}><h1 className='text-2xl text-white'>Espresso Emporium</h1></Link>
            </div>
            <div className='flex items-center justify-end mr-5'>
                <Link to={'/users'} className='py-2 px-5 text-xl bg-orange-300 mr-3'>Users</Link>
                <Link to={'/login'}><button className='py-2 px-5 text-xl bg-orange-300'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;