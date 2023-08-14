import styled from "styled-components"
export const Hero = styled.div`
  position: relative;
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  &.bgleft
  {
  background-position: left;
  }
  &.bgcenter
  {
    background-position: center;
  }
  &.heroBlog{
    height: 50vh;
  }
  .banner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${({ theme }) => theme.colors.gris};
    font-size: ${({ theme }) => theme.fontsize.large};
    padding: 0 2rem;
    display: grid;
    justify-content: end;
    justify-items: center;
    &__title {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      max-width:40rem;
    }
    &__space {
      background-color: ${({ theme }) => theme.colors.gris};
      width: 3px;
      height: 100%;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    .logoIsoTipoSvg {
      fill: ${({ theme }) => theme.colors.amarillo};
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 800px) {
    .banner {
      grid-template-columns: 1fr;
      position:relative;
      align-items:center;
      height:100%;
      &__title {
        text-align: center;
        grid-column:auto;
        grid-row:auto;
        text-transform: uppercase;
        :hover{
          ::before{
          transform:translateX(100%);
          transition:.3s;
          }
          ::after{
          transform:translateX(-100%);
          transition:.3s;
          }
        }
        ::before,::after{
          content:'';
          display:block;
          width:50%;
          height:3px;
          transition:1s;
          background-color:${({theme})=>theme.colors.gris};
        }
        ::before{
          margin-bottom:.5rem;
        }
        ::after{
          margin-top:.5rem;
          margin-left:auto;
        }
      }
      &__space,
      .logoIsoTipoSvg {
        display: none;
      }
    }
  }
`
