import React from "react"
import { Wrapper } from "./style"
import Bloque from "../../blockLayout"
const block = props => {
  return (
    <Wrapper>
      <div className="container blog">
        <Bloque page={props.tipo}  data={props.data} />
      </div>
    </Wrapper>
  )
}

export default block
