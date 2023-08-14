import styled from "styled-components"
// import {Link} from "gatsby"
export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.azul};
  padding-top: 2rem;
  .container {
    position: relative;
  }
  .condicion {
    color: ${({ theme }) => theme.colors.gris};
    text-decoration:underline;
  }

  .wrapper {
    height: ${({ theme }) => theme.size.heightMax};
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    &:nth-child(even) {
      .container {
        align-items: flex-end;
      }
    }
    &:nth-child(odd) {
      .container {
        align-items: flex-start;
      }
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .card-body {
    width: 50%;
    position: absolute;
    bottom: 3rem;
    text-align:justify;
    &-title {
      font-family: "aller";
      color: ${({ theme }) => theme.colors.amarillo};
      font-size: ${({ theme }) => theme.fontsize.large};
      margin-bottom: 0;
    }
    &-text {
      color: ${({ theme }) => theme.colors.gris};
      font-size: ${({ theme }) => theme.fontsize.medium};
      margin-top: 0;
    }
  }
  @media (max-width: 800px) {
    .card-body {
      position: relative;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-title {
        text-align: center;
        margin-bottom: 1rem;
      }
      &-text {
      }
    }
  }
`
export const Boton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gris};
  border: 1px solid ${({ theme }) => theme.colors.amarillo};
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  width: auto;
  display: inline-block;
  text-align: center;
  .btnflex{
    display:flex;
    align-items:center;
    justify-content:center;
    .icon__what{
      margin-right:.5rem;
      font-size:1.2rem;
    }
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.gris};
    color: ${({ theme }) => theme.colors.azul};
    transition: 0.3s;
  }
  @media (max-width: 800px) {
    display:block;
  }
`
