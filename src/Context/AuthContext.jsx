import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase.config';

export const MyAuthContext = createContext(null);
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currntUser) => {
            setUser(currntUser);
            setLoading(false);
        })
        return (() => {
            return unSubscribed();
        })
    }, [])

    const contextElements = {
        user,
        loading,
        createUser,
        emailLogin,
        googleLogin,
        logOut
    }

    return (
        <MyAuthContext.Provider value={contextElements}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext