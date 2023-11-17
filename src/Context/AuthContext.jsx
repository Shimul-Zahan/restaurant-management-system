import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const MyAuthContext = createContext(null);
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosInstance = useAxiosPublic();

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
            const loggedUser = currntUser?.email || user?.email;
            const userInfo = { email: loggedUser }
            setUser(currntUser);
            if (currntUser) {
                axiosInstance.post('/jwt', userInfo, { withCredentials: true })
                    .then(res => console.log(res.data))
            } else {
                axiosInstance.post('/logout', userInfo, { withCredentials: true })
                    .then(res => console.log(res))
            }
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