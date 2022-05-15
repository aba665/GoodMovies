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

    ol li{
        margin: 4px 0;
        padding: 10px;
        border-bottom: 3px solid #333;
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
    }
`
export const CONTAINER_MOVIES = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 30%;
        padding: 10px;
    }
    div img{
        width: 15vw;
        height: 15vw;
    }
`
export const SUB_CATEGORY = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        text-align: center;
    }
    section{
        
        width: 95%;
        background-color: #fff;
        margin: 20px auto;
    }
`