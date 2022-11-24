import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <p className="text-red-500">Something went wrong!!!!!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h3>Please <button className='btn btn-accent btn-sm' onClick={handleLogOut}>Signout</button></h3>
        </div>
    );
};

export default DisplayError;