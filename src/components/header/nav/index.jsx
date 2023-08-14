import React from "react"
import { Navbar } from "../style"
import { bool } from "prop-types"
import NavLink from "../../navLink"
import { Theme } from "../../../styles/layoutcss"
const Index = ({ open ,abierto,setAbierto}) => {
  // console.log(abierto);
  return (
    <Navbar open={open} className="inside navbar">
      <NavLink abierto={abierto} setAbierto={setAbierto} down={true} submenu={true} color={Theme.colors.gris} />
    </Navbar>
  )
}
Index.propTypes = {
  open: bool.isRequired,
}
export default Index
