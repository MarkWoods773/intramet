// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgOlympo.jpg"
import { BusUrbano } from "../../data/buses"
import BlockBusUrbano from "../../components/buses/blockTpBusesDesc"
export default function BusesUrbanos() {
  return (
    <>
      <Layout
        img={Img}
        title="Buses Urbanos"
        description="Vehículo para el transporte URBANO de pasajeros. Carrocería LIVIANO, ELEGANTE E INNOVADOR."
      >
        <Hero img={Img} title={BusUrbano.title}></Hero>
        <BlockBusUrbano data={BusUrbano}></BlockBusUrbano>
      </Layout>
    </>
  )
}
// para las imagenes en illustrator
