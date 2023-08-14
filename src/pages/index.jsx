import React from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import TipoBuses from "../components/index/tipos-de-buses"
import BlockPorqueIntramet from "../components/index/blockPorqueIntramet"
import Mapa from "../components/index/mapa"
// import FullPage from "../components/index/FullPage"
import Footer from "../components/footer"
export default function Home() {
  return (
    <>
      <Layout
        index={true}
        title="Intramet: Carrocerías para Buses en Perú, Venta de Buses Nuevos, Fabrica de Carrocerías
"
        seoCustom={true}
        description="Nosotros somos una organización industrial que fabrica carrocerías para buses en Perú. Operamos sobre una base sólida de crecimiento rentable y, además, desarrollamos con ingeniería nuestros procesos de producción para brindar soluciones rápidas y de calidad que satisfacen las necesidades personalizadas de nuestros clientes."
        theme="intramet"
      >
        {/* <FullPage> */}
        <div className="section fp-auto-height">
          <Hero />
        </div>
        <TipoBuses />
        <BlockPorqueIntramet />
        <div className="section fp-auto-height">
          <Mapa />
        </div>
        <div className="section fp-auto-height">
          <Footer></Footer>
        </div>
        {/* </FullPage> */}
      </Layout>
    </>
  )
}
