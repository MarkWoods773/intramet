import styled from "styled-components"
import { Link } from "gatsby"
export const Block = styled.div`
  display: flex;
  /* height: 90vh; */
  text-align:justify;
  .col1 {
    flex-basis: 60%;

  }
  .col2 {
    align-self: center;
    padding: 4rem;
    flex-basis: 40%;
    max-width: 30rem;
    text-align:justify;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .row1 {
    text-align: center;
    h3 {
      font-size: ${({ theme }) => theme.fontsize.large};
      margin-top: 0;
    }
    p {
      font-weight: bold;
    }
  }
  .row2 {
    & > div {
      margin-bottom: 0.5rem;
    }
    h4 {
      display: inline-block;
      margin-bottom: 0;
      font-family: "Aller";
    }
    .box__btn {
      text-align: center;
    }
    .arrow-right {
      margin-right: 10px;
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    /* height: auto; */
    .col1,
    .col2 {
      flex-basis: auto;
    }
    .col1 {
      /* height: 20vh; */
    }
    .col2 {
      /* height: 80vh; */
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: center; */
    }
  }
  @media (max-width: 500px) {
    .col2 {
      padding: 1.2rem 3rem;
    }
  }
`
export const Btn = styled(Link)`
  padding: 0.3rem 2rem;
  border-radius: 15px;
  :hover {
    transition: 0.5s;
  }
`
export const BlockWrapper = styled.div`
  &:nth-child(even) {
    h3,
    .arrow-right {
      color: ${({ theme }) => theme.colors.amarillo};
    }

    background-color: ${({ theme }) => theme.colors.azul};
    color: ${({ theme }) => theme.colors.blanco};
    ${Btn} {
      color: ${({ theme }) => theme.colors.blanco};
      border: 2px solid ${({ theme }) => theme.colors.amarillo};
      :hover {
        background-color: ${({ theme }) => theme.colors.blanco};
        color: ${({ theme }) => theme.colors.azul};
      }
    }
  }
  &:nth-child(odd) {
    h3,
    .arrow-right {
      color: ${({ theme }) => theme.colors.azul};
    }
    background-color: ${({ theme }) => theme.colors.amarillo};
    color: ${({ theme }) => theme.colors.negro};
    ${Btn} {
      color: ${({ theme }) => theme.colors.azul};
      border: 2px solid ${({ theme }) => theme.colors.azul};
      :hover {
        background-color: ${({ theme }) => theme.colors.blanco};
      }
    }
  }
`
