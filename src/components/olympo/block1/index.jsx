import React from "react"
import { Wrapper } from "./style"
import Bloque from "../../blockLayout"
const block1 = props => {
  return (
    <Wrapper backcolor={props.backcolor}>
      <div className="container">
        <Bloque
        optional={props.optional}
        title={props.title}
          textcolor={props.textcolor}
          subtitle={props.subtitle}
          data={props.data}
        />
      </div>
    </Wrapper>
  )
}

export default block1
