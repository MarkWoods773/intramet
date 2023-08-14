import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Img from "../assets/images/bgHeroBusesUrbanos.jpg"
import BlockBuses from '../components/buses/blockTpBuses'
import Data from '../data/tiposBuses'
export default function Buses() {
  return (
    <>
       <Layout
        img={Img}
        title="Buses"
        description="Tenemos estos tipos de buses: BUSES PARA PERSONAL DE MINA,BUSES INTERPROVINCIALES,BUSES URBANOS"
      >
        <Hero img={Img} title="buses"></Hero>
        {/* <div className="container"> */}
          <BlockBuses tipo='page' data={Data}></BlockBuses>
        {/* </div> */}
      </Layout>
    </>
  )
}
