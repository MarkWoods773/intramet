import React from "react"
import { Wrapper } from "./style"
const wrapperBlock = props => {
  return (
    <Wrapper>
      <div className="container">
        <h2 >CARACTER&Iacute;STICAS EST&Aacute;NDAR</h2>
      </div>
      {props.children}
    </Wrapper>
  )
}

export default wrapperBlock
