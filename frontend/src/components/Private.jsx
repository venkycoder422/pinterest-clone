import React from 'react';
import { useSelector } from 'react-redux/';
import { Navigate } from 'react-router-dom'

export const Private = ({ children }) => {
    const token = useSelector(store => store.auth.userData);

    if (!token) {
        return <Navigate to="/" />
    }
    return children;
}