import styled from "styled-components"
export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.azul};
  padding: auto;
  height: 10vh;
  /* position: sticky; */
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 9;
  .inside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .navbar{
    flex-direction:row;
    position:static;
  }
  .navbar li {
    padding-left: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .icondownNav{
    margin-left:.5rem;
    vertical-align: text-top;
  }
  img {
    height: 5vh;
    width: auto;
  }
  li {
    list-style: none;
    display: flex;
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 1rem;
      background-color: ${({ theme }) => theme.colors.amarillo};
    }
    &:last-child a {
      margin-right: 0;
    }
    &:last-child::after {
      content: none;
    }
    a {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.amarillo};
      text-decoration: none;
      text-align: center;
    }
  }
  @media (max-width: 1000px) {
    .inside .navbar {
      flex-direction: column;
      position: absolute;
      right: 0;
      top:10vh;
      transition: transform 0.3s ease-in-out;
      /* transform: translateX(100%); */
      justify-content:space-between;
      height:90vh;
      background-color:${({theme})=>theme.colors.azul}
    }
    .navbar li {
      padding-left:0;
      &:nth-child(3){
        flex-direction:column;
        justify-content:center;
      }
      &::after {
        content: none;
      }
    }
  }
`
export const Navbar = styled.nav`
  @media  (max-width:1000px){
  /* display: ${({ open }) => open ? 'flex' : 'none !important'}; */
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  padding:1rem;
  }

`
