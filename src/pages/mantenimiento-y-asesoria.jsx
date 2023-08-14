import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Block from "../components/block90vh"
// import Formulario from "../components/multiFormulario/multitab"
import Img from "../assets/images/bgHeroMantenimiento.jpg"
// import ImgMantenimiento from "../assets/images/mantenimientoContacto.jpg"
import Data from "../data/mantenimientoAsesoria"
import Formulario from "../components/formularioAsesoria"
export default function MantenimientoAsesoria() {
  return (
    <>
      <Layout
        img={Img}
        title="MANTENIMIENTO Y ASESORÍA"
        description="MANTENIMIENTO Y ASESORÍA"
      >
        <Hero bgLeft={true} img={Img} title="MANTENIMIENTO Y ASESORÍA"></Hero>
        {/* los bloques de mantenimiento y asesoria */}
        <Block boton={true} data={Data}/>
        {/* los tabs de los formularios */}
        <Formulario title={`FORMULARIO ASESORÍA`}> </Formulario>
        {/* <Formulario title1='MANTENIMIENTO' title2='ASESORÍA' img1={ImgMantenimiento} img2={ImgMantenimiento}/> */}
      </Layout>
    </>
  )
}
