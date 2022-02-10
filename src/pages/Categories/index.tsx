import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../components/HeaderMain';

export function Categories() {
  return (
    <>
      <HeaderMain
        title='Listar Categorias'
        buttonTitle='Cadastrar Nova Categoria'
      />
      <Outlet />
    </>
  )
}