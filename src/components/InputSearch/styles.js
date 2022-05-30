import styled from 'styled-components'

export const ButtonSearch = styled.button`
    background: #27AE60;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    right: 4px;
    top: 8px;
    
    &:hover {
        filter: brightness(0.9);
    }

`

export const Search = styled.div`
    
    position: relative;
    width: fit-content;

    input {
        width: 250px;
        padding: 10px 10px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #E0E0E0;
    }

    input::placeholder {
        color: #E0E0E0;
    }

    input:focus {
        border: 1px solid black;
        outline: none;

    }


`

