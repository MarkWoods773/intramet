import React from "react"
import styled from "styled-components"
const hero = props => {
  const Title = styled.h2`
    color: ${props.color};
    font-size: ${({ theme }) => theme.fontsize.extralarge};
    text-align: center;
    font-family: "Aller";
    font-weight: bold;
  `
  return <Title>{props.title}</Title>
}
export default hero
