import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../CommonPage/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const imgHostKey = process.env.REACT_APP_imgbb_key;

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/treatmentSpeciality');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
        //         console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    // image: imgData.data.url
                }

                //save doctor information to the database
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`Doctor ${data.name} is added successfully`);
                    navigate('/dashboard/managedoctors')
                })
            }
    //     })
    // }
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold my-6">Add a new doctor</h2>
            <form className='w-96 p-3' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: "Name is required"
                    })} type="text" className="input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email is required"
                    })} type="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                     {...register("speciality")}
                     className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please select a Speciality?</option>
                        {
                            specialties.map(speciality => <option
                            key={speciality._id}
                            value={speciality.name}
                            >{speciality.name}</option>)
                        }
                        
                    </select>
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image", {
                        required: "Photo is required"
                    })} type="file" className="input input-bordered" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div> */}
                    <input className='btn btn-accent w-full my-3' value="Add Doctor" type="submit" />

                

            </form>
        </div>
    );
};

export default AddDoctor;