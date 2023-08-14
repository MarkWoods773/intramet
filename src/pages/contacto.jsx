// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import BlockFormulario from "../components/contacto"
import Img from '../assets/images/mapa.jpg'
export default function Contacto() {
  return (
    <>
      <Layout
        img={Img}
        title="Contacto"
        description="Envianonos cualquier duda que tengas y Intramet estara dispuesto a ayudarte"
      >
        <BlockFormulario></BlockFormulario>
      </Layout>
    </>
  )
}
