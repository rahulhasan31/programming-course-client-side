import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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
    const  updateProfileUser=profile=>{
        return updateProfile(auth.currentUser, profile)
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{unsubscribe()} 
    },[])

    const authInfo={user, createUser , loginUser, googleProvider, gitProvider, logout, updateProfileUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;