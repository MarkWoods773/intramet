import styled from "styled-components"
export const MisionVision = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.azul} 0%,
    ${({ theme }) => theme.colors.azul} 65%,
    ${({ theme }) => theme.colors.gris} 50%,
    ${({ theme }) => theme.colors.gris} 100%
  );
  /* background-color:${({ theme }) => theme.colors.azul}; */
  .card {
    display: grid;
    column-gap: 1rem;
    /* width:100%; */
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    &__title {
      font-size: ${({ theme }) => theme.fontsize.large};
      font-family: "Aller";
    }
    &__text {
      font-size: ${({ theme }) => theme.fontsize.small};
    }
    &__item {
      color: ${({ theme }) => theme.colors.azul};
      text-align: center;
      max-width: 500px;
      border-radius: 20px;
      padding: 1.5rem;
      box-sizing: border-box;
      &-mision {
        justify-self: end;
        background-color: ${({ theme }) => theme.colors.gris};
        border: 5px solid ${({ theme }) => theme.colors.amarillo};
      }
      &-vision {
        background-color: ${({ theme }) => theme.colors.amarillo};
        justify-self: start;
        border: 5px solid ${({ theme }) => theme.colors.gris};
      }
    }
  }
  .logoIsoTipoSvg {
    fill: ${({ theme }) => theme.colors.azul};
  }
  @media (max-width: 640px) {
    .card {
      grid-template-columns: 1fr;
      justify-content: center;
      row-gap: 1rem;
    }
    /* para centrar los hijos de card para el responsive */
    .card > div {
      justify-self: center;
    }
    
  }
`
