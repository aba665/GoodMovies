import styled from 'styled-components';

export const CONTAINER = styled.div`
    position: absolute;
    top: 40%;
    right: 30%;
    background: #fff;
    min-height: 20%;
    min-width: 40%;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid black;

    h2{
        text-align: center;
        margin-bottom: 10px;
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

