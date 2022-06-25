import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//Importação de todo contexto
import { AuthContext, AuthProvider } from './context/validateTokenContext';
//Importações das páginas
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index'; 
import UserPage from './pages/UserPage/UserPage';


const APP_ROUTES = () => {

    const Private = ({ children }) => {
        const { userVerificated } = useContext(AuthContext);
        if(!userVerificated){
            return <Navigate to='/login' />
        }
        return children;
    }

    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/> 
                    <Route path="/cadastro" element={<RegisterPage />}/> 
                    <Route path="/login" element= {<LoginPage />} /> 
                    <Route path="/home" element={<UserPage />} />
                    {/* <Private><UserPage /></Private>}  */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    )
}

export default APP_ROUTES;