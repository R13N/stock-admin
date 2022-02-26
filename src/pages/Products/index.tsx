import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { ListProducts } from "../../components/Products/ListProducts";
import { NewProductModal } from "../../components/Products/NewProductModal";
import { api } from "../../services/api";

import { Container, Header } from './styles';

interface IProductProps {
  id: string;
  name: string;
  description: string;
  amount: number;
  unit: string;
  created_at: string;
  id_category: string;
}

export function Products() {

  const [products, setProducts] = useState<IProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductProps[]>([]);
  const [filterValue, setFilterValue] = useState('');

  // MODAL MANAGEMENT
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
    updateList();
  }

  function handleFilteringProducts(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
    const newFilter = products.filter(value => {
      return (
        value.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        value.description?.toLowerCase().includes(filterValue.toLowerCase())
      )
    })
    setFilteredProducts(newFilter);
  }

  async function updateList() {
    await api.get("/products")
    .then(response => setProducts(response.data));
  }

  useEffect(() => {
    if(filterValue === ""){
      setFilteredProducts(products);
    }
  }, [filterValue, products])

  useEffect(() => {
    updateList();
  }, [])

  return (
    <Container>
      <NewProductModal 
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal} 
      />
      
      <Header>
        <h2>Listar Produtos</h2>
        <button
          onClick={handleOpenNewProductModal}
        >
          Cadastrar Novo Produto
        </button>
        <input 
          type="text" 
          name="search" 
          id="search"
          placeholder="Pesquisar"
          value={filterValue}
          onChange={handleFilteringProducts}
        />
        <span>
          <FiSearch size={24}/>
        </span>
      </Header>
      <ListProducts products={filteredProducts}/>
      <Outlet />
    </Container>
  )
}