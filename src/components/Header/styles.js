import styled from 'styled-components'

export const HeaderStyle = styled.header`

    background-color: #F5F5F5;
    padding: 0.9rem;
    display: flex;
    justify-content: space-between;

    @media (max-width:500px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

`

