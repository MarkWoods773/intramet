// este bloque es para recorrer data(conbackground) que tiene 90vh de altura
import React, { useEffect } from "react"
import { Block, Boton } from "./style"
import { FaWhatsapp } from "react-icons/fa"
import $ from "jquery"
const Bloque = props => {
  useEffect(() => {
    $(".row button:first-child").attr("id", "buton1")
    $(".row button:nth-child(2)").attr("id", "buton2")
  })
  const clickHref = e => {
    // console.log(e.target.id)

    if (e.target.id === "MANTENIMIENTO") {
      $("#buton1").trigger("click")
      // console.log("mantenida")
    }
    if (e.target.id === "ASESORÍA" /*|| e.target.id === "VENTASYREPUESTOS"*/) {
      // e.preventDefault();
      $("#buton2").trigger("click")
      // console.log("asosorada")
    }
  }

  return (
    <Block>
      {props.data.map
        ? props.data.map((dtPorQue, key) => {
            let {
              title,
              text,
              image,
              textAlt,
              botonText,
              url,
              targetBlanck,
              iconWhat,
            } = dtPorQue
            let title_s_espacios = title.replace(/\s+/g, "")
            return (
              <div
                className="wrapper"
                style={{ backgroundImage: `url(${image})` }}
                key={key}
              >
                <div className="container">
                  <div className="card-body">
                    <h3
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      className="card-body-title"
                    >
                      {title}
                    </h3>
                    <p
                      data-aos="fade-right"
                      data-aos-duration="1500"
                      className="card-body-text"
                    >
                      {text}
                    </p>
                    {textAlt.map((det, key) => {
                      const { text, condiciones } = det
                      return (
                        <p key={key} className="card-body-text">
                          {text} &nbsp;
                          {/* {console.log(condiciones)} */}
                          {condiciones ? (
                            <a
                              target="_blank"
                              className="condicion"
                              href={condiciones.url || "/"}
                              rel='noreferrer'
                            >
                              {condiciones.text}
                            </a>
                          ) : null}
                        </p>
                      )
                    })}
                    {props.boton ? (
                      <div data-aos="fade-right" data-aos-duration="1800">
                        <Boton
                          id={title_s_espacios}
                          onClick={clickHref}
                          href={url}
                          rel={targetBlanck ? "noreferrer" : null}
                          target={targetBlanck ? "_blanck" : null}
                        >
                          
                          <div className="btnflex">
                            {iconWhat ? <FaWhatsapp className='icon__what'> </FaWhatsapp>:null}
                            {botonText || "Formulario"}
                          </div>
                        </Boton>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })
        : null}
    </Block>
  )
}

export default Bloque
 