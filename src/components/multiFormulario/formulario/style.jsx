import styled from "styled-components"
export const Wrapper = styled.div`
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  justify-content: center;
  h2 {
    font-family: "aller";
    text-transform:uppercase;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
@media (max-width: 640px){
  grid-template-columns: 1fr;
  grid-template-rows: 30vh auto;
  padding-left:0;
  padding-right:0;
  h2{
    text-align:center;
  }
}
`