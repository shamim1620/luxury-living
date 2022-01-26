import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateOutlet = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user.email ? <Outlet /> : <Navigate to="/login" />
            }

        </div>
    );
};

export default PrivateOutlet;