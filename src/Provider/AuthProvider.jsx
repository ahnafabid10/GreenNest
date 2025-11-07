import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(false)

    // Create user with email and password
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out User
    const signOutUser = ()=>{
        return signOut(auth);
    }

    // get current user info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
//   if (currentUser) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     // const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
});

return () =>{
    unsubscribe();
}
    }, [])



    const authData = {
        user,
        createUser,
        signInUser,
        signOutUser,
        onAuthStateChanged
        

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;