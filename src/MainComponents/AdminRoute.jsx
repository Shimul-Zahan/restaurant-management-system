import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContext';
import useUsers from '../Hooks/useUsers';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(MyAuthContext);
    const { data, isLoading } = useUsers();
    const location = useLocation();

    if (loading || isLoading) {
        return <div>
            <progress className="progress progress-success w-56" value={0} max="100"></progress>
            <progress className="progress progress-success w-56" value="10" max="100"></progress>
            <progress className="progress progress-success w-56" value="40" max="100"></progress>
            <progress className="progress progress-success w-56" value="70" max="100"></progress>
            <progress className="progress progress-success w-56" value="100" max="100"></progress>
        </div>
    }

    if (user && data) {
        return children;
    }

    <Navigate state={location} to='/'></Navigate>
}

export default AdminRoute