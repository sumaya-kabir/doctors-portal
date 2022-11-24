import React from 'react';

const ServiceCard = ({ service }) => {
    const {serviceName, img, descriptions} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-full w-1/2 h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{descriptions.slice(0, 100)}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-secondary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;