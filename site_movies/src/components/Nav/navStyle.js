import style from 'styled-components';

export const Container = style.div`
    
    width: 100%;
    min-height: 3.5rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;

    h2{
        margin-left: 1.2rem;
    }
    ul{
        display: flex;
    }
    li{
        list-style: none;
        padding: 0 6px;
    }
    a{
        color: black;
        font-size: 1.1rem;
        text-decoration: none;
    }
`