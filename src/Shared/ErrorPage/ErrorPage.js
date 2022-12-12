import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='error grid justify-center p-5'>
           <h1 className='text-6xl text-center flex content-center   justify-center'>
           Error 404. Please Log Out and Sign In Back
           </h1>
           <h1>Error: {error?.statusText || error.message}</h1>
        </div>
    );
};

export default ErrorPage;