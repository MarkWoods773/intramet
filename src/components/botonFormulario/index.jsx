import React from "react"
import { Button } from "./style"
const buttonFormulario = props => {
  return props.type? (
    props.type==='a'?
    // para los a que tengan href
    <Button as={props.type} target="_blanck" href={props.url}>
      {props.children}
    </Button>:
    // para los que tengan Link
    <Button  as={props.type} to={props.url}>
      {props.children}
    </Button>
  ) : (
    <Button className="enviar">{props.children}</Button>
  )
}
export default buttonFormulario
