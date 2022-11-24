import React from 'react';
import { FaStethoscope, FaSyringe,FaTint } from "react-icons/fa";

const SecondSec = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 gap-4 my-6'>
            <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-white shadow-xl">
                <div className="card-body">
                    <div>
                        <FaStethoscope className='text-3xl'></FaStethoscope>
                    </div>
                    <div>
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                    
                </div>
            </div>
            <div className="card w-96 bg-secondary text-white shadow-xl">
                <div className="card-body">
                    <div>
                        <FaSyringe className='text-3xl'></FaSyringe>
                    </div>
                    <div>
                    <h2 className="card-title">Plastic Surgery</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                    
                </div>
            </div>
            <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-white shadow-xl">
                <div className="card-body">
                    <div>
                        <FaTint className='text-3xl'></FaTint>
                    </div>
                    <div>
                    <h2 className="card-title">Cosmetic Surgeons</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SecondSec;