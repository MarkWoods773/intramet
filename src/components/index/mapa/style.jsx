import styled from "styled-components"
export const MapaStyle = styled.div`
  width: 100%;
  position: relative;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.azul};
  .imageMapa {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:center;
    margin: 0;
  }
  .infoMapa {
    position: absolute;
    /* width:30%; */
    max-width: 30rem;
    bottom: 1rem;
    border-top-right-radius: 25px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.azul};
    color: ${({ theme }) => theme.colors.gris};
    font-size: ${({ theme }) => theme.fontsize.large};
    letter-spacing: 2px;
    padding: 0 3rem;
    span {
      font-size: 1.8rem;
      font-family: "neue";
    }
  }
@media (max-width: 800px){
  display:grid;
  grid-template-rows:400px 1fr;
  height:auto;
  .imageMapa {
    /* height:500px; */
    /* object-fit:contain; */
    /* background-color: ${({ theme }) => theme.colors.azul};     */
  }  
  .infoMapa{
    height:100%;
    position:static;
    max-width:100%;
    border-top-right-radius: 0;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    padding:2rem ;
    h3{
      margin:0;
    }
  }
}
`
