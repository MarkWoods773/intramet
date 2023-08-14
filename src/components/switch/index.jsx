import React from "react"
import { Switch } from "./style"
const togleSwitch = (props) => {
  return (
    <Switch>
      <input
        type="checkbox"
        name="switch-button"
        id={`switch-label${props.item}`}
        className={`switch-button__checkbox`}
      />
      <label htmlFor={`switch-label${props.item}`} className={`switch-button__label`}>
      </label>
    </Switch>
  )
}

export default togleSwitch
