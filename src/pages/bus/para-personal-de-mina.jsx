// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroMina.jpg"
import { BusParaPersonalDeLima } from "../../data/buses"
import BlockParaPersonalDeLima from "../../components/buses/blockTpBusesDesc"
export default function BusesParaPersonalDeLima() {
  return (
    <>
      <Layout
        img={Img}
        title="Buses para personal de mina"
        description="Vehículo recomendable para TRANSPORTAR PERSONAL dentro de un campamento o zona urbana. Carrocería LIVIANO, ELEGANTE E INNOVADOR."
      >
        <Hero img={Img} title={BusParaPersonalDeLima.title}></Hero>
        <BlockParaPersonalDeLima
          data={BusParaPersonalDeLima}
        ></BlockParaPersonalDeLima>
      </Layout>
    </>
  )
}
