import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../CommonPage/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    
    const { data: doctors, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json();
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                refetch();
                toast.success(`Doctor ${doctor.name} is removed`)
            }
            
        })
    }

    return (
        <div>
            <h2>Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        {/* The button to open modal */}
                                        <label
                                        onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmation-modal" className="btn btn-xs btn-error">Remove</label>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingDoctor.name}. It can not be undone.`}
                closeModal={closeModal}
                deleteAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                successBtnName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;