import React from 'react';

const HomeContact = () => {
    return (
        <section className="p-12 text-center bg-[url('/src/assets/images/appointment.png')]">
            <p className="text-xl font-bold text-secondary ">Contact Us</p>
            <h2 className='text-4xl text-white  font-semibold py-4'>Stay Connected With Us</h2>
            <form>
                <input type="email" placeholder="Your Email" className="input input-bordered input-secondary w-full max-w-xs" />
                <br /><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs" />
                <br /><br />
                <textarea className="textarea textarea-secondary w-full max-w-xs" placeholder="Message"></textarea>
                <br /><br />
                <button className='btn btn-secondary text-white'>Submit</button>
            </form>
        </section>
    );
};

export default HomeContact;