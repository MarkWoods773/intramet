import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
function index(props) {
  // let index = 0
  // console.log(props.abierto);
  return (
    <Wrapper abierto={props.abierto} className="submenu">
      <div className="container">
        {/* desktop */}
        {props.data
          ? props.data.map((dt, key) => {
              const { title, detailsItems, url } = dt
              // console.log(title, detailsItems)
              return (
                <Card key={key}>
                  <LinkTitle className="LinkTitle" to={url}>
                    <h2>{title}</h2>
                  </LinkTitle>
                  <CardGrid>
                    {detailsItems.map((dtIt, key) => {
                      const { title, img, url } = dtIt
                      // console.log(index)
                      return (
                        <Item className="Link__Submenu" to={url} key={key}>
                          <img src={img} alt="item-submenu" />
                          <h3>{title}</h3>
                        </Item>
                      )
                    })}
                  </CardGrid>
                </Card>
              )
            })
          : null}
        {/* responsive max-width 1000px mobile */}
      </div>
    </Wrapper>
  )
}
const LinkTitle = styled(Link)`
  &.LinkTitle {
    text-align: left;
    font-size: 1rem;
  }
`
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.amarillo};
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  /* para ponerlo en marcha alerta a estop hay que descomentar */
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  box-shadow: inset 0 6px 10px 0 rgba(0, 0, 0, 0.1),
    0 10px 8px 0 rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: auto;
  }
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.azul};
    font-family: "aller";
  }
  .container {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-areas:
      "item3 item3"
      "item1 item2";
  }
  
  @media (max-width: 1000px) {
    position: static;
    background-color: ${({ theme }) => theme.colors.azul};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    max-height: ${({ abierto }) => (abierto ? "100%" : "0px")};
    h2,
    h3 {
      color: ${({ theme }) => theme.colors.amarillo};
      text-align: center;
      font-size: 100%;
      margin: 0.5rem 0;
    }
    .container {
      display: block;
    }
  }
`
const CardGrid = styled.div`
  color: red;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;

  :nth-child(2) {
    justify-self: end;
  }
  @media (max-width: 1000px) {
    display: block;
    .Link__Submenu h3 {
      border: 1px solid ${({ theme }) => theme.colors.amarillo};
      border-radius: 20px;
      padding: 0.5rem 0.8rem;
      color: ${({ theme }) => theme.colors.blanco};
      margin: 0;
      transition: all 0.3s;
      font-size: 0.8rem;
      font-weight: normal;
      :hover {
        background-color: ${({ theme }) => theme.colors.blanco};
        color: ${({ theme }) => theme.colors.azul};
        transition: all 0.3s;
      }
    }
  }
`
const Card = styled.div.attrs(props => ({
  key: props.key,
}))`
  &:first-child {
    grid-area: item3;
    border-bottom: 3px solid ${({ theme }) => theme.colors.azul};
  }
  &:nth-child(2) {
    grid-area: item1;
    padding-right: 200px;
    border-right: 3px solid ${({ theme }) => theme.colors.azul};
  }
  &:first-child ${CardGrid}, &:nth-child(2) ${CardGrid} {
    a {
      width: 200px;
    }
  }
  &:last-child {
      padding-left: 200px;
    grid-area: item2;
    /* grid-column: 1 / 3; */
  }
  @media (max-width: 1000px) {
    /* display: none; */
    &:nth-child(2) {
      padding-left: 0;
    }
    /* anulando bordes */
    &:first-child,
    &:last-child,&:nth-child(2) {
      border-top: none;
      border-right: none;
      padding-right:0;
      padding-left:0;
    }
  }
`

const Item = styled(Link).attrs(props => ({
  key: props.key,
}))`
  align-self: end;
      transition:.5s;
  &:hover{
      transition:.5s;
    img{
      padding:1rem;
      transition:.5s;
    }
  }
`
export default index
