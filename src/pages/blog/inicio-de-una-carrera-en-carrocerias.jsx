import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Helmet } from "react-helmet"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog2 = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Descripcion de blog"></meta>
      </Helmet>
      <Layout>
        <Hero img={Img} title="Inicio de una carrera en carrocer&iacute;as "></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>
            Inicio de una carrera en carrocer&iacute;as 
            </h2>
            <p>
            Todo comenz&oacute; con Agripino Coyuri, quien se inici&oacute; a los 17 tiernos años en el mundo de las carrocer&iacute;as para el transporte de pasajeros. En el año 1967 Su primer centro de trabaj&oacute; fue la empresa “San Crist&oacute;bal Del Sur” donde desempeñando el cargo de ayudante.
            </p>
            <p>
            Al haber adquirido cierto grado de experiencia y en busca de m&aacute;s conocimiento (una caracter&iacute;stica que hered&oacute; a las futuras generaciones) pas&oacute; a formar parte de la empresa “Carrocer&iacute;as Espinar” ubicada en el Palomar - Arequipa, empresa dedicada a la fabricaci&oacute;n de carrocer&iacute;as.
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog2
