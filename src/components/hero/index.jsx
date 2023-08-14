import React from "react"
import LogoSvgIsotipo from "../logoIsoTipo"
import { Hero } from "./style"
const hero = props => {
  return (
    <Hero className={props.bgLeft?'bgleft':`bgcenter ${props.clase||''}`} style={{ backgroundImage: `url(${props.img})` }}>
      <div data-aos="flip-up" data-aos-duration="1500" className="banner">
        <LogoSvgIsotipo></LogoSvgIsotipo>
        <h1 className="banner__title">{props.title || "undefined"}</h1>
        <div className="banner__space"></div>
      </div>
      {props.children}
    </Hero>
  )
}
export default hero
