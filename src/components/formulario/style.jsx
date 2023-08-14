import styled from "styled-components"
export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.azul};
  padding: 2rem 0;
  .condiciones {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    margin: 1rem 0;
    input {
      margin-bottom: 0;
    }
    a {
      color: inherit;
      text-decoration: underline;
    }
  }
  .cabecera {
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.medium};
    h2 {
      font-size: ${({ theme }) => theme.fontsize.large};
      font-family: "Aller";
    }
  }
  form {
    /* esto aun no se sabe hay que chekar como estan losdemas formularios */
    width: 55rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    form {
      width: 75vw;
    }
  }
  @media (max-width: 640px) {
    form {
      width: 100%;
    }
  }
`
