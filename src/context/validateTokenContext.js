import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(undefined);
    const [ userVerificated, setUserVerificated ] = useState(false);
    
    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            userVerificated,
            setUserVerificated
        }}>
            {children}
        </AuthContext.Provider>

    )
}