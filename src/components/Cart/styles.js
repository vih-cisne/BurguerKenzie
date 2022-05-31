import styled from 'styled-components'

export const HeaderCart = styled.div`
    background: #27AE60;
    margin-top: 4rem;
    color: white;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: fit-content;
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;

    font-weight: 600;

    h4 {
        white-space: nowrap;
    }

`

export const CartAll = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    min-width: 280px;

`

export const ContextCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: #F5F5F5;
    gap: 15px;
    padding-top: 15px;
    min-height: 120px;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h4 {
        margin: 0;
    }

    p {
        margin: 0;
    }
    

`

