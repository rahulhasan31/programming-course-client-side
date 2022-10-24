import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../FireBase/Firebase.Confing';


export const AuthContext= createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const user= {name: 'rahul'}

    

    const authInfo={user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;