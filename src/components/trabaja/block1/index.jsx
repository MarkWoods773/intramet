import React from "react"
import { Wrapper } from "./style"
import Bloque from "../../blockLayout/index"
const block1 = props => {
  return (
    <Wrapper backcolor={props.backcolor || 'black'}>
      <div className="container">
        <Bloque
          textcolor={props.textcolor}
          subtitle={props.subtitle}
          data={props.data}
          botonWhatsapp={props.botonWhatsapp}
        />
        {console.log(props)}
      </div>
    </Wrapper>
  )
}

export default block1
 