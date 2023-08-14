import React from "react"
import { WrapperLineTime, WrapperItem, Item__title, ItemParrafo } from "./style"
import ItemImg1 from "../../../assets/images/linetime/01.jpg"
import ItemImg2 from "../../../assets/images/linetime/02.jpg"
import ItemImg3 from "../../../assets/images/linetime/03.jpg"
import ItemImg4 from "../../../assets/images/linetime/04.jpg"
import ItemImg5 from "../../../assets/images/linetime/05.jpg"
import ItemImg6 from "../../../assets/images/linetime/06.jpg"
import ItemImg7 from "../../../assets/images/linetime/07.jpg"
import ItemImg8 from "../../../assets/images/linetime/08.jpg"
import ItemImg9 from "../../../assets/images/linetime/09.jpg"
import ItemImg10 from "../../../assets/images/linetime/10.jpg"
import { Theme } from "../../../styles/layoutcss"
// import ReactFancyBox from "react-fancybox"
import { SRLWrapper } from "simple-react-lightbox"
// import "react-fancybox/lib/fancybox.css"
import Title from "../title"
const hero = () => {
  return (
    <WrapperLineTime>
      <SRLWrapper>
        <div className="container card">
          <div data-aos="fade-up" data-aos-duration="1500">
            <Title color={Theme.colors.plomo} title="LÍNEA DE TIEMPO" />
          </div>
          <WrapperItem>
            <div data-aos="fade-left" data-aos-duration="1500" className="item">
              <div className="imageModal">
                <a href={ItemImg1}>
                  <img src={ItemImg1} alt="Linea de Tiempo" />
                </a>
              </div>
              {/* <img src={ItemImg1} alt="Imagen de linea de tiempo" /> */}
              <div className="item__info">
                <Item__title>1967</Item__title>
                <span>
                  Es el año en que Agripino Coyuri se inicia en el mundo de las
                  carrocerías para el transporte de pasajeros.
                </span>
              </div>
            </div>
          </WrapperItem>
          <WrapperItem>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="item"
            >
              <div className="item__info">
                <Item__title>1975</Item__title>
                <span>
                  Uno de sus primeros trabajos como carrocero especializado fue
                  en la Empresa Carrocera Espinar.
                </span>
              </div>
              <div className="imageModal">
                <a href={ItemImg2}>
                  <img src={ItemImg2} alt="Linea de Tiempo" />
                </a>
              </div>
              {/* <img src={ItemImg2} alt="Imagen de linea de tiempo" /> */}
            </div>
          </WrapperItem>
          <WrapperItem>
            <div data-aos="fade-left" data-aos-duration="1500" className="item">
              <div className="imageModal">
                <a href={ItemImg3}>
                  <img src={ItemImg3} alt="Linea de Tiempo" />
                </a>
              </div>
              {/* <img src={ItemImg3} alt="Imagen de linea de tiempo" /> */}
              <div className="item__info">
                <Item__title>1990</Item__title>
                <span>
                  Forma parte de la conformación de Intramet S.A. ocupando el
                  puesto de Jefe de producción, consolidando así su experiencia
                  y liderazgo.
                </span>
              </div>
            </div>
          </WrapperItem>
          <WrapperItem>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="item"
            >
              <div className="item__info">
                <Item__title>1999</Item__title>
                <span>
                  Inicia la etapa de emprendimiento con la sociedad empresarial
                  INMECOT.
                </span>
              </div>
              <div className="imageModal">
                <a href={ItemImg4}>
                  <img src={ItemImg4} alt="Linea de Tiempo" />
                </a>
              </div>
              {/* <img src={ItemImg4} alt="Imagen de linea de tiempo" /> */}
            </div>
          </WrapperItem>
          <WrapperItem>
            <div data-aos="fade-left" data-aos-duration="1500" className="item">
              <div className="imageModal">
                <a href={ItemImg5}>
                  <img src={ItemImg5} alt="Linea de Tiempo" />
                </a>
              </div>
              {/* <img src={ItemImg6} alt="Imagen de linea de tiempo" /> */}
              <div className="item__info">
                <Item__title>2002</Item__title>
                <span>
                  Fundación de la empresa FACENTURY SRL dedicada a la reparación
                  y fabricación de carrocerías para el transporte de pasajeros.
                </span>
              </div>
            </div>
          </WrapperItem>
          <WrapperItem>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="item"
            >
              <div className="item__info">
                <Item__title>2006</Item__title>
                <span>
                  Inicia la etapa de consolidación al formar junto a sus hijos
                  INTRAMET S.R.L. en el rubro de fabricación de carrocerías sobre chasis de las marcas más reconocidas tales como: Scania, Volvo y Mercedes Benz.
                </span>
              </div>
              <div className="imageModal">
                <a href={ItemImg6}>
                  <img src={ItemImg6} alt="Linea de Tiempo" />
                </a>{" "}
              </div>
              {/* <img src={ItemImg5} alt="Imagen de linea de tiempo" /> */}
            </div>
          </WrapperItem>
          <WrapperItem>
            <div data-aos="fade-left" data-aos-duration="1500" className="item">
              <div className="imageModal">
              <a href={ItemImg7}>
                  <img src={ItemImg7} alt='Linea de Tiempo' />
                </a>
              </div>
              {/* <img src={ItemImg7} alt="Imagen de linea de tiempo" /> */}
              <div className="item__info">
                <Item__title>2011</Item__title>
                <span>
                  Fue el año de logros, año en que se compró la fábrica donde se
                  diseñan y crean las carrocerías hasta el día de hoy.
                </span>
              </div>
            </div>
          </WrapperItem>
          <WrapperItem>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="item"
            >
              <div className="item__info">
                <Item__title>2016</Item__title>
                <span>
                  Significó la etapa de evolución, cambiaron las expectativas
                  del mercado y no bastaba tener únicamente un vehículo de buena
                  calidad, tenía que tener un diseño tan atractivo como los
                  vehículos importados.
                </span>
              </div>
              <div className="imageModal">
              <a href={ItemImg8}>
                  <img src={ItemImg8} alt='Linea de Tiempo' />
                </a>
              </div>
              {/* <img src={ItemImg8} alt="Imagen de linea de tiempo" /> */}
            </div>
          </WrapperItem>
          <WrapperItem>
            <div data-aos="fade-left" data-aos-duration="1500" className="item">
              <div className="imageModal">
              <a href={ItemImg9}>
                  <img src={ItemImg9} alt='Linea de Tiempo' />
                </a>
              </div>
              {/* <img src={ItemImg9} alt="Imagen de linea de tiempo" /> */}
              <div className="item__info">
                <Item__title>2018</Item__title>
                <span>
                  Organizamos la imposición de cascos para nombrar a los jefes
                  de área. Este evento significó la oportunidad de brindar
                  reconocimiento a nuestros colaboradores.
                </span>
              </div>
            </div>
          </WrapperItem>
          <WrapperItem>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="item"
            >
              <div className="item__info">
                <Item__title>2019</Item__title>
                <span>
                  Comienza la etapa comercial, Intramet exhibe sus vehículos en
                  otras ciudades del Perú.
                </span>
              </div>
              <div className="imageModal">
              <a href={ItemImg10}>
                  <img src={ItemImg10} alt='Linea de Tiempo' />
                </a>
              </div>
              {/* <img src={ItemImg10} alt="Imagen de linea de tiempo" /> */}
            </div>
          </WrapperItem>
          <ItemParrafo>
            <div data-aos="flip-up" data-aos-duration="1500" className="item">
              Desde entonces la empresa fue creciendo con visión empresarial de
              largo plazo. Capacitando a sus colaboradores en base a la
              excelencia para hacerle frente a la fuerte competencia.
            </div>
          </ItemParrafo>
        </div>
      </SRLWrapper>
    </WrapperLineTime>
  )
}
export default hero
