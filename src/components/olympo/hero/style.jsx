import styled from "styled-components"
import bgHeroOlimpo from "../../../assets/images/bgHeroOlimpo.png"
export const Hero = styled.div`
  padding: 3rem 0;
  background-image: url(${bgHeroOlimpo});
  color: ${({ theme }) => theme.colors.azul};
  background-repeat: no-repeat;
  background-size: 45%;
  background-color: ${({ theme }) => theme.colors.amarillo};
  /* background-position: 0 100%; */
  display: flex;
  align-items: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    /* padding:3rem 0; */
  }
  .image-flex {
    position: relative;
    .video {
      display:flex;
      justify-content:center;
        
      .azul {
        box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.amarillo};;
        border: 3px solid ${({ theme }) => theme.colors.amarillo};;
      }
    }
  }
  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    font-family: "Aller";
    margin-bottom: 0.3rem;
  }
  .text-hero-especial {
    font-size: 0.8rem;
    margin: 1rem 1rem 2rem;
  }
  img {
    text-align: center;
    width: 100%;
    justify-self: center;
  }
  .info {
    justify-self: end;
    max-width: 100%;
    .titleCaracteristicas {
      margin-top: 1rem;
    }
  }
  .caracteristicas {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    .col1 {
      border-top: 2px solid ${({ theme }) => theme.colors.azul};
      border-right: 2px solid ${({ theme }) => theme.colors.azul};
      padding: 0 0.5rem;
      box-sizing: border-box;
      /*para el espacio de arriba de la tabla
            */
      h4 {
        &:first-child {
          margin-top: 0.7rem;
        }
      }
    }
    .col2 {
      border-top: 2px solid ${({ theme }) => theme.colors.azul};
      padding: 0 0.5rem;
      box-sizing: border-box;

      /*para el espacio de arriba de la tabla
            */
      p {
        &:first-child {
          margin-top: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 800px) {
    background-image: none;
    height: auto;
    .container {
      grid-template-columns: 1fr;
      gap: 1.2rem;
      .info {
        max-width: 100%;
      }
      img {
        width: 100%;
        align-self: center;
      }
    }
  }
  @media (max-width: 500px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`
