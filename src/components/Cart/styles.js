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

export const BackgroundCart = styled.div`

    @media (max-width: 620px) {
        display: ${({showCart}) => showCart ? 'flex' : 'none' };
        width: 100vw;
        height: 100vh;
        background-color: rgb(255,255,255, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        justify-content: center;
          
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
        color: #333333;
    }

    p {
        margin: 0;
        color: #828282;
    }

    @media (max-width: 620px) {
        max-height: 60vh;
        overflow-y: scroll;
          
    }
    

`

export const CartButton = styled.button`
    display: none;
    height: fit-content;
    border: none;
    border-radius: 50%;
    padding: 12px 15px;
    background: #27AE60;
    color: white;
    font-size: 1rem;
    position: relative;

    span {
        position: absolute;
        top: 0;
        right: 5px;
        color: #333333;
        background-color: #828282;
        padding: 1px 4px;
        border-radius: 50%;
        font-size: 0.8rem;
        font-weight: 600;
    }

    @media (max-width: 620px) {
        display: flex;
    }

`

export const ContainerButtonCart = styled.div`
    position: absolute;
    top: 5px;
    right: 25px;
    

`

