import styled from "styled-components"
export const PorQueIntramet = styled.div`
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  text-align: center;
  .container {
    height: 100%;
    display: grid;
    align-items: center;
    gap: 1.2rem;
  }
  .card {
    padding: 0;
  }
  .card-body {
    /* width: 50%; */
    align-self: flex-start;
    &-title {
      color: ${({ theme }) => theme.colors.amarillo};
      font-size: ${({ theme }) => theme.fontsize.extralarge};
      margin-bottom: 0;
      margin-top: 0;
    }
    &-text {
      color: ${({ theme }) => theme.colors.gris};
      font-style: italic;
      font-size: 2.5rem;
      margin: 0 auto;
      max-width:40rem;
    }
  }
  @media (max-width: 1000px) {
    .card-body {
      &-text {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 640px) {
    .card-body {
      width: 100%;
      text-align: center;
      &-text {
        color: ${({ theme }) => theme.colors.gris};
        font-style: italic;
        font-size: ${({ theme }) => theme.fontsize.large};
        margin-top: 0;
      }
    }
  }
`
