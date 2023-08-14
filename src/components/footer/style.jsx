import styled from "styled-components"
export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.azul};
  margin-top: 1rem;
  padding: 2rem 0;
  .iconContainer{
    display: flex;
    align-items: center;
    .iconFooter{
      margin-right: .5rem;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    &__img {
      width: 180px;
      margin-right: 2rem;
    }
    &__contactanos {
      display: flex;
      align-items: center;
      div {
        display: flex;
      }
    }
    &__title {
    }
    &__icon {
      color: ${({ theme }) => theme.colors.gris};
      font-size: 5rem;
      padding: 0 1rem;
    }
  }
  .body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* esto solo se mostrara en responsive */
    &__title_img {
      display: none;
    }
    li {
      margin-bottom: 0.5rem;
    }
    .spaceBar {
      background-color: ${({ theme }) => theme.colors.amarillo};
      width: 1px;
      height: 23rem;
      align-self: center;
    }
    &__title {
      font-family: "Aller";
      font-size: ${({ theme }) => theme.fontsize.medium};
      color: ${({ theme }) => theme.colors.amarillo};
      &-desarrollado {
        font-size: ${({ theme }) => theme.fontsize.xssmall};
      }
    }
    &__link {
      color: ${({ theme }) => theme.colors.gris};
    }
    &__text {
      color: ${({ theme }) => theme.colors.gris};
      &-arequipa {
        flex-basis: 100%;
      }
    }
    &__factory {
      display: flex;
      text-align: center;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-basis: 20%;
      align-self: flex-end;
    }
    &__developed {
      width: calc(50% - 1rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      & .acidImg {
        width: 80%;
        height: auto;
      }
      &:first-child {
        padding-right: 1rem;
      }
    }
    &__img {
      width: 80%;
    }
  }
  li {
    list-style: none;
  }
  @media (max-width: 1200px) {
    .iconContainer{justify-content:center}
    .body__factory {
      flex-basis: 100% !important;
    }
    .body {
      .spaceBar {
        display: none;
      }
      .acidImg {
          width: 47%;
          height: auto;
        }
      & > div {
        flex-basis: calc(100% / 3);
        text-align: center;
      }
    }
  }
  @media (max-width: 920px) {
    .header {
      &__img {
        width: 150px;
        margin-right: 0;
      }
    }
    margin-top: 1rem;
    .body {
      .spaceBar {
        display: none;
      }
      &__factory {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      &__developed {
        &:first-child {
          padding-right: 0;
        }
      }
      & > div {
        flex-basis: 50%;
        text-align: center;
      }
      &_mapaSite,
      &__tpBuses {
        display: none;
      }
    }
    .header {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &__imgLink {
        text-align: center;
      }
    }

    @media (max-width: 800px) {
      .body {
        img {
          width: 62%;
        }
      }
    }
    @media (max-width: 500px) {
      .header {
        &__contactanos {
          flex-direction: column;
        }
        img {
          height: 5vh;
          width: auto;
        }
      }
      .body {
        img {
          display: none;
        }
        &__title_img {
          color: ${({ theme }) => theme.colors.gris};
          margin: 0;
          display: block;
        }
        & > div {
          flex-basis: 100%;
        }
        &__link,
        &__nav a {
          border-radius: 25px;
          padding: 0.5rem 0.8rem;
          border: 2px solid ${({ theme }) => theme.colors.amarillo};
          &:hover {
            background-color: ${({ theme }) => theme.colors.gris};
            color: ${({ theme }) => theme.colors.azul};
            transition: 0.3s;
          }
        }
        &__title {
          margin: 0.5rem 0;
        }
        &__nav {
          color: black;
          li {
            margin-bottom: 2rem;
          }
        }
        &__mapaSite {
          display: none;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .body {
      &__factory {
        flex-direction: column;
      }
    }
  }
`
