import styled from "styled-components"
export const CabPorQueIntramet = styled.div`
  /* flex-basis:50%; */
  align-self: end;
  .card {
    /* display: flex; */
    justify-content: space-between;
    /* text-align:center; */
  }
  .cabCol1 {
    flex-basis: 40%;
  }
  .cabCol1-title {
    color: ${({ theme }) => theme.colors.amarillo};
    font-size: clamp(1.5rem, 2.4vw, 2rem);
    margin: 0;

    span {
      font-size: clamp(1.7rem, 2.4vw, 2.4rem);
      display: block;
      font-family: "Neue";
    }
  }
  .cabCol2 {
    flex-basis: 60%;
    text-align: right;
  }
  .cabCol2-text {
    font-style: italic;
    border-top: 2px solid ${({ theme }) => theme.colors.amarillo};
    padding-top: 0.7rem;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontsize.large};
  }
  span,
  p {
    color: ${({ theme }) => theme.colors.gris};
  }
  @media (max-width: 640px) {
    .card {
      flex-direction: column;
      align-items: center;
    }
    .cabCol1-title {
      text-align: center;
    }
  }
`
