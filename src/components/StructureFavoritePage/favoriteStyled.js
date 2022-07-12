import styled from "styled-components";

export const SUBCATEGORY = styled.div`
    width: 100%;

    h2{
        margin: 5px 0;
        text-align: center;
        color: #fff;
    }
`
export const CONTAINER = styled.div`
    width: 80%;
    background: #333;
    margin: 10px auto;
    padding: 10px;
    box-shadow: 2px 2px 5px black;

`
export const GALLERYITEM = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0; 

    @media(min-width: 601px) and (max-width: 1140px){
        img{
            width: 40vw;
            height: 40vh;
        }
    }
    @media(max-width: 600px){
        display: block;

        img{
            width: 250px;
            height: 250px;
        }
    }
    `
export const GALLERYITEMINFO = styled.div`
    padding: 10px;
    text-align: justify;
    font-size: 1.1rem;
    color: #fff;

    h3{
        font-weight: 600;
    }
`

export const BTNFAVORITE = styled.button`
    padding: 3px;
    border-radius: 2px;
    background: #333;
    color: white;
    &:hover{
        cursor: pointer;
    }
`
export const PARAGRAPH = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
`