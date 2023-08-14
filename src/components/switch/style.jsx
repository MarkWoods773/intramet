import styled from "styled-components"
export const Switch = styled.div`
  display: inline-block;
  .switch-button__checkbox {
    display: none;
  }
  .switch-button__label {
    background-color: ${({ theme }) => theme.colors.gris};
    width: 3.8rem;
    height: 1rem;
    border-radius: 3rem;
    display: inline-block;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.azul};
    vertical-align: middle;
  }
  .switch-button__label:before {
    transition: 0.2s;
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.azul};
    content: "";
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 1px black;
  }
  .switch-button__checkbox:checked + .switch-button__label ,
  .switch-button__checkbox:checked + .switch-button__label {
    background-color: ${({ theme }) => theme.colors.plomo};
  }
  .switch-button__checkbox:checked + .switch-button__label:before ,
  .switch-button__checkbox:checked + .switch-button__label:before {
    transform: translateX(2.5rem);
  }
`
