import style from 'styled-components';


export const Container = style.div`
    
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

`
export const BoxFilm = style.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 80%;

    p{
        font-size: 1rem;
    }

`
export const Film = style.img`
    height: 80%

`