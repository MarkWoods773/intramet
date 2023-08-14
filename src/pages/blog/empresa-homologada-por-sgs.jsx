import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import Img1 from "../../assets/images/blog/img02.jpg"
import { Wrapper } from "../../components/blogDesc/style"
const blog3 = () => {
  return (
    <>
      <Layout>
        <Hero
          img={Img}
          title="EMPRESA HOMOLOGADO POR SGS
          "
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img1} alt="Imagen Principal de blog" />
            <h2>EMPRESA HOMOLOGADO POR SGS</h2>
            <p><strong>13 Marzo 2022</strong></p> 
            <p>
              En Noviembre del año 2021, nuestra empresa INTRAMET SRL concluye
              satisfactoriamente la auditoría de HOMOLOGACIÓN realizada por SGS
              DEL PERÚ SAC, a solicitud de VOLVO PERÚ S.A.
            </p>
            <p>
              El proceso de homologación está basado en los procedimientos de
              SGS DEL PERÚ SAC para el servicio conocido como Homologación de
              Proveedores y el requisito de la norma ISO 9001.
            </p>
            <p>
              Con esta homologación VOLVO PERÚ e INTRAMET estrechan relaciones
              comerciales donde las decisiones de compras se agilizaran; así
              mismo, INTRAMET inicia un programa de mejoras que serán percibidas
              por sus clientes.
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog3
