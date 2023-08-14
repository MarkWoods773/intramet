import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog3 = () => {
  return (
    <>
      <Layout>
        <Hero
          img={Img}
          title="Consolidaci&oacute;n de conocimiento y liderazgo
          "
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>
            Consolidaci&oacute;n de conocimiento y liderazgo
            </h2>
            <p>
            En los años 90 Agripino Coyuri consolida su alto grado de experiencia en la fabricaci&oacute;n de carrocer&iacute;as. Se convierte en Jefe de producci&oacute;n y pieza fundamental en la fundaci&oacute;n de Intramet S.A. 
            </p>
            <p>
            Fueron ocho años de conocimiento, experiencias y alegr&iacute;as al ser parte de una empresa pr&oacute;spera que lo acogi&oacute; y confi&oacute; en &eacute;l para tener un cargo de responsabilidad. 
            </p>
            <p>Por razones administrativas la empresa tuvo que cerrar sus puertas, lo que lejos de desanimar a nuestro fundador le dio la oportunidad de iniciar su etapa de emprendedor. </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog3
