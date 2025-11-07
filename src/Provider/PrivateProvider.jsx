import React, {  use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateProvider = ({children}) => {
    const {user} = use(AuthContext)
    if(user) {
        return children
    }
    return <Navigate to="/auth/login"> 

    </Navigate>
};

export default PrivateProvider;