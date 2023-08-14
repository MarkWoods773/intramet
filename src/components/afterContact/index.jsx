import React from "react"
import styled from 'styled-components'
const Text=styled.h1`
    color :${({theme})=>theme.colors.azul};
    text-align:center;
    font-size:${({theme})=>theme.fontsize.xlextralarge};
    /* padding:5rem 0; */
    display:flex;
    align-items:center;
    justify-content:center;
    /* height:30vh; */
    margin:5rem 0 0 ;
`
const AfterContact = props => {
  return (
    <div>
      <Text>{props.text}</Text>
    </div>
  )
}

export default AfterContact
