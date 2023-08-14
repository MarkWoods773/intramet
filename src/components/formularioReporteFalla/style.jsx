import styled from "styled-components"
export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.azul};
  padding: 2rem 0;
  .moreWhatsapp {
    margin: 0.5rem;
    display:flex;
    align-items:center;

  }
  .condiciones{
    display:grid;
    grid-template-columns:20px 1fr;
    align-items:center;
    input{
      margin:0;

    }
  }
  .condionestitle{
    text-decoration-line:underline;
    color:black;
  }
  .whatsappVerde {
    display:flex;
    align-items:center;
    .iconWhatsap {
      font-size: 1.2rem;
    }
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.verdeWhatsap};
    color: ${({ theme }) => theme.colors.blanco};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.verdeWhatsap};
    :hover {
      background-color: ${({ theme }) => theme.colors.blanco};
      color: ${({ theme }) => theme.colors.verdeWhatsap};
      transition: 0.3s;
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
    width: 35rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    form {
      /* width: 75vw; */
    }
  }
  @media (max-width: 640px) {
    form {
      width: 100%;
    }
  }
`
