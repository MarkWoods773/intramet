import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Helmet } from "react-helmet"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog5 = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Descripcion de blog"></meta>
      </Helmet>
      <Layout>
        <Hero
          img={Img}
          title="Inicio de la F&aacute;brica de Carrocer&iacute;as l&iacute;der del sur del Per&uacute; "
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>
              Inicio de la F&aacute;brica de Carrocer&iacute;as l&iacute;der del
              sur del Per&uacute;{" "}
            </h2>
            <p className="frase">
              “Para ser la mejor empresa del sur del Per&uacute; no solo
              ten&iacute;an que ser los mejores carroceros, ten&iacute;an que
              adquirir visi&oacute;n empresarial”
            </p>
            <p>
              El 17 de Julio del 2006, de forma estrat&eacute;gica y
              aprovechando la coyuntura en el desarrollo y crecimiento del
              sector, se funda la empresa “INTRAMET S.R.L.” en el rubro de
              reparaci&oacute;n, mantenimiento y fabricaci&oacute;n de
              carrocer&iacute;as sobre chasis de las marcas m&aacute;s
              reconocidas tales como: SCANIA y MERCEDES BENZ.
            </p>
            <p>
              Se eligi&oacute; este nombre en honor a la primera f&aacute;brica
              que confi&oacute; en Agripino Coyuri para ser l&iacute;der de la
              l&iacute;nea de fabricaci&oacute;n. Y con mucho orgullo para el
              año 2011 se compr&oacute; la de Intramet, donde se encuentran
              hasta el d&iacute;a de hoy.
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog5
