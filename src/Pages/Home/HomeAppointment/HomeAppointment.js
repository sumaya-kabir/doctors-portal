import React from 'react';
import doctor from '../../../assets/images/doctor.png'

const HomeAppointment = () => {
    return (
        <section className="mt-32 text-white bg-[url('/src/assets/images/appointment.png')]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='ml-6'>
                    <p className="text-xl font-bold text-secondary">Appointment</p>
                    <h2 className='text-4xl font-semibold pt-4'>Make an appointment today</h2>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-secondary text-white">Get Appointment</button>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;