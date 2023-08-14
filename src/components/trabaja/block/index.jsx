import React from "react"
import { Wrapper } from "./style"
const block = props => {
  return (
    <Wrapper>
      <div className="container">
        <div className="rowBlock">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="colBlock"
          >
            <img src={props.img1} alt="proposito" />
            <h2>{props.title1 || "undefined"}</h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="colBlock"
          >
            <img src={props.img2} alt="lineamiento estrategico" />
            <h2>{props.title2 || "undefined"}</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default block
