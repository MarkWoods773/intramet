import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/bgHeroBusesUrbanos.jpg"
import Img1 from "../../assets/images/blog/img03.png"
import { Wrapper } from "../../components/blogDesc/style"
const blog3 = () => {
  return (
    <>
      <Layout>
        <Hero
          img={Img}
          title="Generando oportunidades de desarrollo profesional
          "
        ></Hero>
        <Wrapper>
          <div className="container">
            <img src={Img1} alt="Imagen Principal de blog" />
            <h2>Generando oportunidades de desarrollo profesional</h2>
            <p>
              <strong>18 Abril 2022</strong>
            </p>
            <p>
              En marzo del 2022 tuvo lugar “LA IMPOSICIÓN DE CASCOS”, evento que
              sistematiza el reconocimiento del nivel de profesionalización y
              compromiso alcanzado por nuestros colaboradores en el área de
              producción de INTRAMET.
            </p>
            <p>
              Este es el caso de nuestro nuevo Jefe de Área JHON CCALLA, que
              después de 05 años en Intramet deja de usar su casco rojo para
              ponerse el CASCO BLANCO, por haber demostrado ser un colaborador
              multifuncional, promotor de la mejora continua, formador de nuevos
              técnicos carroceros y poseer un alto grado de compromiso y
              espíritu innovador.
            </p>
            <p>
              En palabras de nuestro nuevo Jefe de Área, Jhon Ccalla a la
              pregunta de: ¿Cuál es su más próximo desafío ahora que es jefe de
              área?. Responde: “Desde que fui ascendido a jefe de área, mi
              desafío es hacer que los procedimientos sean más sencillos,
              resolver puntos críticos y llegar a una línea de trabajo estándar
              y de esa manera entregar las unidades en el menor tiempo posible y
              con una mayor calidad”. Adicionalmente invita a sus compañeros a
              crecer en Intramet siendo responsables, comprometidos a su trabajo
              y, sobre todo, tener muchas ganas de aprender cada día algo nuevo
              en este rubro de carrocerías para buses.
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default blog3
