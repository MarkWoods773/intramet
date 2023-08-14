// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import imgHero from "../assets/images/bgHeroTrabaja.jpg"
// import Block1 from "../components/trabaja/block"
import { TrabajaBlock } from "../data/trabaja"
import { dataAreaAdministrativaTecnica } from "../data/trabaja"
import styled from "styled-components"
// import Block2 from "../components/olympo/block1"
import BlockData1 from "../components/trabaja/block1"
import Formulario from "../components/formulario"
// import img1 from "../assets/images/Trabaja01.jpg"
// import img2 from "../assets/images/Trabaja01.jpg"
const Text = styled.div`
  color: ${({ theme }) => theme.colors.azul};
  background-color: ${({ theme }) => theme.colors.amarillo};
  font-size: ${({ theme }) => theme.fontsize.small};
  padding: 2rem 0;
  .textrabaja {
    max-width: 40rem;
    margin: 0;
    text-align: justify;
  }
`
export default function TrabajaNosotros() {
  return (
    <>
      <Layout
        img={imgHero}
        title="¿QUIERES TRABAJAR CON NOSOTROS?"
        description="Registra tus datos e indica tus áreas de interés  para ser parte de INTRAMET"
      >
        <Hero title="Trabaja con Nosotros" img={imgHero}></Hero>

        <Text>
          <div className="container">
            <div className="textrabaja">
              Parte estratégica y operacional de nuestra estructura es nuestra
              &nbsp; <b>ESCUELA DE CARROCEROS</b>, cuyo propósito es transformar
              y desarrollar una cultura de empoderamiento de los colaboradores
              en nuestras áreas de producción, ingeniería, administración y
              gerencia.
              <br />
              <br />
              Nuestras iniciativas se denominan <b>PCO</b> (Programa de
              Capacitación Organizacional) e <b>INTRAMET ÁGIL,</b> son nuestras
              principales herramientas para el desarrollo técnico profesional y
              personal de nuestros colaboradores.
              <br />
              <br />
              Trabaja con Nosotros - Para mayor consulta póngase en contacto al
              Área de Capital Humano al número:{" "}
              <b>
                <a href="tel:+936812617">936812617</a>
              </b>
            </div>
          </div>
        </Text>
        {/* <Block1
          img1={img1}
          img2={img2}
          title1="PROP&Oacute;SITO"
          title2="LINEAMIENTO ESTRAT&Eacute;GICO"
        ></Block1> */}
        <BlockData1
          botonWhatsapp={true}
          subtitle="ÁREA DE PRODUCCIÓN"
          data={TrabajaBlock}
        ></BlockData1>
        <BlockData1
          botonWhatsapp={true}
          subtitle="ÁREA DE INGENIERÍA Y ADMINISTRATIVA"
          data={dataAreaAdministrativaTecnica}
        ></BlockData1>
        <Formulario
          title="¿QUIERES TRABAJAR CON NOSOTROS?"
          text="Registra tus datos e indica tus áreas de interés  para ser parte de INTRAMET"
          cv={true}
        ></Formulario>
      </Layout>
    </>
  )
}
