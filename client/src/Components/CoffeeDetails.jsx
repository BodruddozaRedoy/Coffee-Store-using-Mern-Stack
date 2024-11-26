import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoffeeDetails = () => {
    return (
        <div className="md:mx-40 bg-[url('./images/more/11.png')] bg-cover">
        <Link to={'/'} ><p className='text-xl my-5 font-semibold flex gap-3 items-center'><FaArrowAltCircleLeft/> Back to home</p></Link>
        <div className=' flex gap-10 items-center justify-center bg-[#F4F3F0] py-20 px-20'>
            <img src="" alt="" />
            <div>
                <h1>Name:</h1>
                <h1>Chef:</h1>
                <h1>Supplier:</h1>
                <h1>Category:</h1>
                <h1>Details:</h1>
            </div>
        </div>
    </div>
    );
};

export default CoffeeDetails;