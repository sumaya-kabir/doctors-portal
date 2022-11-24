import React from 'react';
import skin from '../../../assets/skinimages/pexels-photo-4586709.webp'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={skin} className=" mr-6 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Transform yourself through the best in cosmetic surgery</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white">BOOK AN APPOINTMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;