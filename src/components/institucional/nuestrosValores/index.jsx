import React, { useState } from "react"
import { NuestrosValores } from "./style"
import { Theme } from "../../../styles/layoutcss"
import Title from "../title"
// import BastonDerecho from "../../../assets/images/bastonDerecho.png"
// import BastonIzquierdo from "../../../assets/images/bastonIzquierdo.png"
import Valores from "../../../assets/images/valores.png"
// import bgIsoTipo from "../../../assets/images/bgIsoTipo.svg"
const Hero = () => {
  const [int, setInt] = useState(false)
  const [tras, setTras] = useState(false)
  const [conf, setConf] = useState(false)
  return (
    <NuestrosValores>
      <div
        data-aos="flip-up"
        data-aos-duration="1500"
        className="container card "
      >
        <Title color={Theme.colors.azul} title="NUESTROS VALORES" />
        <div className="container valoresWrapper">
          <p>
            LA REALIDAD nos dice que los emprendimientos son de corta vida, por
            tanto:
          </p>
          <ul>
            <li>Nos encaminamos en ser la EXCEPCIÓN.</li>
            <li>
              Solos no podemos, necesitamos mas aliados, necesitamos que este
              sector aprenda.
            </li>
            <li>
              Debemos promover la práctica de buenas costumbres
              organizacionales.
            </li>
          </ul>
          <p>Lo expuesto queda plasmado en nuestros valores, los que son:</p>
        </div>
        <div className="cardwrappervalores">
          <div></div>
          <div>
            <div
              className="trascen itVAL"
              onClick={() => {
                setTras(!tras)
                console.log(tras, "tras")
              }}
            >
              <span>TRASCENDENCIA</span>
            </div>
          </div>
          <div></div>
          <div
            className="integracion itVAL"
            onClick={() => {
              setInt(!int)
              console.log(int, "integracion")
            }}
          >
            <span>INTEGRACIÓN</span>
          </div>
          <div>
            <img
              data-aos="flip-down"
              data-aos-duration="1500"
              className="card__imgvalores"
              src={Valores}
              alt="valores de Intramet"
            />
          </div>
          <div
            className="conf itVAL"
            onClick={() => {
              setConf(!conf)
              console.log(conf, "confianza")
            }}
          >
            <span>CONFIANZA</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          tras == true ? "d-flex" : "hidden"
        } modalVal trascendencia`}
      >
        <div className="cardVal">
          <div
            className="close"
            onClick={() => {
              setTras(!tras)
            }}
          >
            x
          </div>
          <h1>Trascendencia</h1>
          <p>
            <b>
              "Nos regulamos y/o ordenamos para operar de generación en
              generación"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>Lo primero, transmitir orden y limpieza.</li>
            <li>
              Desarrollar una actitud de pro sistema, orientado al crecimiento
              orgánico.
            </li>
            <li>Ser recordado por aportes sustanciales.</li>
            <li>Actuar con calidad, es la línea de acción.</li>
          </ol>
        </div>
      </div>
      <div
        className={`${int == true ? "d-flex" : "hidden"} modalVal INTEGRACIÓN`}
      >
        <div className="cardVal">
          <div
            className="close"
            onClick={() => {
              setInt(!int)
            }}
          >
            x
          </div>
          <h1>INTEGRACIÓN</h1>
          <p>
            <b>
              "Construimos una unidad económica sostenida en sus valores y
              principios"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>
              Identificarse con nuestros valores y sus principios
              disciplinarios.
            </li>
            <li>El equipo es la base de toda acción.</li>
            <li>Aprender para enseñar y enseñar para aprender.</li>
          </ol>
        </div>
      </div>
      <div
        className={`${conf == true ? "d-flex" : "hidden"} modalVal INTEGRACIÓN`}
      >
        <div className="cardVal">
          <div
            className="close"
            onClick={() => {
              setConf(!conf)
            }}
          >
            x
          </div>
          <h1>CONFIANZA</h1>
          <p>
            <b>
              "Una buena relación laboral y comercial se basa en la confianza y
              honestidad"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>
              Actuar bajo los códigos de ética profesional y organizacional.
            </li>
            <li>Tener apertura y minimizar barreras de comunicación.</li>
            <li>Ser honestos y actuar con la mayor transparencia posible.</li>
          </ol>
        </div>
      </div>
      <div className="gridValores ">
        <div className="cardVal">
          <h1>Trascendencia</h1>
          <p>
            <b>
              "Nos regulamos y/o ordenamos para operar de generación en
              generación"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>Lo primero, transmitir orden y limpieza.</li>
            <li>
              Desarrollar una actitud de pro sistema, orientado al crecimiento
              orgánico.
            </li>
            <li>Ser recordado por aportes sustanciales.</li>
            <li>Actuar con calidad, es la línea de acción.</li>
          </ol>
        </div>
        <div className="cardVal">
          <h1>INTEGRACIÓN</h1>
          <p>
            <b>
              "Construimos una unidad económica sostenida en sus valores y
              principios"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>
              Identificarse con nuestros valores y sus principios
              disciplinarios.
            </li>
            <li>El equipo es la base de toda acción.</li>
            <li>Aprender para enseñar y enseñar para aprender.</li>
          </ol>
        </div>
        <div className="cardVal">
          <h1>CONFIANZA</h1>
          <p>
            <b>
              "Una buena relación laboral y comercial se basa en la confianza y
              honestidad"
            </b>
          </p>
          <p>PRINCIPIOS DISCIPLINARIOS:</p>
          <ol>
            <li>
              Actuar bajo los códigos de ética profesional y organizacional.
            </li>
            <li>Tener apertura y minimizar barreras de comunicación.</li>
            <li>Ser honestos y actuar con la mayor transparencia posible.</li>
          </ol>
        </div>
      </div>
    </NuestrosValores>
  )
}
export default Hero
