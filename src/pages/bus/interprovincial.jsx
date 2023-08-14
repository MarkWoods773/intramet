import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import { BusInterprovincial } from "../../data/buses"
import BlockBusInterprovincial from "../../components/buses/blockTpBusesDesc"
export default function BusesInterprovinciales() {
  return (
    <>
      <Layout
        img={Img}
        title="Buses Interprovinciales"
        description="Vehículo bodeguero para el transporte INTERPROVINCIAL de pasajeros (uso alternativo para el transporte de personal de mina). Diseñado y equipado para RECORRIDOS DE DISTANCIAS LARGAS. Carrocería ROBUSTO, COMPACTO, SEGURO, BODEGAS AMPLIAS Y ELEGANTE."
      >
        <Hero img={Img} title={BusInterprovincial.title}></Hero>
        <BlockBusInterprovincial
          data={BusInterprovincial}
        ></BlockBusInterprovincial>
      </Layout>
    </>
  )
}
