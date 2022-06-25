import styled from 'styled-components';


export const Container = styled.div`
    
    width: 85%;
    margin: 2rem auto;
    height: 90vh;
    min-height: 60vh;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    font-family: cursive;
    font-weight: 600;
    @media(max-width: 1300px) and (min-width: 762px){
        height: 50vh;
    }
    @media(max-width: 762px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 100vh;
    
    }

`
export const Film = styled.img`
    
    width: 350px;
    height: 350px;
    
    @media(max-width: 1250px) and (min-width: 763px){
        width: 200px;
        height: 200px;
    }
    @media(max-width: 762px){
        
        width: 15vh;
        height: 15vh;
        margin: auto;
        
        
    }
    `
    export const BoxFilm = styled.div`
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 80%;
    
        p{
            font-size: 0.8rem;
        }
        @media(max-width: 762px){
        width: 100%;
        height: 40%;
        text-align: center;
        margin: auto;
        
        
    }
    `