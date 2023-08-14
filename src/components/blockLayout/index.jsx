import React from "react"
// import ModalImage from "react-modal-image";
import { FaWhatsapp } from "react-icons/fa"
import { WrapperContainer } from "./style"
import { Link } from "gatsby"
import Boton from "../botonFormulario"
// import ReactFancyBox from "react-fancybox"
import { SRLWrapper } from "simple-react-lightbox"
// import "react-fancybox/lib/fancybox.css"
const Card = props => {
  return (
    <>
      <h4 className="titleItem">{props.title}</h4>

      <a href={props.img}>
        <img src={props.img} alt={props.title} />
      </a>
      {/* <ReactFancyBox thumbnail={props.img} image={props.img} /> */}
      {/* <ModalImage hideZoom={true} hideDownload={true} className='ModalImage' small={props.img} large={props.img} alt="imagen de item" /> */}
      {/* <img  src={props.img} alt= 'imagen de item'/> */}
      <div className="info">
        <p>
          <strong>{props.fecha || ""}</strong>{" "}
        </p>
        {props.text.map ? (
          props.text.map((text, key) => {
            return (
              <p key={key}>
                <span>{text.titulo}</span>: &nbsp;
                <span>{text.text}</span>
              </p>
            )
          })
        ) : (
          <div dangerouslySetInnerHTML={{ __html: props.text }} />
          )}

          
        {props.textAlt ? <p>{props.textAlt}</p> : null}

        {console.log(props.botonWhatsapp)}
        {props.botonWhatsapp ? (
          <div className="Link">
            <a
              id="whatsappMessage"
              className="whatsappVerde"
              href={props.UrlLink}
              target="_blanck"
            >
              <FaWhatsapp className="iconWhatsap"></FaWhatsapp>
              <span>M&Aacute;S INFORMACI&Oacute;N</span>
            </a>
          </div>
        ) : null}
      </div>
      {props.url ? (
        <div className="Link">
          <Boton type="span">Ver más</Boton>
        </div>
      ) : null}
    </>
  )
}
const blockLayout = props => {
  return (
    <WrapperContainer
      optional={props.optional ? 1 : 0}
      tipo={props.page}
      textcolor={props.textcolor}
    >
      {/* para validar si poner el subtitulo */}
      {props.subtitle ? <h3 className="subtitle">{props.subtitle}</h3> : null}
      {props.title ? <h3 className="titleadicional">{props.title}</h3> : null}

      {/* para validar si hay data o no*/}
      <SRLWrapper>
        <div className="wrapperflex">
          {props.data
            ? props.data.map((dt, key) => {
                const { title, text, img, textAlt, url, UrlLink, fecha } = dt
                // console.log(url);
                return url ? (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="item"
                    key={key}
                  >
                    <Link to={url}>
                      <Card
                        img={img}
                        title={title}
                        text={text}
                        url={url}
                        fecha={fecha}
                      />
                    </Link>
                  </div>
                ) : (
                  <div
                    key={key}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="item"
                  >
                    <Card
                      img={img}
                      title={title}
                      text={text}
                      textAlt={textAlt}
                      UrlLink={UrlLink}
                      botonWhatsapp={props.botonWhatsapp}
                    />
                  </div>
                )
              })
            : null}
        </div>
      </SRLWrapper>
    </WrapperContainer>
  )
}

export default blockLayout
