import React from "react"
// para hacer el multitab componente externo
import CoolTabs from "react-cool-tabs"
import { Theme } from "../../../styles/layoutcss"
import Formulario from "../formulario"
import styled from "styled-components"
// para modificar un poco el componente
const Multitab = styled.div`
  .container > div div:nth-child(2) > div:nth-child(2) {
    position: relative !important;
  }
`
const multitab = props => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="1500"
    >
      <Multitab
        id="contact"
        className="wrapperTabContacto"
        style={{ backgroundColor: Theme.colors.grisform }}
      >
        <div  className="container" style={{ maxWidth: "50rem" }}>
          <CoolTabs
            tabKey={"1"}
            style={{
              width: "100%",
              height: "auto",
              background: Theme.colors.grisform,
            }}
            activeTabStyle={{ background: Theme.colors.grisform }}
            unActiveTabStyle={{
              background: Theme.colors.gris,
              color: Theme.colors.azul,
            }}
            activeLeftTabBorderBottomStyle={{
              background: Theme.colors.azul,
              height: 4,
            }}
            activeRightTabBorderBottomStyle={{
              background: Theme.colors.azul,
              height: 4,
            }}
            //    leftContentStyle={{ background:  Theme.colors.grisform }}
            //    rightContentStyle={{ background:  Theme.colors.grisform }}
            leftTabTitle={props.title1}
            rightTabTitle={props.title2}
            leftContent={
              <Formulario
                title={`Formulario ${props.title1}`}
                img={props.img1}
              />
            }
            rightContent={
              <Formulario
                title={`Formulario ${props.title2}`}
                img={props.img2}
              />
            }
            contentTransitionStyle={"transform 0.6s ease-in"}
            borderTransitionStyle={"all 0.6s ease-in"}
          />
        </div>
      </Multitab>
    </div>
  )
}
export default multitab
