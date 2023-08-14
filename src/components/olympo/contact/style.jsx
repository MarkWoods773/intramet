import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gris};
  color: ${({ theme }) => theme.colors.azul};
  padding: 2.5rem;
  h2 {
    margin-top: 0;
    font-family: "aller";
    text-align: center;
  }
  .formulario {
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    margin: 0 auto;
  }
  .condiciones{
  display  : grid;
  grid-template-columns:     20px 1fr;
  align-items: center;
  margin:1rem 0;
  input{
    margin-bottom: 0;
  }
  a{
    color: inherit;
    text-decoration: underline;
  }
  }
  /* box de switch */
  .flex_preferencias {
    display: flex;
    .baño {
      margin-right: 3vw;
    }
    & > div {
      display: flex;
      align-items: center;
      label {
        margin-right: 0.5rem;
      }
    }
  }
@media (max-width: 500px){
  padding-left:1rem;
  padding-right:1rem;
}
`
