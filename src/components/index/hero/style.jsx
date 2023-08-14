import styled from "styled-components"
export const Hero = styled.div`
  position: relative;
  height: 90vh;
`
export const Banner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
`
export const BannerGrid = styled.div`
  display: grid;
  height: calc(100% - 1rem);
  padding: 1rem 0 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto ;
  h1,
  P {
    color: ${({ theme }) => theme.colors.gris};
    text-shadow: 2px 2px black
  }
  a {
    color: ${({ theme }) => theme.colors.amarillo};
    text-decoration: none;
    /* border: 1px solid ${({ theme }) => theme.colors.gris}; */
    background-color: ${({ theme }) => theme.colors.azul};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 1rem 2rem;
    font-weight:bold;
    font-size: ${({ theme }) => theme.fontsize.large};
    &:hover {
      background-color: ${({ theme }) => theme.colors.amarillo};
      color: ${({ theme }) => theme.colors.gris};
      border: 1px solid ${({ theme }) => theme.colors.amarillo};
      transition: all 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }
  }
  h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.xlextralarge};
    align-self: center;
    margin: 1rem 0;
  }
  .info-limpo {
    text-align: center;
    align-self: flex-end;
  }
  .comillas {
    color: ${({ theme }) => theme.colors.amarillo};
  }
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`
