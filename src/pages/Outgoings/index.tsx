import { Outlet } from "react-router-dom";
import { HeaderMain } from "../../components/HeaderMain";

export function Outgoings() {
  return (
    <>
      <HeaderMain
        title='Listar Retiradas'
        buttonTitle='Cadastrar Nova Retirada'
      />
      <Outlet />
    </>
  )
}