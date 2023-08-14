// import imgUrbanoIt1 from "../assets/images/busUrbanoIt1.jpg"
import imgUrbanoIt1 from "../assets/images/heroOlympoUrbano.png"
import imgInterprovincialIt1 from "../assets/images/heroOlympo36.png"
// import imgMinaIt1 from "../assets/images/busMinaIt1.jpg"
import imgMinaIt1 from "../assets/images/heroOlympo29.png"
// import imgMinaIt2 from "../assets/images/busMinaIt2.jpg"
import imgMinaIt2 from "../assets/images/heroOlympo310.png"
// import imgMinaIt3 from "../assets/images/busMinaIt3.jpg"
import imgMinaIt3 from "../assets/images/heroOlympo325.png"
// import imgMinaIt4 from "../assets/images/busMinaIt4.jpg"
import imgMinaIt4 from "../assets/images/heroOlympo34.png"
// import imgMinaIt5 from "../assets/images/busMinaIt5.jpg"
import imgMinaIt5 from "../assets/images/heroOlympo35.png"
let prefix = "/bus"
export const BusUrbano = {
  title: `BUSES URBANOS`,
  url:`${prefix}/urbano`,
  titleDetails: `NUESTROS PRODUCTOS`,
  detailsText: [
    `Brindamos acompañamiento e información integral para aquellos clientes que tienen interés en comprar un bus de transporte urbano.`,
    `Resolveremos sus consultas con toda transparencia respecto a la mejor alternativa en relación calidad precio, personalización, tiempos de entrega y otros.`,
    `Hacemos hincapié en la calidad a la hora de la fabricación de la carrocería, como también en nuestra responsabilidad y seriedad con nuestros clientes.`,
  ],
  detailsItems: [
    {
      title: `OLYMPO URBANO`,
      img: imgUrbanoIt1,
      url: `${prefix}/urbano/olympo`,
    },
  ],
}
export const BusInterprovincial = {
  title: `BUSES INTERPROVINCIALES`,
  titleDetails: `NUESTROS PRODUCTOS`,
  url:`${prefix}/interprovincial`,
  detailsText: [
    `Nuestros vehículos están hechos tomando en cuenta diferentes pistas y carreteras del Perú. Fabricamos buses sólidos que tengan el mejor desempeño en diferentes condiciones climatológicas. `,
    `Atendemos requerimientos respecto a diferentes niveles de personalización de nuestros buses interprovinciales.`,
  ],
  detailsItems: [
    {
      title: `OLYMPO 3.6 MD`,
      img: imgInterprovincialIt1,
      url: `${prefix}/interprovincial/olympo36`,
    },
  ],
}
export const BusParaPersonalDeLima = {
  title: `BUSES PARA PERSONAL DE MINA`,
  url:`${prefix}/para-personal-de-mina`,
  titleDetails: `NUESTROS PRODUCTOS`,
  detailsText: [
    `La seguridad y comodidad de los pasajeros es nuestra prioridad. Ofrecemos buses de transporte de personal sólidos, perfectos para diferentes carreteras y condiciones de clima. `,
  ],
  detailsItems: [
    {
      title: `OLYMPO 3.5`,
      img: imgMinaIt5,
      url: `${prefix}/para-personal-de-mina/olympo35`,
    },
    {
      title: `OLYMPO 3.4`,
      img: imgMinaIt4,
      url: `${prefix}/para-personal-de-mina/olympo34`,
    },
    {
      title: `OLYMPO 3.25`,
      img: imgMinaIt3,
      url: `${prefix}/para-personal-de-mina/olympo325`,
    },
    {
      title: `OLYMPO 3.10`,
      img: imgMinaIt2,
      url: `${prefix}/para-personal-de-mina/olympo31`,
    },
    {
      title: `OLYMPO 2.9`,
      img: imgMinaIt1,
      url: `${prefix}/para-personal-de-mina/olympo29`,
    },
    
    
  ],
}
