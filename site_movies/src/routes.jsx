import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importação de todo contexto
import { AuthProvider } from './context/validateTokenContext';
//Importações das páginas
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index'; 
import UserPage from './pages/UserPage/UserPage';

const APP_ROUTES = () => {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    /* <Route path="/" element={<HomePage />}/> 
                    <Route path="/cadastro" element={<RegisterPage />}/> 
                    <Route path="/login" element= {<LoginPage />} /> 
                    <Route path="/home" element={<UserPage />} /> 
                    {/* <Route path="/update" element={< />}/> */}

                </Routes>
            </AuthProvider>
        </BrowserRouter>

    )
}

export default APP_ROUTES;