import styled from "styled-components"
// props.background === "gris"
// ? props.theme.colors.gris
// : `linear-gradient(to bottom, ${props.theme.colors.amarillo} 0%, ${props.theme.colors.amarillo} 30%, ${props.theme.colors.gris} 1%,${props.theme.colors.gris} 100%)`};
export const Wrapper = styled.div`
  padding: 2.5rem 0;
  background: ${props =>props.theme.colors.amarillo};
  .react-fancybox .close-btn{
    width:25px !important;
    height:25px !important;
  }
  .wrapperflex {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
  /* para posicionar los elementos usaremos hijos */
  .item {
    /* para que no desborde la imagen la ponemos al 100 por ciento del item */
    img {
      width: 100%;
      height: auto;
    }
    &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    &:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
    &:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    &:last-child {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }
  }
  @media (max-width: 500px) {
    .wrapperflex {
      grid-template-columns: 1fr;
      }
      .item {
        img{
          width:75%;
          height:auto;
          object-fit:contain;
          display:flex;
          margin:0 auto;
        }
        &:first-child,
        &:nth-child(2),
        &:nth-child(3),
        &:last-child {
          grid-column: auto;
          grid-row: auto;
        
      }
    }
  }
`
