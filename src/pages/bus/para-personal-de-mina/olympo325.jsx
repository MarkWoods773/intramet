import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/olympo/hero"
import WrapperBlock from "../../../components/olympo/wrapperBlock"
import img from "../../../assets/images/heroOlympo325.png"
import { OlympoBlock1 } from "../../../data/olympo325"
import { OlympoBlock2 } from "../../../data/olympo325"
import { OlympoBlock3 } from "../../../data/olympo325"
import { OlympoBlock4 } from "../../../data/olympo325"
import { OlympoBlock5 } from "../../../data/olympo325"
// import { OlympoBlock6 } from "../../../data/olympo325"
import Block1 from "../../../components/olympo/block1"
// import Block2 from "../../../components/olympo/block2"
import Contact from "../../../components/olympo/contact"
import Video325 from '../../../assets/video/Olympo325.mp4'
import ImagenFondoVideo from '../../../assets/images/bus_interprovincial.jpg'
const Olympo325 = () => {
  const [isModal, setModal] = React.useState(false)
  React.useEffect(() => {
    if(window.location.hash.toString()==="#Olympo325"){
      setModal(!isModal)
    }
  },[])
  return (
    <Layout
      img={img}
      title="OLYMPO 3.25"
      description="Vehículo especial para transportar PERSONAL DE MINA. Diseñado y equipado para RECORRIDOS DE DISTANCIAS LARGAS. Carrocería ROBUSTO, COMPACTO, SALÓN PASAJEROS ESPACIOSO, SEGURO Y ELEGANTE."
    >
      <Hero
        img={img}
        title="OLYMPO 3.25"
        subtitle="Buses para personal de mina"
        text="
        <li>Vehículo especial para transportar <b>PERSONAL DE MINA.</b></li><br/>
        <li>Diseñado y equipado para <b>RECORRIDOS DE DISTANCIAS MEDIANAS Y LARGAS.</b></li><br/>
        <li>Carrocería <b>ROBUSTA Y COMPACTA</b> con salón de pasajeros espacioso, seguro y elegante. </li><br/>
        "
        crTitle1="Pasajeros sentados"
        crTitle2="Largo"
        crTitle3="Ancho"
        crTitle4="Altura"
        crTitle5="Chasis"
        crText1="33 pasajeros"
        crText2="9.70 m"
        crText3="2.40 m"
        crText4="3.25 m"
        crText5="HINO, MERCEDES BENZ, AGRALE"
        href="#Olympo325"
        isModal={isModal}
        setModal={setModal}
      />
      <WrapperBlock>
        {/* <Block1 textcolor="red" data={OlympoBlock6}></Block1> */}
        <Block1 subtitle="SALÓN DE PASAJEROS" data={OlympoBlock1}></Block1>
        <Block1 subtitle="CABINA DE CONDUCTOR" data={OlympoBlock2}></Block1>
        <Block1 subtitle="CONDUCCIÓN" data={OlympoBlock5}></Block1>
        <Block1 subtitle="EXTERIOR" data={OlympoBlock3}></Block1>
        <Block1
          title="CARACTERÍSTICAS OPCIONALES"
          color="gris"
          data={OlympoBlock4}
          backcolor="gris"
        ></Block1>
      </WrapperBlock>
      <Contact></Contact>
      {isModal&&<div className={`modal`}>
        <div className=" videoContainer">
          <video autoPlay src={Video325} poster={ImagenFondoVideo} controls></video>
          <div className="close"  onClick={()=>setModal(!isModal)}>x</div>
        </div>
      </div>}
    </Layout>
  )
}

export default Olympo325
