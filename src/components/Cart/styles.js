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
    position: relative;

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
        align-items: center;
          
    }
`

export const CartAll = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    min-width: 280px;

    @media (max-width: 620px) {
        max-width: 80vw;
    }

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
    
`

export const ListCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: scroll;
    max-height: 80vh;
    ::-webkit-scrollbar {
      width: 5px;
      height: 0;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #27AE60;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #27AE00;
      
    }
    @media (max-width: 620px) {
        max-height: 50vh;
           
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

export const ButtonClose = styled.button`
    display: none;

    @media (max-width: 620px) {
        display: flex;
        background-color: transparent;
        width: fit-content;
        border: none;
        padding: 2px;
        font-size: 2rem;
        position: absolute;
        top: calc(50% - 1.8rem);
        right: 0;
    }

`

export const ContainerButtonCart = styled.div`
    position: absolute;
    right: 25px;


    @media (max-width:500px) {
        top: 5px;
    }

    @media (max-width:320px) {
        left: 5px;
    }
    

`

