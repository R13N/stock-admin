import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { ListProducts } from "../../components/Products/ListProducts";

import { Header } from './styles';

export function Products() {

  // const titles = ["Nome", "Descrição", "Unidade", "Estoque"];

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
      <ListProducts />
      <Outlet />
    </>
  )
}