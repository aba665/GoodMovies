import React , { useState, useContext } from 'react';
import { AuthContext } from '../../context/validateTokenContext';
import { useLoginUser } from '../../service/api.js'
import { CONTAINER, CONTENT } from './structureStyled';
import { useNavigate } from 'react-router-dom';

import Spinner from '../SpinnerLoading/loading';
import ModalAlert from '../AlertModal/alertModal';

function StructerLogin(){
    const { token, setToken, userVerificated, setUserVerificated } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ modal, setModal ] = useState(false);
    const [ title, setTitle ] = useState('');
    const path = useNavigate();

    async function CheckLogin(){
        setLoading(true);
        await useLoginUser(email, password, token, setToken, setUserVerificated, setTitle);
        if(userVerificated === false){
                setTimeout(() => {
                    setLoading(false);
                    setModal(true);
    
                    setTimeout(() => {
                        setModal(false);
                    }, 4000);
                }, 4000);
        }
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
            {loading && <Spinner />}
            {modal && <ModalAlert title={title} showHide='hide'/>}
        </CONTAINER>
    )
}

export default StructerLogin;