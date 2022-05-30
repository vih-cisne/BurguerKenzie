import styled from 'styled-components'

export const Button = styled.button`
    background: #27AE60;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    
    
    &:hover {
        filter: brightness(0.9);
    }

`

export const Card = styled.div`
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    max-width:300px;
    min-width: 250px;
    padding: 0 0 15px 0;
    box-sizing: border-box;

    div{
        object-fit: cover;
        height: 150px;
        width: 100%; 
        background-color:#F5F5F5;
    }

    img {
        width: 100%;
        height: 215px;
        margin-top: -4rem;
    }

    h4, small, p, button {
        margin-left: 20px;
    }

    h4 {
        font-size: 1.1rem;
    }

    small {
        font-size: 0.8rem;
    }

    p, button {
        font-size: 0.9rem;
    }

    
`

