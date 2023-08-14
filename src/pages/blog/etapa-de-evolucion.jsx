import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Helmet } from "react-helmet"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog6 = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Descripcion de blog"></meta>
      </Helmet>
      <Layout>
        <Hero
          img={Img}
          title="Etapa de evoluci&oacute;n, tiempo de reinventarse"
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>Etapa de evoluci&oacute;n, tiempo de reinventarse</h2>
            <p>
              Con el paso de los años cambiaron las expectativas del mercado y
              no bastaba tener &uacute;nicamente un veh&iacute;culo de buena
              calidad, ten&iacute;a que tener un diseño tan atractivo como los
              veh&iacute;culos importados.
            </p>
            <p>
              En esta necesidad de evolucionar para mantenerse competitivos es
              que nacen los primeros modelos de la serie Olimpo.
            </p>
            <p>
              El año 2016 fue el punto decisivo para Intramet. A ra&iacute;z de
              un incendio, se perdieron todos los moldes, las matrices de las
              carrocer&iacute;as. Fueron momentos dif&iacute;ciles, pero al
              mismo tiempo fue la oportunidad que necesitaban para innovar.
            </p>
            <p>
              Dejaron atr&aacute;s los patrones obsoletos y este evento fue la
              motivaci&oacute;n para darle paso a la reinvenci&oacute;n de
              diseños y acabados.{" "}
            </p>
            <p>
              Se renueva la serie Olimpo y toma fuerza y reconocimiento en el
              mercado.{" "}
            </p>
            <p>
              Durante los &uacute;ltimos años y algo m&aacute;s de experiencia
              administrativa y comercial se organizaron estrategias de
              posicionamiento y reconocimiento a los colaboradores{" "}
            </p>
            <p>
              Fue entonces que el 2018 se organiz&oacute; el evento de
              “Imposici&oacute;n de Cascos” para nombrar a los jefes de cada
              &aacute;rea. Este evento signific&oacute; la oportunidad de
              brindarles reconocimiento a nuestros colaboradores y entregarles
              cargos de confianza.{" "}
            </p>
            <p>
              En los siguientes años Intramet particip&oacute; de ferias para
              mostrar la calidad de los veh&iacute;culos, dando inicio a la fase
              comercial y de difusi&oacute;n.{" "}
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog6
