import { Outlet } from "react-router-dom";
import { HeaderMain } from "../../components/HeaderMain";

export function Products() {
  return (
    <>
      <HeaderMain
        title='Listar Produtos'
        buttonTitle='Cadastrar Novo Produto'
      />
      <Outlet />
    </>
  )
}