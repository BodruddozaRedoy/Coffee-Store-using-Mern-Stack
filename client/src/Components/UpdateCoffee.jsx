import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    return (
        <div className="md:mx-40 bg-[url('./images/more/11.png')] bg-cover">
            <Link to={'/'} ><p className='text-xl my-5 font-semibold flex gap-3 items-center'><FaArrowAltCircleLeft/> Back to home</p></Link>
            <div className=' flex flex-col gap-5 items-center justify-center bg-[#F4F3F0] py-20 px-20'>
                <h1 className='text-4xl font-semibold'>Update Existing Coffee Details</h1>
                <p className='text-gray-400'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form className='grid grid-cols-2 gap-5 w-full'>
                    <div className='space-y-2 w-full'>
                        <h1 htmlFor="">Name</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Chef</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Supplier</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Taste</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Category</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Details</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2 col-span-2'>
                        <h1 htmlFor="">Photo</h1>
                        <input className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <button className='col-span-2 border-2 border-rose-950 py-3 bg-[#D2B48C] font-semibold rounded-lg'>Update Coffee Details</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;