import styled from 'styled-components'

export const ItemCart = styled.div`
    display: flex;
    gap: 15px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    
    `

export const ImgCart = styled.div`
    background-color: #E0E0E0;
    width: 80px;
    height: 80px;
    object-fit: fill;
    border-radius: 10px;

    img {
        height: 120%;
    }
    

`

export const CartMiddle = styled.div`
    margin-top: 0.5rem;
    width: 45%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h4 {
        color: #333333;
    }

    small {
        color: #828282;
    }
    
`

export const CartEnd = styled.div`
    width: 22%;
    display: flex;
    margin-top: 5px;
    position: relative;
    flex-direction: column;
    gap: 10px;

    color: #828282;
    p {
        font-size: 0.8rem;
    }
    button {
        border: none;
        border-radius: 5px;
        background-color: #828282;
    }
`

export const QuantityControl = styled.div`
    display: flex;
    position: absolute;
    bottom: 5px;
    left: -15px;

    span {
        padding: 0 5px;
        color: #333333;
        font-size: 0.9rem;
    }

    button {
        background-color: transparent;
        font-size: 1rem;
        color: #828282;
    }

`