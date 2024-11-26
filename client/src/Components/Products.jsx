import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            name: "america",
            chef: "redoy",
            price: 600,
            image: "./images/1.png"
        },
        {
            name: "canada",
            chef: "rifa",
            price: 566,
            image: "./images/1.png"
        },
        {
            name: "halifac",
            chef: "oishy",
            price: 700,
            image: "./images/1.png"
        },
    ]
    return (
        <div className="bg-[url('./images/more/1.png')] flex flex-col justify-center items-center gap-5 my-20">
            <p>-- Sip & Savor --</p>
            <h1 className='text-4xl font-semibold'>Our Popular Products</h1>
            <Link to={'/add-coffee'}><button className='bg-orange-400 py-2 rounded-md border-2 text-white text-xl border-rose-950 px-5'>Add Coffee</button></Link>
            <div className=' grid grid-cols-2 justify-center items-center gap-10'>
                {
                    products.map(item => <ProductCard item={item}/>)
                }
            </div>
        </div>
    );
};

export default Products;