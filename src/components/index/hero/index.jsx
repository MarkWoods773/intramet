import React from "react"
import { Link } from "gatsby"
import { Hero, Banner, BannerGrid } from "./style"
import Video from "../../../assets/video/videoHeader.mp4"
const hero = () => {
  return (
    <Hero>
      <video
        style={{ width: `100%`, height: `90vh`, objectFit: "cover" }}
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
        <track default kind="captions" />
        Lo siento pero tu navegador no puede transmitir este video
      </video>
      <Banner className="container">
        <BannerGrid>
          <h1> <span className="comillas">&quot;</span> Suma de Voluntades que Concretan Sueños <span className="comillas">&quot;</span></h1>
          <div className="info-limpo">
            <Link to="/buses">VE  NUESTROS BUSES</Link>
          </div>
        </BannerGrid>
      </Banner>
    </Hero>
  )
}
export default hero
