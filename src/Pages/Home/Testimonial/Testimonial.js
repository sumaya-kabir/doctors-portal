import React from 'react';
import review from '../../../assets/images/people1.png'

const Testimonial = () => {
    return (
        <section className="p-12">
            <p className="text-xl text-center font-bold text-secondary ">Testimonails</p>
            <h2 className='text-4xl text-center font-semibold pt-4'>What Our Patient Says?</h2>
            <div className="carousel w-full">
                <div id="slide1" className="grid grid-cols-1 lg:grid-cols-2 carousel-item relative w-full justify-around">
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="grid grid-cols-1 lg:grid-cols-2 carousel-item relative w-full px-12 justify-around">
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="grid grid-cols-1 lg:grid-cols-2 carousel-item relative w-full px-12 justify-around">
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card w-1/2 p-6 m-12 bg-primary text-primary-content'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex'>
                            <img className='mr-3 w-10 h-10' src={review} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>Winson Harry</h4>
                                <p>California</p>
                                <div className="rating rating-sm rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;