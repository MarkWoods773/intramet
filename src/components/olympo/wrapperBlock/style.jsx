import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.amarillo};
  color: ${({ theme }) => theme.colors.azul};
  padding-top:2rem;
  h2 {
    margin-top: 0;
    font-family: "aller";
    font-size:clamp(1.5rem,3vw,2.4rem);
    text-align:center;
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.azul};
      display: block;
    }
  }
`
