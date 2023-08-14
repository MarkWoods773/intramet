import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Submenu1 from "../header/subMenu"
import { AiFillCaretDown } from "react-icons/ai"
import { BusUrbano } from "../../data/buses"
import { BusInterprovincial } from "../../data/buses"
import { BusParaPersonalDeLima } from "../../data/buses"
const pushData = (param1, param2, param3) => {
  const Data = new Array(0)
  Data.push(param1)
  if (param2) Data.push(param2)
  if (param3) Data.push(param3)
  return Data
}
const LinkSubmenu = styled.li`
.Nav__link{
  font-weight:bold;
  font-size:1rem;
}
  &:hover > .submenu,
  & > .submenu:hover {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 1000px) {
    .submenu {
    }
    & > .submenu {
      visibility: visible;
      opacity: 1;
    }
    & > .submenu img {
      display: none;
    }
  }
`
const nav = ({ down, submenu, color,abierto, setAbierto }) => {
  // console.log(abierto)
  const Linka = styled(Link)`
    color: ${color};
    .icondownNav {
      transform: ${({ abierto }) => (abierto ? "rotate(180deg)" : undefined)};
      transition: 0.5s;
    }
  `
  // funcion para abrir y cerrar acordeon en menu responsive
  const acordeon = e => {
    // solo si esta en menos o igual a 1000 pixeles
    if (window.innerWidth <= "1000") {
      e.preventDefault()
      setAbierto(!abierto)
    }
  }
  return (
    <>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/">
          INICIO
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/institucional">
          INSTITUCIONAL
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        {down ? (
          <Linka
            abierto={abierto |false}
            onClick={acordeon}
            className="Nav__link link__buses"
            to="/buses"
          >
            BUSES
            <AiFillCaretDown className="icondownNav" />
          </Linka>
        ) : (
          <Linka
            abierto={abierto |false}
            className="Nav__link link__buses"
            to="/buses"
          >
            BUSES
          </Linka>
        )}
       
        {submenu ? (
          <Submenu1
            abierto={abierto}
            data={pushData(
              BusParaPersonalDeLima,
              BusInterprovincial,
              BusUrbano,
            )}
          />
        ) : null}
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/garantia-y-repuestos">
          GARANTÍA Y REPUESTOS
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/mantenimiento-y-asesoria">
          MANTENIMIENTO & ASESORÍA
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/trabaja-con-nosotros">
          TRABAJA CON NOSOTROS
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/blog">
          BLOG
        </Linka>
      </LinkSubmenu>
      <LinkSubmenu>
        <Linka className="Nav__link" to="/contacto">
          CONTACTO
        </Linka>
      </LinkSubmenu>
    </>
  )
}
export default nav
 