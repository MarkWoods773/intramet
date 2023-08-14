import styled from "styled-components"
export const Wrapper = styled.div`
  margin-bottom: 5rem;
  margin-top: 3rem;
  .container{
    max-width:60rem;
  }
  h2 {
      margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontsize.medium};
    color: ${({ theme }) => theme.colors.azul};
    font-family: "aller";
  }
  p {
    color: ${({ theme }) => theme.colors.azul};
  }
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: center;
    margin-top: 3rem;
  }
  .frase {
    text-align: center;
    font-style: italic;
  }
`
