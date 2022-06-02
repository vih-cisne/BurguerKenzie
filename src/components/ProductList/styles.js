import styled from "styled-components";

export const ContainerProducts = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 80vw;

  @media (max-width: 620px) {
    width: 95vw;
    padding: 1rem 0;
    justify-content: flex-start;
    margin-top: 2.5rem;
    flex-wrap: nowrap;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      height: 5px;
      
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
  }
`;

export const ResultFilter = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 5px;
  font-size: 1.3rem;
  top: 4rem;

  p {
    color: #828282;
    font-weight: 600;
  }

  @media (max-width:500px) {
    top: 5.5rem;
  }
`;
