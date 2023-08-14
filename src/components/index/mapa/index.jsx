import React from "react"
import { MapaStyle } from "./style"
import Image from "../../../assets/images/mapa.jpg"
// console.log(MapaStyle)
const Mapa = () => {
  return (
    <MapaStyle>
      <img className="imageMapa" src={Image} alt="Imagen de Mapa" />
      <div className="infoMapa">
        <h3 className="infoMapa__Text">
          NUESTROS VEHÍCULOS ESTÁN RECORRIENDO LAS CARRETERAS DE :
          <br />
          <span>AREQUIPA, CUSCO, MOQUEGUA, APURÍMAC, TACNA Y PUNO</span>
        </h3>
      </div>
    </MapaStyle>
  )
}
export default Mapa
