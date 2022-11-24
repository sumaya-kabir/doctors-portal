import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots,price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            patientName: patient,
            treatment: name,
            slot,
            email,
            phone,
            price

        }
        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setTreatment(null);
                    toast.success('You booked your appointment successfully');
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })



    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-2 text-center font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='text-center'>
                        <input type="text" disabled value={date} className="input input-bordered mb-2 w-full" />
                        <select name="slot" className="select select-bordered mb-2 w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled
                            className="input input-bordered mb-2 w-full" />
                        <input name="email" type="Email" defaultValue={user?.email} disabled
                            className="input input-bordered mb-2 w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered mb-2 w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;