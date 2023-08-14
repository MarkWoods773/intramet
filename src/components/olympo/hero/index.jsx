import React from "react"
import { Button } from "../../botonFormulario/style"
import { Hero } from "./style"
const hero = props => {
  
  return (
    <Hero>
      <div data-aos="flip-up" data-aos-duration="1500" className="container">
        <div className="image-flex">
          <img src={props.img} alt="hero olympo" />
          <br />
          <br />
          {props.href ? (
            <div className="video">
              <Button
                as="a"
                href={props.href}
                className="azul"
                onClick={() => props.setModal(!props.modal)}
              >
                {" "}
                Ver Video
              </Button>
            </div>
          ) : null}
        </div>

        <div className="info">
          <h1>{props.title || "undefined"}</h1>
          <h2>{props.subtitle || "undefined"}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.text }} />
          <p className="text-hero-especial">
            *Las especificaciones y/o características técnicas descritas están
            sujetas a variación por el fabricante sin previo aviso.
          </p>
          <h3 className="titleCaracteristicas">
            ESPECIFICACIONES T&Eacute;CNICAS
          </h3>
          <div className="caracteristicas">
            <div className="col1">
              <h4>CAPACIDAD PASAJEROS</h4>
              <h4>LARGO</h4>
              <h4>ANCHO </h4>
              <h4>ALTURA</h4>
              <h4>CHASIS DISPONIBLES</h4>
            </div>
            <div className="col2">
              <p>{props.crText1 || "undefined"}</p>
              <p>{props.crText2 || "undefined"}</p>
              <p>{props.crText3 || "undefined"}</p>
              <p>{props.crText4 || "undefined"}</p>
              <p>{props.crText5 || "undefined"}</p>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  )
}
export default hero
