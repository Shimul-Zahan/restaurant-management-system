import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyAuthContext);
    const location = useLocation();

    if (loading) {
        return <div>
            <progress className="progress progress-success w-56" value={0} max="100"></progress>
            <progress className="progress progress-success w-56" value="10" max="100"></progress>
            <progress className="progress progress-success w-56" value="40" max="100"></progress>
            <progress className="progress progress-success w-56" value="70" max="100"></progress>
            <progress className="progress progress-success w-56" value="100" max="100"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoute