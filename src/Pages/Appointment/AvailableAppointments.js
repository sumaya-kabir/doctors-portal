import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../CommonPage/Loading/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['treatments'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/treatments?date=${date}`);
            const data = await res.json();
            return data;
        }
        
    })

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <section className='my-12'>
            <p className='text-center font-semibold text-secondary'>Available Appointments on <span className='font-bold'>{format(selectedDate, 'PP')}</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12'>
                {
                    appointmentOptions.map(appointment => <AppointmentOption
                    key={appointment._id}
                    appointment={appointment}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;