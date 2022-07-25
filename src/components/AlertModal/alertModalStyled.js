import styled from 'styled-components';

export const CONTAINER = styled.div`
    position: fixed;
    top: 40%;
    right: 30%;
    background: #333;
    color: #fff;
    box-shadow: 5px 5px 20px black;
    min-height: 20%;
    min-width: 40%;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid black;

    h2{
        text-align: center;
        margin-bottom: 10px;
    }
    @media(max-width: 700px){
        right: 28%;
    }
    @media(min-width: 500px) and (max-width: 600px){
        right: 20%;
    }
    @media(min-width: 300px) and (max-width: 499px){
        right: 10%;
    }
    @media(max-width: 300px){
        right: 0.5%;
    }
`
export const BOXBUTTON = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
        background-color: #333;
        width: 20%;
        padding: 10px;
        border-radius: 10px;

      p{
          color: #fff;
      }  
        
    }
    &button:hover{
        cursor: pointer;
    
    }
`

