import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    min-height: 3.7rem;
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
export const LITTLE_DETAIL = styled.li`
   font-size: 1.3rem;
   &:hover{
        font-weight: 600;
    }
`
