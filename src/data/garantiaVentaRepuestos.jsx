import Img1 from "../assets/images/garantia01.jpg"
import Img2 from "../assets/images/venta01.jpg"
export default [
  {
    title: "GARANTÍA",
    botonText: "Reporte de falla",
    url: "#contact",
    text:
      "Garantizamos la calidad de nuestros productos sustentado en una EXPERIENCIA GENERACIONAL de fabricación de carrocerías para ómnibus. Contamos con un equipo de profesionales en el área de INGENIERÍA DEL PRODUCTO por lo que estamos preparados para atender las necesidades y/o problemas de operación de tu carrocería.",
    textAlt: [
      // {
      //   text: "Para proceder a reportar tu falla, lea primero las ",
      //   condiciones: {
      //     text: `"condiciones de garantía"`,
      //     url:
      //     '/pdf/CONDICIONESDEGARANTIA.pdf',
      //   },
      // },
      { text: "Reportar tu caso en el siguiente formulario:" },
      // {condiciones:[{text:"condiciones de garantía",url:'https://docs.google.com/document/d/1_28ws4dwGQJd8NQgtyvZbIp2ozNpIOh8/edit'}]}
    ],

    image: Img1,
  },
  {
    title: "VENTA DE REPUESTOS",
    targetBlanck: true,
    iconWhat: true,
    botonText: "Venta repuestos",
    url:
      "https://api.whatsapp.com/send?phone=51938241444&text=Hola INTRAMET. Deseo comprar los siguientes repuestos:",
    text:
      "Dentro del GRUPO INTRAMET contamos con alianzas estratégicas con empresas importadoras con el objetivo de mantener un stock de repuestos y accesorios, para abastecer a nuestros clientes.",
    textAlt: [`Describe los accesorios que necesites al siguiente link:`],
    image: Img2,
  },
]
