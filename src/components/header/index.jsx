import React,{useState} from 'react';
import { Header} from "./style"
import Hamburguer from './burguer'
import { Link } from "gatsby"
import Logo from "../../assets/images/logo.png"
import NavBar from './nav'
const Index = () => {
  const [open, setOpen] = useState(false);
  // para el acordeon 
  const [abierto, setAbierto] = useState(false);
  return (
    <Header>
      <div className="inside container">
        <Link to="/">
          <img src={Logo} alt="logo intramet" />
        </Link>
        <NavBar abierto={abierto} setAbierto={setAbierto} open={open} />
        <Hamburguer open={open} setOpen={setOpen}/>
      </div>
    </Header>
  )
}

export default Index
