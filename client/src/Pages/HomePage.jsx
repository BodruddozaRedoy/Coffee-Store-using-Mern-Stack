import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Products from '../Components/Products';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Products/>
        </div>
    );
};

export default HomePage;