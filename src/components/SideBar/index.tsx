import { NavLink } from "react-router-dom"

import { Container, Footer } from './styles';

export function SideBar() {
  return (
    <Container>
      <div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/categories"}>Categorias</NavLink>
          <NavLink to={"/products"}>Produtos</NavLink>
          <NavLink to={"/incomings"}>Entradas</NavLink>
          <NavLink to={"/outgoings"}>Retiradas</NavLink>
        </nav>
      </div>
      <Footer>
        <p>Desenvolvido por</p>
        <p>Rodrigo Rocha Niederauer</p>
        <p>contato@trezetech.com.br</p>
        <p>- 2022 -</p>
      </Footer>
    </Container>
  )
}