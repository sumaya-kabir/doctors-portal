import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    if(token) {
        navigate(from, {replace: true});
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-lg'>
                <h2 className='text-center text-2xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { 
                            required: "Email is required"
                             })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { 
                            required: "Password is required",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                        <input className='btn btn-accent w-full mb-3' value="Login" type="submit" />
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                    
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary font-semibold' to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-primary w-full">Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;