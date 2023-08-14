import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Helmet } from "react-helmet"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog7 = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Descripcion de blog"></meta>
      </Helmet>
      <Layout>
        <Hero
          img={Img}
          title="¿Qu&eacute; es lo que trae el futuro para Intramet?"
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>¿Qu&eacute; es lo que trae el futuro para Intramet?</h2>
            <p>
              Somos una empresa que lleva en su ADN el emprendimiento y
              excelencia.
            </p>
            <p>
              Intramet se enorgullece de sus ra&iacute;ces y apuesta por
              capacitar y empoderar a sus trabajadores desde el inicio de sus
              actividades tanto en habilidades t&eacute;cnicas como blandas.
            </p>
            <p>
              Lo que viene a continuaci&oacute;n es m&aacute;s crecimiento con
              visi&oacute;n empresarial a largo plazo, llevar nuestros
              veh&iacute;culos al norte del Per&uacute;. Seguir evolucionando,
              seguirle el paso a este mercado competitivo.
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}
export default blog7
