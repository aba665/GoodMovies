import React , { useState } from 'react';
import { createUser } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { CONTAINER, CONTENT } from "../StructureLogin/structureStyled";
import ReturnLogin from '../Message/returnLogin';

function StructureRegister(){
    
    const [ redirection, setRedirection ] = useState(false);     
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ age, setAge ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const path = useNavigate();

    async function handlerData(){
        
        if(!email || !password || !name || !age){
            return alert("Você deve preencher todos os campos!");
        }

        if(email == '' || password == ''){
            return alert("Você deve preencher todos os campos!");
        }else if(name == '' || age == ''){
            return alert("Você deve preencher todos os campos!");
        }
        
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
               
        }, 10000);

        let result = await createUser(email, password, name, nickname, age);
        console.log(result)
        if(result){
            setRedirection(result);
        }

    }

    if(redirection){
        return <ReturnLogin />
    }
    
    return (
        <CONTAINER>
            <CONTENT>
                <h1>Registro</h1>
                <label htmlFor="FullName">Nome:</label>
                <input type="text" value={name} name="FullName" id="FullName" placeholder="Nome Completo..." onChange={(e)=> setName(e.target.value)}/>
                <label htmlFor="NickName">Apelido:</label>
                <input type="text" value={nickname} name="NickName" id="NickName" placeholder="Ex: Bia" onChange={(e)=> setNickname(e.target.value)}/>
                <label htmlFor="Age">Idade:</label>
                <input type="number" value={age} name="Age" id="Age" placeholder="Ex: 25" onChange={(e)=> setAge(e.target.value)}/>
                <label htmlFor="Email">Email:</label>
                <input type="email" value={email} name="Email" id="Email" placeholder="Digite seu email" onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor="Password">Senha:</label>
                <input type="password" value={password} name="Password" id="Password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit' onClick={handlerData}>Registrar</button>

                {loading && (
                     
                     <>
                        <ReturnLogin />
                     </>
                     
                 )}
            </CONTENT>

                
        </CONTAINER>

        
    )
}

export default StructureRegister;