import React from "react"
import { Wrapper } from "./style"
import Bloque from "../../blockLayout"
const block2 = props => {
  return (
    <Wrapper background={props.color}>
      <div className="container">
        <Bloque subtitle={props.subtitle} data={props.data} />
      </div>
    </Wrapper>
  )
}
export default block2
