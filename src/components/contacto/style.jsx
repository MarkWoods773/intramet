import styled from "styled-components"
export const FormularioWrapper = styled.div`
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  .infoContacto{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:1rem;
  }
  @media (max-width:1200px){
    .infoContacto{
    grid-template-columns:1fr;}
  }
  .body__contacto {
    color: ${({ theme }) => theme.colors.azul};
    h3 {
      font-size: ${({ theme }) => theme.fontsize.large};
    }
    a,li {
      color: ${({ theme }) => theme.colors.azul};
      font-size: ${({ theme }) => theme.fontsize.medium};
    }
    li {
      list-style: none;
      margin-bottom: 0.5rem;
    }
  }
  .container {
    max-width: 100%;
    width: 100%;
    padding:0 1rem;
    form {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .body__contacto {
      text-align: center;
    }
  }
`
export const Img = styled.img`
  width: 100%;
`
