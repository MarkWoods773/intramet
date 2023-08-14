import React from "react"
import { Link } from "gatsby"
import { Footer } from "./style"
import { FaFacebook } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { AiOutlineMail} from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri"
import Image from "../../assets/images/logo.png"
import ImageAlma from "../../assets/images/logoAlmaQuinta.png"
import ImageAcid from "../../assets/images/logoAcid.png"
import NavLink from "../../components/navLink"
import { Theme } from "../../styles/layoutcss"
const prefix = "/bus"
const prefixUrbano = `${prefix}/urbano`
const prefixInterprovincial = `${prefix}/interprovincial`
const prefixMina = `${prefix}/para-personal-de-mina`
const footer = () => {
  return (
    <Footer>
      <div className="container">
        <section className="header">
          <Link className="header__imgLink" to="/">
            <img className="header__img" src={Image} alt="logoIntramet" />
          </Link>
          <div className="header__contactanos">
            <span className="body__title">CONT&Aacute;CTANOS:</span>
            <div>
              <a target="_blanck" href="https://www.facebook.com/Intramet">
                <FaFacebook className="header__icon" />
              </a>
              <a
                target="_blanck"
                href="https://api.whatsapp.com/send?phone=51945440268&text=Hola INTRAMET: Deseo ponerme en contacto con un representante."
              >
                <RiWhatsappFill className="header__icon" />
              </a>
            </div>
          </div>
        </section>
        <div className="body">
          <div className="body__informacion">
            <div className="body__direccion">
              <h4 className="body__title">DIRECCIÓN</h4>
              <p className="body__text">
                <b>Planta Principal:</b>  Calle Víctor Lira P – 11 <br />
                Parque Industrial - Cercado<br />
                Arequipa - Arequipa
              </p>
            </div>
            <div className="body__contacto">
              <h4 className="body__title">CONTACTO</h4>
              <ul className="body__nav">
                <li>
                  <div className="body__link " href="tel:+51945753902">
                    Ventas: <br />
                    
                    <li className='iconContainer'><FaPhone className='iconFooter'/> 945753902</li>
                    <li className='iconContainer'><FaPhone className='iconFooter'/> 945440268</li>
                  </div>
                </li>
                <li>
                  <a
                    className="body__link iconContainer"
                    href="mailto:mcoyuri@intramet.com.pe"
                  >
                    <AiOutlineMail className='iconFooter'/>
                    mcoyuri@intramet.com.pe
                  </a>
                </li>
                <li>
                  <a
                    className="body__link iconContainer"
                    href="mailto:rcoyuri@intramet.com.pe"
                  >
                    <AiOutlineMail className='iconFooter'/>
                    rcoyuri@intramet.com.pe
                  </a>
                </li>
               
                {/* <li>
                  <a
                    className="body__link"
                    href="mailto:logistica@intramet.com.pe"
                  >
                    logistica@intramet.com.pe
                  </a>
                </li> */}
                <li>
                  <a className="body__link " href="tel:+51936747297">
                    Servicio garantía: <br />
                    <li className='iconContainer'>936747297</li> 
                  </a>
                </li>
                <li>
                  <a className="body__link" href="tel:+51938241444">
                    Venta repuestos: <br />
                    <li className='iconContainer'>938241444</li>  
                  </a>
                </li>
                {/* <li>
                  <a className="body__link" href="tel:+51958888888">
                    Log&iacute;stica: 958 888 888
                  </a>
                </li>
                <li>
                  <a
                    className="body__link"
                    href="mailto:logistica@intramet.com.pe"
                  >
                    logistica@intramet.com.pe
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="spaceBar"></div>
          <div className="body__mapaSite">
            <h4 className="body__title">MAPA DE SITIO</h4>
            <ul className="navigation body__nav">
              <NavLink abierto={false} color={Theme.colors.gris} />
            </ul>
          </div>
          <div className="spaceBar"></div>
          <div className="body__tpBuses">
            <div className="body__personalMina">
              <h4 className="body__title">PERSONAL MINA</h4>
              <ul className="body__nav">
                <li>
                  <Link to={`${prefixMina}/olympo35`} className="body__link">
                    OLYMPO 3.5
                  </Link>
                </li>
                <li>
                  <Link to={`${prefixMina}/olympo34`} className="body__link">
                    OLYMPO 3.4
                  </Link>
                </li>
                <li>
                  <Link to={`${prefixMina}/olympo325`} className="body__link">
                    OLYMPO 3.25
                  </Link>
                </li>
                <li>
                  <Link to={`${prefixMina}/olympo31`} className="body__link">
                    OLYMPO 3.10
                  </Link>
                </li>
                <li>
                  <Link to={`${prefixMina}/olympo29`} className="body__link">
                    OLYMPO 2.9
                  </Link>
                </li>
              </ul>
            </div>
            <div className="body__interprovincial">
              <h4 className="body__title">INTERPROVINCIAL</h4>
              <Link
                to={`${prefixInterprovincial}/olympo36`}
                className="body__link"
              >
                OLYMPO 3.6 MD
              </Link>
            </div>
            <div className="body__urbano">
              <h4 className="body__title">URBANO</h4>
              <Link to={`${prefixUrbano}/olympo`} className="body__link">
                OLYMPO URBANO
              </Link>
            </div>
          </div>
          <div className="spaceBar"></div>
          <div className="body__factory">
            <div className="body__developed">
              <h4 className="body__title body__title-desarrollado">
                DESARROLLADO POR:
              </h4>
              <a target="_blanck" href="http://almaquinta.com/">
                <img
                  className="body__img"
                  src={ImageAlma}
                  alt="Logo de Alma Quinta"
                />

                <p className="body__title_img">ALMAV</p>
              </a>
            </div>
            <div className="body__developed">
              <h4 className="body__title body__title-desarrollado">
                DISEÑADO POR:
              </h4>
              <a
                target="_blanck"
                href="https://www.facebook.com/acidplanet007/"
              >
                <img
                  className="body__img acidImg"
                  src={ImageAcid}
                  alt="Logo de Acid Planet"
                />
                <p className="body__title_img">ACIDPLANET</p>
              </a>
            </div>
            <p className="body__text body__text-arequipa">Arequipa 2020</p>
          </div>
        </div>
      </div>
    </Footer>
  )
}
export default footer
