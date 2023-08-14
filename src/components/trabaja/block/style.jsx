import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.amarillo};
  padding: 3rem 0;
  img {
    width: 100%;
    height: auto;
  }
  .rowBlock {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    h2 {
      font-family: "Aller";
      font-size: ${({ theme }) => theme.fontsize.medium};
      color: ${({ theme }) => theme.colors.azul};
    }
  }
  @media (max-width: 500px) {
    .rowBlock {
      grid-template-columns: 1fr;
    }
  }
`
