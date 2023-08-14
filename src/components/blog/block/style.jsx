import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gris};
  padding: 2.5rem 0;
  .blog .titleItem{
    color :${({ theme }) => theme.colors.amarillo};
    background-color :${({ theme }) => theme.colors.azul};
    margin: 0;
    padding:1rem;
  }
  .blog .item .info{
    padding-top: 2rem;
    padding-bottom: 2.8rem;

 
  }
  .blog .item{
    position: relative;
  }
  .blog .item .Link{
    position: absolute;
    bottom:1.5rem;
    right: 1rem;
  }
  .wrapperflex {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
  /* para posicionar los elementos usaremos hijos */
  .item {
    background-color: ${({ theme }) => theme.colors.blanco};
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 2px 2px 13px 1px rgba(0, 0, 0, 0.16);
    transition: all ease-in-out 300ms;
    &:hover {
      box-shadow: 2px 2px 13px 1px rgba(0, 0, 0, 0.36);
    }
    .info {
      padding: 0 1rem 1.5rem 1rem;
      position: relative;
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
    }
    .Link {
      text-align: right;
      margin-top: auto;
    }
    /* para que no desborde la imagen la ponemos al 100 por ciento del item */
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    h4 {
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontsize.small};
    }
    p {
      margin-top: 0;
    }
    /* h4 titulo */

    /* primera columna */
    /* &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    &:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      img {
        height: auto;
      }
    }
    &:nth-child(4) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      img {
        height: auto;
      }
    }
    &:nth-child(6) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
    /* segunda columna */
    /* &:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    &:nth-child(5) {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
      img {
        height: auto;
      }
    } */

    /* &:last-child {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    } */ 
  }
  @media (max-width: 1000px) {
    .item {
      img {
        height: 250px;
      }
    }
  }
@media (min-width: 1350px){
  .wrapperflex{
  grid-template-columns:1fr 1fr 1fr;
  img{
    height: 300px;
  }
}
}
@media (max-width: 640px){
  .wrapperflex{
    grid-template-columns:1fr;
  }
  .item{
    grid-column:auto !important;
    grid-row:auto !important;
    img{
      height:250px !important;
    }
  }
}
`