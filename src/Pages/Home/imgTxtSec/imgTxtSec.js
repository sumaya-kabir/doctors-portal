import React from 'react';
import cosmetic from '../../../assets/skinimages/pexels-anna-shvets-5069432.jpg'

const ImgTxtSec = () => {
    return (
        <div className='flex-column lg:flex items-center'>
            <div className='p-12'>
                <h2 className='text-4xl font-semibold pb-6'>Our experience in cosmetic surgery</h2>
                <p>
                    On the other hand we denounce with righteous of pleasure indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the trouble that moment so blinded by desire that they cannot foresee the pain and trouble that are bound.
                </p>
                <button className='btn btn-secondary text-white mt-6'>Discover More</button>
            </div>
            <div>
                <img className='w-3/4' src={cosmetic} alt="" />
            </div>
        </div>
    );
};

export default ImgTxtSec;