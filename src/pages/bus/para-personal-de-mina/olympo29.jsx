import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/olympo/hero"
import WrapperBlock from "../../../components/olympo/wrapperBlock"
import img from "../../../assets/images/heroOlympo29.png"
import { OlympoBlock1 } from "../../../data/olympo29"
import { OlympoBlock2 } from "../../../data/olympo29"
import { OlympoBlock3 } from "../../../data/olympo29"
import { OlympoBlock4 } from "../../../data/olympo29"
import { OlympoBlock5 } from "../../../data/olympo29"
// import { OlympoBlock6 } from "../../../data/olympo29"
import Block1 from "../../../components/olympo/block1"
// import Block2 from "../../../components/olympo/block2"
import Contact from "../../../components/olympo/contact"
const olympo29 = () => {
  return (
    <Layout
      img={img}
      title="OLYMPO 2.9"
      description="Vehículo recomendable para TRANSPORTAR PERSONAL dentro de un campamento o zona urbana. Carrocería LIVIANO, ELEGANTE E INNOVADOR."
    >
      <Hero
        img={img}
        title="OLYMPO 2.9"
        subtitle="Buses para personal de mina"
        text="
        
        <li>
        Vehículo recomendable para <b>TRANSPORTAR PERSONAL</b> dentro de un campamento o zona urbana.
        </li>
        <br/>
        <li>
        Carrocería <b>LIVIANO, ELEGANTE E INNOVADOR.</b>
        </li>
        "
        crTitle1="Pasajeros sentados"
        crTitle2="Largo"
        crTitle3="Ancho"
        crTitle4="Altura"
        crTitle5="Chasis"
        crText1="30 pasajeros"
        crText2="9.00 m"
        crText3="2.20 m"
        crText4="2.90 m"
        crText5="Mitsubishi, Hyundai, Yutong"
      />
      <WrapperBlock>
        {/* <Block1 textcolor='red'  data={OlympoBlock6}></Block1> */}
        <Block1 subtitle="SALÓN DE PASAJEROS" data={OlympoBlock1}></Block1>
        <Block1 subtitle="CABINA DE CONDUCTOR" data={OlympoBlock2}></Block1>
        <Block1 subtitle="CONDUCCIÓN" data={OlympoBlock5}></Block1>
        <Block1 subtitle="EXTERIOR" data={OlympoBlock3}></Block1>
        <Block1
          backcolor="gris"
          title="CARACTERÍSTICAS OPCIONALES"
          color="gris"
          data={OlympoBlock4}
        ></Block1>
      </WrapperBlock>
      <Contact />
    </Layout>
  )
}

export default olympo29
