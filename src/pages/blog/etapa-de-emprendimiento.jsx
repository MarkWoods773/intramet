import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog4 = () => {
  return (
    <>
      <Layout>
        <Hero img={Img} title="Etapa de emprendimiento"></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img} alt="Imagen Principal de blog" />
            <h2>Etapa de emprendimiento</h2>
            <p>
              Pasar de t&eacute;cnico a jefe y finalmente animarse a emprender
              fue un camino que se fue dando de forma natural.
            </p>
            <p>
              En 1999 nuestro fundado pas&oacute; a formar parte de INMECOT, una
              sociedad empresarial dedicada a la fabricaci&oacute;n de
              carrocer&iacute;as. Pero esto no qued&oacute; all&iacute;, en
              busca de nuevas oportunidades y junto a su familia es que
              decidi&oacute; centrarse en algo propio.
            </p>
            <p>
              As&iacute; para el año 2002 lidera la fundaci&oacute;n de la
              empresa FECENTURY SRL. Fueron cuatro años en los que se
              aprendi&oacute; que para que un negocio prospere no s&oacute;lo
              debe tener el mejor producto, el crecimiento tambi&eacute;n debe
              apoyarse en una buena gesti&oacute;n administrativa y comercial.{" "}
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog4
