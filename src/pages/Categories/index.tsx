import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { EditCategoryModal } from '../../components/Categories/EditCategoryModal';
import { ListCategories } from '../../components/Categories/ListCategories';
import { NewCategoryModal } from '../../components/Categories/NewCategoryModal';
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
  // NEWCATEGORY MODAL MANAGEMENT
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);

  function handleOpenNewCategoryModal() {
    setIsNewCategoryModalOpen(true);
  }

  function handleCloseNewCategoryModal() {
    setIsNewCategoryModalOpen(false);
    updateList();
  }

  // EDITCATEGORY MODAL MANAGEMENT
  // const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  // const [id, setId] = useState('');

  // function handleCloseEditCategoryModal() {
  //   setIsEditCategoryModalOpen(false);
  // }

  // function handleOpenEditCategoryModal(id: string) {
  //   setIsEditCategoryModalOpen(true);
  //   setId(id)
  // }


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

  function updateList() {
    api.get("/categories/filter")
    .then(response => setCategories(response.data));
  }

  useEffect(() => {
    if(filterValue === ""){
      setFilteredCategories(categories);
    }
  }, [filterValue, categories])

  useEffect(() => {
    updateList();
  }, [])

  return (
    <>
      <NewCategoryModal 
        isOpen={isNewCategoryModalOpen}
        onRequestClose={handleCloseNewCategoryModal} 
      />
      {/* <EditCategoryModal
        id={id}
        isOpen={isEditCategoryModalOpen}
        onRequestClose={handleCloseEditCategoryModal}
      /> */}
      <Header>
        <h2>Listar Categorias</h2>
        <button
          onClick={handleOpenNewCategoryModal}
        >
          Cadastrar Nova Categoria
        </button>
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
      <ListCategories 
        categories={filteredCategories}
        // onOpenEditCategoryModal={handleOpenEditCategoryModal}
      />
      <Outlet />
    </>
  )
}