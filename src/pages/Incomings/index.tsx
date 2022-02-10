import { Outlet } from "react-router-dom";
import { HeaderMain } from "../../components/HeaderMain";

export function Incomings() {
  return (
    <>
      <HeaderMain
        title='Listar Entradas'
        buttonTitle='Cadastrar Nova Entrada'
      />
      <Outlet />
    </>
  )
}