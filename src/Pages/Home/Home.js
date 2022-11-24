import React from 'react';
import Banner from './Banner/Banner';
import SecondSec from './SecondSec/SecondSec';
import ServiceSec from './ServiceSec/ServiceSec';
import ImgTxtSec from './imgTxtSec/imgTxtSec';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Testimonial from './Testimonial/Testimonial';
import HomeContact from './HomeContact/HomeContact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSec></SecondSec>
            <ServiceSec></ServiceSec>
            <ImgTxtSec></ImgTxtSec>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;