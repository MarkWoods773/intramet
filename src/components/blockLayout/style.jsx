import styled from "styled-components"
export const WrapperContainer = styled.div`
  .whatsappVerde {
    display: flex;
    align-items: center;
    justify-content: center;
    .iconWhatsap {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
    padding:0.5rem ;
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
  img {
    cursor: pointer;
  }
  h3,
  h4 {
    font-family: "aller";
  }
  .titleItem {
    font-size: ${({ theme }) => theme.fontsize.medium};
    text-align: center;
  }
  .titleadicional {
    margin-top: 3rem;
    font-family: "aller";
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    text-align:center;
    &::after { 
      content: "";
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.azul};
      display: block;
    }
  }
  .subtitle {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    text-align: center;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.azul};
    padding: 0.3rem 0;
  }
  .item .info {
    text-align: ${props => (props.tipo ? "null" : "justify")};
    color: ${({ theme, textcolor }) =>
      textcolor ? textcolor : theme.colors.azul};
  }
  @media (max-width: 500px) {
    .subtitle {
      text-align: center;
      font-size: ${({ theme }) => theme.fontsize.large};
      font-weight: bold;
    }
  }
`
