import React from 'react';
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'




const ProductCard = ({ coffees, setCoffees}) => {

    const reFetch = () => {
        fetch("http://localhost:5000/coffee")
        .then(res => res.json())
        .then(data => setCoffees(data))
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/coffee/${id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  reFetch()
              })
            }
          });
    }

    return (
        <div className='bg-[#F5F4F1] p-5 grid grid-cols-3 items-center'>
            <img className='h-[200px] w-[200px] m-1 object-cover' src={coffees.photo} alt="" />
            <div>
            <h1>Name: <span className='text-gray-400'>{coffees.name}</span></h1>
            <h1>Quantity: <span className='text-gray-400'>{coffees.quantity}</span></h1>
            <h1>Supplier: <span className='text-gray-400'>{coffees.supplier} Tk</span></h1>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Link to={`/coffee-details/${coffees._id}`}><div className='p-1 w-8 h-8 bg-orange-400  flex items-center justify-center rounded-md cursor-pointer'><FaEye className='w-full text-white '/></div></Link>
                <Link to={`/update-coffee/${coffees._id}`}><div className='p-1 w-8 h-8 bg-black  flex items-center justify-center rounded-md cursor-pointer'><FaPencilAlt className='w-full text-white '/></div></Link>
                <div onClick={() => {handleDelete(coffees._id)}} className='p-1 w-8 h-8 bg-red-500  flex items-center justify-center rounded-md cursor-pointer'><MdDelete className='w-full text-white '/></div>
            </div>
        </div>
    );
};

export default ProductCard;