// // esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import Img from "../assets/images/bgHeroBlog.jpg"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import Block from '../components/blog/block'
import { DataBlog } from '../data/blog'
export default function Blog() {
  return (
    <>
      <Helmet>
        <title>BLOG</title>
        <meta
          name="description"
          content="este es el BLOG"
        ></meta>
      </Helmet>
      <Layout>
        <Hero clase='heroBlog' img={Img} title="BLOG"></Hero>
        <Block  tipo='blog' data={DataBlog}></Block>
      </Layout>
    </>
  )
}
// import React from "react"
// import Layout from "../components/layout"
// import Hero from "../components/hero"
// import Img from "../assets/images/bgOlympo.jpg"
// import { Wrapper } from "../components/blogDesc/style"
// const Blog = () => {
//   return (
//     <>
//       <Layout
//         img={Img}
//         title="Blog"
//         description="Intramet, la historia de la fábrica de carrocerías líder en el sur del Perú"
//       >
//         <Hero
//           img={Img}
//           title="Intramet, nuestra historia historia de la fábrica de carrocerías líder en el sur del Perú"
//         ></Hero>
//         <Wrapper>
//           <div className="container">
//             {/* <img src={Img} alt="Imagen Principal de blog" />
//             <h2>
//             Consolidaci&oacute;n de conocimiento y liderazgo
//             </h2> */}
//             {/* <p>
//             En los años 90 Agripino Coyuri consolida su alto grado de experiencia en la fabricaci&oacute;n de carrocer&iacute;as. Se convierte en Jefe de producci&oacute;n y pieza fundamental en la fundaci&oacute;n de Intramet S.A. 
//             </p>
//             <p>
//             Fueron ocho años de conocimiento, experiencias y alegr&iacute;as al ser parte de una empresa pr&oacute;spera que lo acogi&oacute; y confi&oacute; en &eacute;l para tener un cargo de responsabilidad. 
//             </p>
//             <p>Por razones administrativas la empresa tuvo que cerrar sus puertas, lo que lejos de desanimar a nuestro fundador le dio la oportunidad de iniciar su etapa de emprendedor. </p> */}
           
//             {/* <p>
//               Se especializaron en la fabricación de carrocerías sobre chasis de
//               las marcas más reconocidas tales como: SCANIA y MERCEDES BENZ,
//               VOLVO entre otros.{" "}
//             </p>
//             <p>
//               Realizaron también actividades secundarias de reparación y
//               mantenimiento.{" "}
//             </p>
//             <p>
//               En el año 2011 se compró la fábrica donde se diseñan y crean las
//               carrocerías hasta el día de hoy. Fue una etapa de evolución,
//               tiempo de reinventarse
//             </p>
//             <p>
//               Con el paso de los años cambiaron las expectativas del mercado y
//               no bastaba tener únicamente un vehículo de buena calidad, tenía
//               que tener un diseño tan atractivo como los vehículos importados.
//             </p>
//             <h2>Resiliencia e innovación</h2>
//             <p>
//               El año 2016 fue el punto decisivo para <b>Intramet.</b> A raíz de
//               un incendio, se perdieron todos los moldes, las matrices de las
//               carrocerías.{" "}
//             </p>
//             <p>
//               Fueron momentos difíciles, pero al mismo tiempo fue la oportunidad
//               que necesitaban para innovar. Dejaron atrás los patrones obsoletos
//               y este evento fue la motivación para darle paso a la reinvención
//               de diseños y acabados.
//             </p>
//             <p>
//               En este contexto nacen los primeros modelos de la{" "}
//               <b>serie Olimpo</b> tomando fuerza y reconocimiento en el mercado{" "}
//             </p>
//             <p>
//               Durante los últimos años y algo más de experiencia administrativa
//               y comercial se organizaron estrategias de posicionamiento y
//               reconocimiento a los colaboradores y fue entonces que el 2018 se
//               organizó el evento de “Imposición de Cascos” para nombrar a los
//               jefes de cada área.{" "}
//             </p>
//             <p>
//               Este evento significó la oportunidad de brindarles reconocimiento
//               a nuestros colaboradores y entregarles cargos de confianza.
//             </p>
//             <p>
//               Ya en los años siguientes años <b>Intramet</b> participó de ferias
//               para mostrar la calidad de los vehículos, dando inicio a la fase
//               comercial y de difusión.
//             </p>
//             <h2>¿Qué es lo que trae el futuro para Intramet?</h2>
//             <p>
//               Somos una empresa que lleva en su ADN la innovación, la
//               responsabilidad y la confianza.{" "}
//             </p>
//             <p>
//               Intramet se enorgullece de sus raíces y apuesta por capacitar y
//               empoderar a sus trabajadores desde el inicio de sus actividades
//               tanto en habilidades técnicas como blandas.
//             </p>
//             <p>
//               Lo que viene a continuación es más crecimiento con visión
//               empresarial a largo plazo, llevar nuestros vehículos a todo el
//               territorio nacional. . Seguir evolucionando y seguirle el paso a
//               este mercado competitivo y cambiante.
//             </p> */}
//           </div>
//         </Wrapper>
//       </Layout>
//     </>
//   )
// }

// export default Blog
