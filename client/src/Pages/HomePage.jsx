import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner/>
            <Products data={data}/>
            
        </div>
    );
};

export default HomePage;