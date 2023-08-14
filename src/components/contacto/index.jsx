import React from "react"
import { FormularioWrapper, Img } from "./style"
import Formulario from "../formulario"
import img from "../../assets/images/mapa.jpg"
const index = () => {
  return (
    <div className="container">
      <FormularioWrapper className="">
        <div data-aos="fade-right" data-aos-duration="1500">
          <Img src={img} alt="mapa de intramet" />
          <div className="infoContacto">
            <div className="body__contacto">
              <h3 className="body__title">CONTACTO</h3>
              <ul className="body__nav">
                <li>
                  <a className="body__link" href="tel:+51945440268">
                    Ventas: 945753902 / 945440268
                  </a>
                </li>
                <li>
                  <a
                    className="body__link"
                    href="mailto:mcoyuri@intramet.com.pe"
                  >
                    mcoyuri@intramet.com.pe
                  </a>
                </li>
                <li>
                  <a
                    className="body__link"
                    href="mailto:rcoyuri@intramet.com.pe"
                  >
                    rcoyuri@intramet.com.pe
                  </a>
                </li>
                <li>
                  <a className="body__link" href="tel:+51936747297">
                    Servicio garantía 936747297
                  </a>
                </li>
                <li>
                  <a className="body__link" href="tel:+51938241444">
                    Venta repuestos 938241444
                  </a>
                </li>
                {/* <li>
                  <a className="body__link" href="mailto:logistica@intramet.com.pe">
                    logistica@intramet.com.pe
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="body__contacto">
              <h3 className="body__title">DIRECCI&Oacute;N</h3>
              <ul className="body__nav">
                <li>
                  Calle Victor F. Lira 164 <br /> Parque Industrial <br />{" "}
                  Arequipa - Arequipa
                </li>
                <li>
                  <a target='__blanck' href="https://www.google.com/maps/place/Intramet+-+Carrocer%C3%ADas+buses/@-16.4232062,-71.5497383,17z/data=!3m1!4b1!4m5!3m4!1s0x91424aeb44783e4b:0x8ca7f873eb5ce4db!8m2!3d-16.4232114!4d-71.5475496?hl=es">
                    Mapa - Intramet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Formulario
          title="Cont&aacute;ctanos"
          text="Estaremos gustosos de atenderte"
        ></Formulario>
      </FormularioWrapper>
    </div>
  )
}

export default index
