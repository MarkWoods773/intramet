// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Block from "../components/block90vh"
import Img from "../assets/images/bgHeroGarantia.jpg"
import Data from "../data/garantiaVentaRepuestos"
import Formulario from "../components/formularioReporteFalla"
// import ImgGarantia from "../assets/images/garantiaContacto.jpg"
export default function garantiaVentaDeRepuestos() {
  return (
    <>
       <Layout
        img={Img}
        title="GARANTÍA Y VENTA DE REPUESTOS"
        description="Garantía y venta de repuestos en Intramet"
      >
        <Hero img={Img} title="GARANTÍA Y VENTA DE REPUESTOS"></Hero>
        <Block boton={true} data={Data}></Block>
        <Formulario title={`FORMULARIO REPORTE DE FALLA`}> </Formulario>
        {/* <Formulario title1={` "Reporte de Falla"`} title2='Venta de repuestos' img1={ImgGarantia} img2={ImgGarantia}/> */}
      </Layout>
    </>
  )
}
