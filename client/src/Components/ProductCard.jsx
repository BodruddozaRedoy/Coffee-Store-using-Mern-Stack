import React from 'react';
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';



const ProductCard = ({item}) => {
    return (
        <div className='bg-[#F5F4F1] p-5 grid grid-cols-3 items-center justify-between'>
            <img src={item.image} alt="" />
            <div>
            <h1>Name: <span className='text-gray-400'>{item.name}</span></h1>
            <h1>Chef: <span className='text-gray-400'>{item.chef}</span></h1>
            <h1>Price: <span className='text-gray-400'>{item.price} Tk</span></h1>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='p-1 w-10 h-10 bg-orange-400  flex items-center justify-center rounded-md cursor-pointer'><FaEye className='w-full text-white '/></div>
                <Link to={'/update-coffee'}><div className='p-1 w-10 h-10 bg-black  flex items-center justify-center rounded-md cursor-pointer'><FaPencilAlt className='w-full text-white '/></div></Link>
                <div className='p-1 w-10 h-10 bg-red-500  flex items-center justify-center rounded-md cursor-pointer'><MdDelete className='w-full text-white '/></div>
            </div>
        </div>
    );
};

export default ProductCard;