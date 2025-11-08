import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create user with email and password
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In user
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        .then(result =>{console.log(result.user)})
        .catch
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Update user
    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser , updatedData)
    }

    // Sign Out User
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    //forget password
    const forgetPassword = (password) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, password)
    }

    // get current user info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
        setUser,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        onAuthStateChanged,
        updateUser,
        forgetPassword
        

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;