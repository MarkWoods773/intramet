// esta es la pagina de gracias de contacto
import React from "react"
import Layout from "../components/layout"
import BlockGracias from "../components/afterContact"
export default function Gracias() {
  return (
    <>
      <Layout>
        <BlockGracias text="Politica de Privacidad"></BlockGracias>
        <div className="container wrapperPolitica">
          <p>
            Intramet SRL con RUC. 20454304056 domiciliado en calle Víctor Lira P
            – 11, Parque Industrial – Cercado provincia y departamento de
            Arequipa, le informa que realizará el tratamiento de datos de
            identificación y contacto suministrado por usted a través de los
            formularios virtuales dispuesto en las siguientes secciones de la
            página web de Intramet: “productos” para cotizaciones,
            “mantenimiento y asesoría” para asesoría comercial, “trabaja con
            nosotros” para oportunidades laborales y “contacto” para cualquier
            tipo de información. Dichos datos serán almacenados en una base
            única por un plazo indeterminado.
          </p>
          <p>
            El tratamiento de sus datos extendidos a Intramet a través de sus
            formularios virtuales, tendrá por finalidades: Enviar información
            comercial, promocional y/o publicidad con relación a los productos
            y/o servicios brindados por Intramet; brindar respuestas a los
            requerimientos de asesoría comercial, reclamos, oportunidades
            laborales. El contacto se podrá realizar a través de los siguientes
            medios: Llamadas telefónicas, envío de mensajes de texto a celular o
            de mensajes electrónicos masivos o privados.
          </p>
          <p>
            Intramet se reserva el derecho a modificar esta política en el
            supuesto de que exista un cambio en la legislación vigente,
            doctrinal, jurisprudencial o por criterios propios empresariales. Si
            se introdujera algún cambio en esta política, el nuevo texto se
            publicara en este mismo sitio. Le informamos que tiene la facultad
            de ejercer cualquiera de los derechos previstos en la ley nro.
            29733, tales como los derechos de acceso, rectificación,
            cancelación, oposición, para la cual podrá enviar una comunicación a
            Intramet al correo electrónico mcoyuri@intramet.com.pe, con el
            asunto: “Derechos de Datos Personales”
          </p>
        </div>
      </Layout>
    </>
  )
}
