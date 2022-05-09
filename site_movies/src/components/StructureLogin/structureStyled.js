import styled from 'styled-components';

export const CONTAINER = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

    h1{
        text-align: center;
        font-size: 2.5rem;
    }
`
export const CONTENT = styled.div`
    width: 45%;
    min-height: 400px;
    border: 4px solid gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    label{
        width: 70%;
        font-size: 1.2rem;
        font-weight: 600;
    }
    input{
        width: 70%;
        padding: 8px;
        border: outset;
        outline: 0;
        background: #d34a21;
        color: #fff;
    
        ::-webkit-inner-spin-button { -webkit-appearance: none;}
        ::-webkit-input-placeholder { color: black; }
        :-moz-placeholder { color: black; }
        ::-moz-placeholder { color: black; } 
        :-ms-input-placeholder { color: black; } 
    }
    button{
        margin: 10px 0;
        padding: 8px 15px;
        color: rgb(10, 10, 10);
        background-color: #d34a21;
        border-radius: 4px;
        
        &:hover{
            cursor: pointer;
            background-color: #d35b25;
        }
    }
    


`
