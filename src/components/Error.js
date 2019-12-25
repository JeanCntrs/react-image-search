import React from 'react';

const Error = ({ message }) => {
    return (
        <p className="text-center text-white alert alert-danger">{message}</p>
    );
}

export default Error;