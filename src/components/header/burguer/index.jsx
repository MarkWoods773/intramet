// Burger.js
import React from 'react';
import {bool,func} from 'prop-types';
import { StyledBurger } from './style';
const Burger = (  { open, setOpen }) => {
    const Click=()=>{
        setOpen(!open);
    }
  return (
    <StyledBurger open={open} onClick={Click}>
      <div/>
      <div/>
      <div/>
    </StyledBurger> 
  )
} 
Burger.propsTypes={
    open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Burger;