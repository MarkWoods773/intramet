import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: ${props =>
    props.backcolor === "gris"
      ? props.theme.colors.gris
      : props.theme.colors.amarillo};
  padding:1rem 0;
  /* .wrapperflex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      margin-bottom: 2rem;
      flex: 0 1 calc(100% / 3 - 1em);
      &:nth-child(4),
      &:nth-child(5) {
        flex: 0 1 calc(100% / 2 - 1em);
      }
    }
  } */
  .wrapperflex{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:2rem;
  }
  .react-fancybox .close-btn{
    width:25px !important;
    height:25px !important;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  /* aumento de tamaño libreria para popup en desktop mas grande */
  @media (max-width: 1020px) {
    .SRLElementWrapper img{
     
        width:75% !important;
      
    }
  }
  @media (max-width: 800px) {
    /* .wrapperflex {
      .item {
        margin-bottom: 2rem;
        flex: 0 1 calc(100% / 2 - 1em);
        &:nth-child(4),
        &:nth-child(5) {
          flex: 0 1 calc(100% / 2 - 1em);
        }
      }
    } */
    .wrapperflex{
    grid-template-columns:repeat(2,1fr);
  }
    @media (max-width: 500px) {
      .wrapperflex {
        grid-template-columns:1fr;
        .item {
          img {
            height: auto;
            width: 75%;
            display: flex;
            margin: 0 auto;
            object-fit: contain;
          }
        }
      }
    }
  }
`
