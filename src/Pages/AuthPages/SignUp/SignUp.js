import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, updateUser, googleSignup} = useContext(AuthContext);

    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token) {
        navigate('/');
    }

    const handleGoogleSignin = () => {
        googleSignup()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err))
    }

    const handleSignup = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            toast('User created successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
                saveUser(data.name, data.email);
            })
            .catch(err => console.log(err))
        })
        .catch(err => {
            console.error(err.message)
            setSignupError(err.message)
        })

    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
        })
    }

    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-lg'>
                <h2 className='text-center text-2xl'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", {
                            required: "Name is required"
                        })}   type="text" className="input input-bordered" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email is required"
                        })}type="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: "Password must be in 6 characters or longer"},
                            pattern: {value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: "Password must be strong"}
                        })}type="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                        <input className='btn btn-accent w-full mb-3' value="Signup" type="submit" />
                        {
                            signupError && <p className='text-red-500'>{signupError}</p>
                        }
                    </div>

                </form>
                <p>Already have an account? <Link className='text-secondary font-semibold' to='/login'>Login Here</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className="btn btn-outline btn-primary w-full">Continue With Google</button>
            </div>

        </div>
    );
};

export default SignUp;