import { FiSearch } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { ListCategories } from '../../components/Categories/ListCategories';

import { Header } from './styles';

export function Categories() {

  return (
    <>
      <Header>
        <h2>Listar Categorias</h2>
        <button>Cadastrar Nova Categoria</button>
        <input 
          type="text" 
          name="search" 
          id="search"
          placeholder="Pesquisar"
        />
        <span>
          <FiSearch size={24}/>
        </span>
      </Header>
      <ListCategories />
      <Outlet />
    </>
  )
}