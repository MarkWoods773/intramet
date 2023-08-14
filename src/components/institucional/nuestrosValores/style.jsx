import styled from "styled-components"
export const NuestrosValores = styled.div`
  .card {
    color: ${({ theme }) => theme.colors.azul};
    &__imgvalores {
      max-width:40rem;
      margin:0 auto;
      width:100%;
    }
    &__subtitle {
      font-family: "aller";
      margin-bottom: 0;
      /* text-align:left; */
    }
    &__wrapper {
      /* display: grid; */
      justify-content: center;
      width: 100%;
      text-align:center;
      grid-template-columns: auto 30% auto;
    }
    &__Img {
      max-width: 18vw;
      position: relative;
      &-derecho {
        right: -35%;
      }
      &-derechoMax {
        max-width: 15vw;
        right: -50%;
      }
      &-izquierdo {
        left: -35%;
      }
      &-izquierdoMax {
        max-width: 15vw;
        left: -50%;
      }
    }
    &__item {
      font-size: ${({ theme }) => theme.fontsize.large};
      text-align: center;
      &-1 {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
      }
      &-2 {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        align-self: center;
      }
      &-3 {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      &-4 {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        align-self: center;
      }
      &-5 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
      }
      /* aqui poposicionamos la imagen */
      &-6 {
        grid-column: 2 / 3;
        grid-row: 2 / 4;
        align-self: center;
        &-Img {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 640px) {
    .card {
      padding-top: 1rem;
      padding-bottom: 1rem;
      &__wrapper {
        display: grid;
        justify-content: center;
        width: 100%;
        grid-template-columns: auto 1fr auto;
      }
      h3 {
        font-size: ${({ theme }) => theme.fontsize.small};
      }
    }
  }
`
