import React from "react"
import DataPorQueIntramet from "../../../data/porque-intramet"
import Cabecera from "../cabPorQueIntramet"
import { PorQueIntramet } from "./style"
const blockPorqueIntramet = () => {
  return (
    <>
      {DataPorQueIntramet.map((dtPorQue, key) => {
        const { title, text, image } = dtPorQue
        return (
          <PorQueIntramet className='section fp-auto-height' 
            style={{ backgroundImage: `url(${image})` }}
            key={key}
          >
            <div className="container">
              <Cabecera />
              <div className="card-body">
                <h3 className="card-body-title">{title}</h3>
                <p className="card-body-text">{text}</p>
              </div>
            </div>
          </PorQueIntramet>
        )
      })}
    </>
  )
}
export default blockPorqueIntramet