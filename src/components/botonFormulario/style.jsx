import styled from "styled-components"
export const Button = styled.button.attrs(props => ({
  type: props.as ? null : "submit",
}))`
&.azul{
  background-color: ${({ theme }) => theme.colors.azul};
  color: white;
  :hover{
    background-color: ${({ theme }) => theme.colors.blanco};
    color:${({ theme }) => theme.colors.azul};
    transition:.3s;
  }
}
  color: ${({ theme }) => theme.colors.azul};
  border: 1px solid ${({ theme }) => theme.colors.azul};
  border-radius: 1.5rem;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.blanco};
  :hover{
    background-color: ${({ theme }) => theme.colors.azul};
    color:${({ theme }) => theme.colors.gris};
    transition:.3s;
  }
`