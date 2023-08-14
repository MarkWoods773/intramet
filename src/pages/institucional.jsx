// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MisionVision from "../components/institucional/misionVision"
import NuestrosValores from "../components/institucional/nuestrosValores"
import Historia from "../components/institucional/historia"
import LineTime from "../components/institucional/lineTime"
import Img from "../assets/images/bgHeroInstitucional.jpg"
export default function Institucional() {
  return (
    <>
      {/* aqui podemos crear un componente de seo para que sea mas dinamica esta situacion */}
      <Layout
        img={Img}
        title="Institucional"
        description="Somos una empresa familiar, la segunda generación de carroceros que heredó el conocimiento de nuestro fundador Agripino Coyuri quien desde el año 1967 se desempeñó en el sector automotriz para el transporte masivo de pasajeros.
        Hoy en día somos la fábrica de carrocerías líder en el sur del Perú"
      >
        <Hero img={Img} title="Institucional" />
        <MisionVision />
        <NuestrosValores />
        <Historia />
        <LineTime />
      </Layout>
    </>
  )
}
