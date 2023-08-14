import BusUrbano from "../assets/images/bus_urbano.jpg"
import BusInterprovincial from "../assets/images/bus_interprovincial.jpg"
import BusTraslado from "../assets/images/bus_traslado1.jpg"
const prefix = "/bus"
export default [
  {
    title: "BUSES PARA PERSONAL DE MINA ",
    text: `Vehículos sólidos y cómodos diseñados para todo tipo de clima`,
    img: BusTraslado,
    url: `${prefix}/para-personal-de-mina`,
    details: [
      { 
        title: `ESTRUCTURA y COMODIDAD`,
        text: `Intramet pone especial atención en la estructura de los buses de transporte para personal de mina, para que tengan buen rendimiento en diferentes carreteras. <br/>Nuestras unidades cuentan con asientos cómodos ideales para los pasajeros.`,
      },
     
      {
        title: `SEGURIDAD Y GARANTÍA `,
        text: `Ponemos a su disposición nuestra experiencia en carrocerías a través de estos años en el mercado y mantenemos nuestro compromiso de atender las necesidades posteriores que puedan surgir.`,
      },
    ],
  },

  {
    title: "BUSES INTERPROVINCIALES",
    text: `Experiencia en carrocerías sólidas que se adaptan a las carreteras del Perú`,
    img: BusInterprovincial,
    url: `${prefix}/interprovincial`,
    details: [
      {
        title: `RENDIMIENTO`,
        text: `La solidez de nuestros vehículos los hace ideales para afrontar los desafíos de las carreteras del Perú.<br/>Nos adaptamos a los requerimientos de forma y desempeño típicos de los buses para transporte interprovincial.`,
      },
      
      {
        title: `STANDARD INTERNACIONAL`,
        text: `Somos una fábrica de carrocerías que trabaja en base a altos estándares, lo que tiene como resultado un vehículo sólido, seguro y elegante.`,
      },
    ],
  },
  {
    title: "BUSES URBANOS",
    text: `Vehículos modernos y resistentes para transportar pasajeros en la ciudad. "Recomendados por transportistas peruanos".`,
    img: BusUrbano,
    url: `${prefix}/urbano`,
    details: [
      {
        title: `INNOVACIÓN`,
        text: `El sistema modular que empleamos nos permite personalizar los vehículos manteniendo calidad y costos razonables para nuestros clientes.`,
      },
      {
        title: `LÍDERES EN EL SUR`,
        text: ` Tenemos una larga trayectoria atendiendo las necesidades de nuestros clientes en diferentes partes del Perú, en especial del sur del país. Estamos cerca para atender cualquier requerimiento.`,
      },
    ],
  },
]
