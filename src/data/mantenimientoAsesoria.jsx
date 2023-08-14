import Img1 from "../assets/images/bgHeroMantenimiento1.jpg"
import Img2 from "../assets/images/asesoria01.jpg"
export default [
  {
    title: "MANTENIMIENTO",
    text:
      "Nuestra área de INGENIERÍA DEL PRODUCTO evalúa los resultados del desempeño operativo de nuestras carrocerías y utiliza las conclusiones para la mejora continua de los procesos de fabricación, recomendaciones para el cuidado de la carrocería y programas de mantenimiento.",
    image: Img1,
    targetBlanck:true,
    botonText: "Cuidados de la Carrocería",
    url:'/pdf/CUIDADOSDECARROCERIA.pdf',
    textAlt: [
      {
        text: "",
        condiciones: {
          // text: `Cuidados de la Carrocería `,
          // url:"https://docs.google.com/document/d/1UCpewAk0rWUI0pGieiIIeM-CQqm1rahv/edit",
        },
      },
    ],
  },
  {
    title: "ASESORÍA",
    text:
      "Nos mantenemos expectantes a las necesidades informativas de nuestros clientes. Atenderlos nos brinda oportunidades de aprendizaje que enriquecen nuestra ESCUELA DE CARROCEROS.",
    image: Img2,
    url:'#contact',
    textAlt: [
      {
        text: "Si requieres asesoría sobre cualquier aspecto de carrocería, solicítalo en el siguiente link:  ",
        
      },
    ],
  },
  
  
]
