import styled from "styled-components"
import { Link } from "gatsby"
export const BusDetails = styled.div`
  padding: 2rem 0;
  display: grid;
  &.pageBus {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  &.desc__bus {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  gap: 2rem;
  .BusLink {
    width: 100%;
    img {
      width: 100%;
      height: 300px;
      /* height: 100%; */
      object-fit: cover;
    }
    .bus {
      object-position: left;
    }
    .det__bus {
      object-position: right;
    }
  }
  @media (max-width: 700px) {
    .BusLink {
      /* width: 100%; */
      img {
        height: 250px;
      }
    }
  }
`
export const ItemLink = styled(Link)`
  align-self: flex-end;
  text-align: center;
  background-color: ${props =>
    props.color === "amarillo"
      ? props.theme.colors.azul
      : props.theme.colors.amarillo};
  /* padding-top: 10rem; */
  width: 100%;
  /* text-align: right; */
  span {
    /* border-top: 3px solid
      ${props =>
      props.color === "amarillo"
        ? props.theme.colors.amarillo
        : props.theme.colors.azul}; */
    color: ${props =>
      props.color === "amarillo"
        ? props.theme.colors.gris
        : props.theme.colors.azul};
    /* margin-right: 2rem; */
    display: block;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontsize.medium};
    /* line-height: 2; */
  }
  @media (max-width: 700px) {
    /* width: 100%; */
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    span {
      margin-right: 0;
    }
  }
`
export const BusDetailsItem = styled.div`
  /* display: flex; */
  text-align: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
