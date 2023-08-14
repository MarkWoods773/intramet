import React from "react"
import { Link } from "gatsby"
import { Historia } from "./style"
import { Theme } from "../../../styles/layoutcss"
import Title from "../title"
import Video from "../../../assets/video/videoHistoria.mp4"
import ImgVideo from "../../../assets/images/bg_Video.png"
const hero = () => {
  return (
    <Historia>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="container card"
      >
        <Title color={Theme.colors.azul} title="HISTORIA" />
        <div className="card__text">
          <p className='textoWrapper'>
            Somos una empresa familiar, la segunda generación de carroceros que
            heredó el conocimiento de nuestro fundador Agripino Coyuri quien
            desde el año 1967 se desempeñó en la industria de carrocerías para el transporte de pasajeros.
          </p>
          <br />
          <p className='textoWrapper'> 
            Hoy en día somos la fábrica de carrocerías líder en el sur del Perú.
            &nbsp;
            <Link
              className="leeMas"
              to="/blog/fabrica-de-carrocerias-lider-en-el-sur-del-peru"
            >
               Conoce más sobre Intramet, la historia.
            </Link>
          </p>
          <video
            data-aos="fade-down"
            data-aos-duration="1500"
            poster={ImgVideo}
            className="card__video"
            controls
          >
            <source src={Video} type="video/mp4" />
            <track default kind="captions" />
            Lo siento pero tu navegador no puede transmitir este video
          </video>
        </div>
      </div>
    </Historia>
  )
}
export default hero
