import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/olympo/hero"
import WrapperBlock from "../../../components/olympo/wrapperBlock"
import img from "../../../assets/images/heroOlympo36.png"
import { OlympoBlock1 } from "../../../data/olympo36"
import { OlympoBlock2 } from "../../../data/olympo36"
import { OlympoBlock3 } from "../../../data/olympo36"
import { OlympoBlock4 } from "../../../data/olympo36"
import { OlympoBlock5 } from "../../../data/olympo36"
// import { OlympoBlock6 } from "../../../data/olympo36"
import Block1 from "../../../components/olympo/block1"
// import Block2 from "../../../components/olympo/block2"
import Contact from "../../../components/olympo/contact"
const olympo36 = () => {
  return (
    <Layout
        img={img}
        title="OLYMPO 3.6 MD"
        description="Vehículo bodeguero para el transporte INTERPROVINCIAL de pasajeros (uso alternativo para el transporte de personal de mina). <br />Diseñado y equipado para RECORRIDOS DE DISTANCIAS LARGAS. Carrocería ROBUSTA Y COMPACTA con salón de pasajeros espacioso, seguro y elegante."
      >
        
      <Hero
        img={img}
        title="OLYMPO 3.6 MD"
        subtitle="Buses Interprovinciales"
        text={`
        <li>
        Vehículo bodeguero para el transporte INTERPROVINCIAL de pasajeros (uso alternativo para el transporte de personal de mina).<br/>
        </li>
        <li>
        Diseñado y equipado para <b>RECORRIDOS DE DISTANCIAS LARGAS</b>.<br/>
        </li>
        <li>
        Carrocería <b> ROBUSTO, COMPACTO, SEGURO, BODEGAS AMPLIAS Y ELEGANTE.</b>
        </li>
        `}
        crTitle1="Pasajeros sentados"
        crTitle2="Largo"
        crTitle3="Ancho"
        crTitle4="Altura"
        crTitle5="Chasis"
        crText1="49 o 53 pasajeros"
        crText2="13.20 m"
        crText3="2.60 m"
        crText4="3.60 m"
        crText5="MB SCANIA"
      />
      <WrapperBlock>
        {/* <Block1 textcolor="red" data={OlympoBlock6}></Block1> */}
        <Block1 subtitle="SALÓN DE PASAJEROS" data={OlympoBlock1}></Block1>
        <Block1 subtitle="CABINA DE CONDUCTOR" data={OlympoBlock2}></Block1>
        <Block1 subtitle="CONDUCCIÓN" data={OlympoBlock5}></Block1>
        <Block1 subtitle="EXTERIOR" data={OlympoBlock3}></Block1>
        <Block1
          backcolor="gris"
          title="CARACTERÍSTICAS OPCIONALES"
          color="gris"
          data={OlympoBlock4}
          optional={true}
        ></Block1>
      </WrapperBlock>
      <Contact />
    </Layout>
  )
}

export default olympo36
