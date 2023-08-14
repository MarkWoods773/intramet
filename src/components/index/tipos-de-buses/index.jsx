import React from "react"
import { Block, BlockWrapper, Btn } from "./style"
import TpBuses from "../../../data/tiposBuses"
import {AiOutlineRight} from 'react-icons/ai'
const TipoBuses = () => {
  return (
    <>
      {TpBuses.map((tpBus, key) => {
        const { title, text, img, details, url } = tpBus
        return (
          <BlockWrapper key={key} className="section fp-auto-height">
            <Block>
              <div className="col1">
                <img src={img} alt={title} />
              </div>
              <div className="col2">
                <div className="row1">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className="row2">
                  {details.map((det, key) => {
                    const { title, text } = det
                    return (
                      <div key={key}>
                        <AiOutlineRight className='arrow-right'> </AiOutlineRight>
                        <h4>{title}</h4> <br/><br/> <span dangerouslySetInnerHTML={{__html:text}}/>
                      </div>
                    )
                  })} 
                  <br />
                  <br />
                  <div className="box__btn">
                    <Btn to={url}>Ver M&aacute;s</Btn>
                  </div>
                </div>
              </div>
            </Block>
          </BlockWrapper>
        )
      })}
    </>
  )
}
export default TipoBuses
