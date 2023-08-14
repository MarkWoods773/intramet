import styled from "styled-components"
export const BlockBuses = styled.div`
  background-color: ${props => `${props.theme.colors[`${props.color}`]}`};
  padding: 3rem 0;
  h2,
  ul {
    color: ${props =>
      props.color === "azul"
        ? props.theme.colors.gris
        : props.theme.colors.azul};
  }
  h2 {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: end;
    &::after {
      content: "";
      height: 3px;
      background-color: ${props =>
        props.color === "azul"
          ? props.theme.colors.amarillo
          : props.theme.colors.azul};
      display: block;
      position: relative;
      bottom: 0.9rem;
    }
  }
  li {
    margin-bottom: 0.5rem;
    &::before {
      content: "";
      width: 7px;
      display: inline-block;
      height: 7px;
      background-color: ${props =>
        props.color === "amarillo"
          ? props.theme.colors.azul
          : props.theme.colors.amarillo};
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 0.5rem;
    }
  }
  @media (max-width: 640px) {
    h2 {
      grid-template-columns: 1fr;
      text-align: center;
      &::after {
        content: none;
      }
    }
  }
`
export const BusTitle = styled.h2`
  span {
    font-size: ${({ theme }) => theme.fontsize.extralarge};
  }

  margin-top: 0;
`
export const BusDetailsText = styled.ul`
  max-width: 45rem;
  font-size: ${({ theme }) => theme.fontsize.small};
  list-style: none;
`
export const BusDetails = styled.div`
  img {
    width: 65%;
  }
`
export const ItemLink = styled.div`
  align-self: flex-end;
  background-color: ${props =>
    props.color === "amarillo"
      ? props.theme.colors.azul
      : props.theme.colors.amarillo};
  padding-top: 10rem;
  width: 35%;
  text-align: right;
  a {
    border-top: 3px solid
      ${props =>
        props.color === "amarillo"
          ? props.theme.colors.amarillo
          : props.theme.colors.azul};
    color: ${props =>
      props.color === "amarillo"
        ? props.theme.colors.gris
        : props.theme.colors.azul};
    margin-right: 2rem;
    display: block;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontsize.medium};
    line-height: 2;
  }
`
export const BusDetailsItem = styled.div`
  display: flex;
  padding: 3rem 0;
`
