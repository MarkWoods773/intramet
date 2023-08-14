import React from "react"
import LogoSvgIsotipo from "../../logoIsoTipo"
import { MisionVision } from "./style"
const misionVision = () => {
  return (
    <MisionVision>
      <div
        data-aos="flip-down"
        data-aos-duration="1500"
        className="container card"
      >
        <div className="card__item card__item-mision">
          <LogoSvgIsotipo></LogoSvgIsotipo>
          <h2 className="card__title">MISI&Oacute;N</h2>
          <p className="card__text">
            Somos una organización industrial que fabrica carrocerías para
            buses. Operamos sobre una base sólida de crecimiento rentable y,
            además, desarrollamos con ingeniería nuestros procesos de producción
            para brindar soluciones rápidas y de calidad que satisfacen las
            necesidades personalizadas de nuestros clientes.
          </p>
        </div>
        <div className="card__item card__item-vision">
          <LogoSvgIsotipo></LogoSvgIsotipo>
          <h2 className="card__title">VISI&Oacute;N</h2>
          <p className="card__text">
            Estar entre los tres mejores fabricantes de carrocerías para bus
            a nivel nacional y ser reconocidos por nuestra capacidad innovadora
            y excelencia en nuestros productos, procesos y gestión gerencial.
          </p>
        </div>
      </div>
    </MisionVision>
  )
}
export default misionVision
