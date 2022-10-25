import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../FireBase/Firebase.Confing';


export const AuthContext= createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password) 
    }

    const googleProvider=(provider,)=>{
        return signInWithPopup(auth, provider)
    }

    const gitProvider=(signinGithub)=>{
        return signInWithPopup(auth, signinGithub)
    }
    const logout=()=>{
        signOut(auth)
        .then(result=>{

        })
        .catch(e=>{})
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{unsubscribe()} 
    },[])

    const authInfo={user, createUser , loginUser, googleProvider, gitProvider, logout}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;