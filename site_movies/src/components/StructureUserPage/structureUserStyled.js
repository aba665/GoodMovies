import styled from 'styled-components';

export const HEADER = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover li{
        cursor: pointer;
    }
    @media(max-width:670px){
        display: block;
        h1{display: none;}
        ul li{
            display: block;
            width: 95%;
            padding: 0;
            margin: 0;
            text-align: center;
        }


    }
`
export const NAME_USER = styled.li`
    height: 100%;
    line-height: 70px;
`

export const BOXUSER = styled.div`
    padding: 5px;
    margin-top: 10px;
    font-size: 1.2rem;

   ul li{
        display: inline-block;
        list-style: none;
        margin-bottom: 5px;
   }
   ul li img{
    margin: auto;
    width: 50px;
   }


`
export const BOX_MENU = styled.div`
    
    ul li{
        display: inline-block;
        margin: 0 5px;
    }
    li a{
        text-decoration: none;
        color: black;
    }
`
export const MAIN = styled.main`
    width: 100%;
    display: flex;
    justify-content: space-around;

    section{
        margin: 40px 0;
    }
`

export const CARD_SUGEST = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
    background: #fff;

    ul li{
        margin: 4px 0;
        padding: 10px;
        background: #333;
        border: 3px solid #fff;
        list-style: none;
        color: white;
    }
    li h3{
       font-size: 15px;
       text-align: center;
       width: 80%;
       margin: auto;
    }
    &:hover li{
        cursor: pointer;
    }
    @media(max-width: 916px){
      display: none;
    }
`
export const CARD_TOP_MOVIES = styled.section`
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: #fff;
    padding: 10px;

    h2{
        text-align: center;
        margin: 3px 0;
    }

    button{
        padding: 3px;
        border-radius: 2px;
        background: #333;
        color: white;
    }
    &:hover button{
        cursor: pointer;
    }

    img{
        width: 300px;
        height: 350px;
    }
    
`
export const CONTAINER_MOVIES = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div{
        width: 30%;
        padding: 10px;
    } 
    img{
        width: 100%;
        height: 50%;
    }
    div p{
        
    }
    button{
        padding: 3px;
        border-radius: 2px;
        background: #333;
        color: white;
    }
    &:hover button{
        cursor: pointer;
    }
`
export const SUB_CATEGORY = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
        margin: 5px 0;
    }
    section{
        
        width: 90%;
        background-color: #fff;
        margin: 20px auto;
    }
    section img{
        width: 350px;
        height: 300px;
    }
    section button{
        padding: 3px;
        border-radius: 2px;
        background: #333;
        color: white;
    }
    &:hover section button{
        cursor: pointer;
    }
    

`
export const CATEGORY_OPTIONS = styled.li`

    ul{
        display: none;
        position: absolute;
        top: 58px;
        left: 40%;
        background-color: #333;
        text-align: center;
        width: 10%;
        height: 150px;
        transition: 1.2s ease-in;
    }
    &:hover ul{
        display: block;
    }
    ul li{
        display: block;
        width: 100%;
        margin: 5px 0;
        color: #fff;
    }
    &:hover ul li{
        cursor: pointer;
        background-color: #fff;
        color: #333;
    }
    @media(max-width:670px){
       ul{ 
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        height: 50px;
    }
    }
`
export const CONFIG_OPTIONS = styled.li`


    ul{
        display: none;
        position: absolute;
        top: 58px;
        left: 50%;
        background-color: #333;
        text-align: center;
        width: 25%;
        height: 150px;
        transition: 1.2s ease-in;
    }

    &:hover ul{
        display: block;   
    }

    ul li{
        display: block;
        width: 100%;
        margin: 5px 0;
        color: #fff;
        background-color: #fff;
    }

    &:hover ul li{
        cursor: pointer;
        color: #333;
        background: #fff;
    }
    @media(max-width:670px){
       ul{ 
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        height: 50px;
    }
}
`