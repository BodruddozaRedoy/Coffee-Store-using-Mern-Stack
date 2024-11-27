import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const data = useLoaderData()
    const {name, quantity, supplier, taste, details, photo, category, _id} = data

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const details = form.details.value
        const photo = form.photo.value
        const category = form.category.value
        const updatedCoffee = {name, quantity, supplier, taste, details, photo, category}

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Coffee updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className="md:mx-40 bg-[url('./images/more/11.png')] bg-cover">
            <Link to={'/'} ><p className='text-xl my-5 font-semibold flex gap-3 items-center'><FaArrowAltCircleLeft/> Back to home</p></Link>
            <div className=' flex flex-col gap-5 items-center justify-center bg-[#F4F3F0] py-20 px-20'>
                <h1 className='text-4xl font-semibold'>Update Existing Coffee Details</h1>
                <p className='text-gray-400'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdate} className='grid grid-cols-2 gap-5 w-full'>
                    <div className='space-y-2 w-full'>
                        <h1 htmlFor="">Name</h1>
                        <input defaultValue={name} className='p-2 w-full' type="text" name="name" placeholder='Enter coffee name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Quantity</h1>
                        <input defaultValue={quantity} className='p-2 w-full' type="text" name="quantity" placeholder='Enter quantity' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Supplier</h1>
                        <input defaultValue={supplier} className='p-2 w-full' type="text" name="supplier" placeholder='Enter supplier name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Taste</h1>
                        <input defaultValue={taste} className='p-2 w-full' type="text" name="taste" placeholder='Enter taste' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Category</h1>
                        <input defaultValue={category} className='p-2 w-full' type="text" name="category" placeholder='Enter category name' id="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 htmlFor="">Details</h1>
                        <input defaultValue={details} className='p-2 w-full' type="text" name="details" placeholder='Enter coffee details' id="" />
                    </div>
                    <div className='space-y-2 col-span-2'>
                        <h1 htmlFor="">Photo</h1>
                        <input defaultValue={photo} className='p-2 w-full' type="text" name="photo" placeholder='Enter photo url' id="" />
                    </div>
                    <button className='col-span-2 border-2 border-rose-950 py-3 bg-[#D2B48C] font-semibold rounded-lg'>Update Coffee Details</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;