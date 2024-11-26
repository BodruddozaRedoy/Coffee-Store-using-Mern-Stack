import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-[url('./images/more/15.jpg')] flex items-center justify-center py-3">
            <img className='w-[40px]' src="./images/more/logo1.png" alt="" />
            <h1 className='text-2xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;