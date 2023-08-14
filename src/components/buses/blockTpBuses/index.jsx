import React from "react"
import { BusDetails, BusDetailsItem, ItemLink } from "./style"
import { Link } from "gatsby"
const blockTpBuses = props => {
  return (
    <div className="container">
      <BusDetails className={props.tipo?'pageBus':'desc__bus'}>
        {props.data.map
          ? props.data.map((dtItem, Key) => {
              const { title, img, url } = dtItem
              return (
                <BusDetailsItem   key={Key}>
                  <Link className="BusLink" to={url}>
                    <div data-aos="fade-right" data-aos-duration="1500">
                      <img className={props.tipo?'bus':'det__bus'} src={img} alt="img-bus" />
                    </div>
                  </Link>
                  <ItemLink to={url} color={props.color || "azul"}>
                    <div data-aos="fade-left" data-aos-duration="1500">
                      <span>{title}</span>
                    </div>
                  </ItemLink>
      
      
                </BusDetailsItem>
              )
            })
          : null}
      </BusDetails>
    </div>
  )
}
export default blockTpBuses
