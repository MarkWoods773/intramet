import React from "react"
import { BlockBuses, BusTitle, BusDetailsText } from "./style"
import BusDetails from "../blockTpBuses"
const changeColor = title => {
  switch (title) {
    case "BUSES URBANOS":
      return "amarillo"
    case "BUSES INTERPROVINCIALES":
      return "gris"
    case "BUSES PARA PERSONAL DE LIMA":
      return "azul"
    default:
      break
  }
}
const blockBuses = props => {
  const { title, titleDetails, detailsText, detailsItems } = props.data
  return (
    <BlockBuses color={changeColor(title)}>
      <div className="container">
        <BusTitle>
          <span data-aos="fade-right" data-aos-duration="1500">
            {titleDetails}
          </span>
        </BusTitle>
        <BusDetailsText>
          {detailsText.map((dtText, key) => {
            return (
              <li
                data-aos="fade-right"
                data-aos-duration="1500"
                key={key}
              >
                {dtText}
              </li>
            )
          })}
        </BusDetailsText>
        <BusDetails data={detailsItems} color={changeColor(props.data.title)} />
      </div>
    </BlockBuses>
  )
}
export default blockBuses
