import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('./images/more/3.png')] grid grid-cols-2 text-white  justify-center py-60 bg-cover px-40">
            <div></div>
            <div className='flex flex-col gap-5 items-start'>
            <h1 className='text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-gray-400'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-orange-300 py-3 px-5 text-black'>Learn More</button>
            </div>
        </div>
        <div className='bg-[#ECEAE3] px-40 py-10 grid grid-cols-4 gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 items-start px-20'>
                <img src="./images/icons/1.png" alt="" />
                <h1>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='flex flex-col gap-3 items-start px-20'>
                <img src="./images/icons/2.png" alt="" />
                <h1>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='flex flex-col gap-3 items-start px-20'>
                <img src="./images/icons/3.png" alt="" />
                <h1>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='flex flex-col gap-3 items-start px-20'>
                <img src="./images/icons/4.png" alt="" />
                <h1>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;