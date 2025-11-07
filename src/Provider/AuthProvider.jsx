import React, { Children } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {

    // Create user with email and password
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authData = {
        createUser,
        signInUser,
        

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;