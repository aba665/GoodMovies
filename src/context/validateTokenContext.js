import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(undefined);
    const [ userVerificated, setUserVerificated ] = useState(false);
    const [ idMovies, setIdMovies ] = useState(0);
    const [ idCategory, setIdCategory ] = useState(0);
    
    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            userVerificated,
            setUserVerificated,
            idMovies, 
            setIdMovies,
            idCategory,
            setIdCategory
        }}>
            {children}
        </AuthContext.Provider>

    )
}