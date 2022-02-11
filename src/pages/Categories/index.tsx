import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { ListCategories } from '../../components/Categories/ListCategories';
import { api } from '../../services/api';

import { Header } from './styles';

interface ICategoryProps {
  id: string;
  name: string;
  description?: string;
  created_at?: string;
}

export function Categories() {

  const [categories, setCategories] = useState<ICategoryProps[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<ICategoryProps[]>([]);
  const [filterValue, setFilterValue] = useState('');

  function handleFilteringCategories(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
    const newFilter = categories.filter(value => {
      return (
        value.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        value.description?.toLowerCase().includes(filterValue.toLowerCase())
      )
    })
    setFilteredCategories(newFilter);
  }

  useEffect(() => {
    if(filterValue === ""){
      setFilteredCategories(categories);
    }
  }, [filterValue, categories])

  useEffect(() => {
    api.get("/categories/filter")
    .then(response => setCategories(response.data));
  }, [])

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
          value={filterValue}
          onChange={handleFilteringCategories}
        />
        <span>
          <FiSearch size={24}/>
        </span>
      </Header>
      <ListCategories categories={filteredCategories}/>
      <Outlet />
    </>
  )
}