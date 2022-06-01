import styled from 'styled-components'

export const ContainerProducts = styled.div`

    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
    width: 80vw;

    @media (max-width: 620px) {
        width: 95vw;
        padding: 1rem 0;
        margin-top: 2.5rem;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    
`

export const ResultFilter = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    gap: 5px;
    font-size: 1.3rem;

    p {
        color: #828282;
        font-weight: 600;
    }
`