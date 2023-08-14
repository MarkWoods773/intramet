import styled from "styled-components"
export const Historia = styled.div`
  background-color: ${({ theme }) => theme.colors.amarillo};
  text-align:justify;
  padding:1.2rem 0;
  .card {
    &__text {
      color: ${({ theme }) => theme.colors.azul};
      font-size: ${({ theme }) => theme.fontsize.small};
      /* font-weight:bold; */
      .leeMas{
        color: ${({ theme }) => theme.colors.azul};
        font-weight:bold;
        /* text-decoration: */
      }
    }
    &__video {
      margin: 2rem auto 0;
      display: block;
      max-width: 500px;
      width: 100%;
    }
  }
`
