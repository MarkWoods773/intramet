import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/olympo/hero"
import img from "../../../assets/images/heroOlympoUrbano.png"
import WrapperBlock from "../../../components/olympo/wrapperBlock"
// import Block1 from "../../../components/olympo/block1"
import Block1 from "../../../components/olympo/block1"
import { OlympoBlock1 } from "../../../data/olympoUrbano"
import { OlympoBlock2 } from "../../../data/olympoUrbano"
import { OlympoBlock3 } from "../../../data/olympoUrbano"
import { OlympoBlock4 } from "../../../data/olympoUrbano"
import { OlympoBlock5 } from "../../../data/olympoUrbano"
import Contact from "../../../components/olympo/contact"
const olympoUrbano = () => {
  return (
    <Layout
      img={img}
      title="OLYMPO URBANO"
      description="Vehículo para el transporte URBANO de pasajeros. Carrocería LIVIANO, ELEGANTE E INNOVADOR."
    >
      <Hero
        img={img}
        title="OLYMPO URBANO"
        subtitle="Buses urbanos"
        text="
        <li>Vehículo para el transporte <b>URBANO</b> de pasajeros.</li><br/>
        <li>Carrocería <b>LIVIANO, ELEGANTE E INNOVADOR.</b></li>
        "
        crTitle1="Pasajeros sentados"
        crTitle2="Largo"
        crTitle3="Ancho"
        crTitle4="Altura"
        crTitle5="Chasis"
        crText1="27 (conf. 2 X 1)"
        crText2="9.00 m"
        crText3="2.20 m"
        crText4="2.90 m"
        crText5="Mitsubishi, Hyundai, Hino, Yutong"
      />
      <WrapperBlock>
      <Block1 subtitle="SALÓN DE PASAJEROS" data={OlympoBlock1}></Block1>
      <Block1 subtitle="CABINA DE CONDUCTOR" data={OlympoBlock2}></Block1>
      <Block1 subtitle="CONDUCCIÓN" data={OlympoBlock3}></Block1>
      <Block1 subtitle="EXTERIOR" data={OlympoBlock4}></Block1>
      <Block1
          title="CARACTERÍSTICAS OPCIONALES"
          color="gris"
          data={OlympoBlock5}
          backcolor='gris'
        ></Block1>
      </WrapperBlock>
      <Contact></Contact>
    </Layout>
  )
}

export default olympoUrbano
