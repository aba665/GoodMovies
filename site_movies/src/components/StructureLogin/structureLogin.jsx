import React , { useState, useContext } from 'react';
import { AuthContext } from '../../context/validateTokenContext';
import { useLoginUser } from '../../service/api.js'
import { CONTAINER, CONTENT } from './structureStyled';
import { useNavigate } from 'react-router-dom';


function StructerLogin(){
    const { token, setToken, userVerificated, setUserVerificated } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const path = useNavigate();
    console.log("Usuário verificado = ", userVerificated);

    async function CheckLogin(){
        await useLoginUser(email, password, token, setToken, setUserVerificated);
        
    }

    if(userVerificated){
        return path('/home');
    }

    return (
        <CONTAINER>
        
            <CONTENT>
                <h1>Login</h1>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" id="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor="Password">Senha:</label>
                <input type="password" name="Password" id="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={CheckLogin}>Entrar</button>
            </CONTENT>

        </CONTAINER>
    )
}

export default StructerLogin;