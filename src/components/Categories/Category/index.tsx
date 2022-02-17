import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import { EditCategoryModal } from "../EditCategoryModal";

import { Container } from './styles';

interface ICategory {
  id: string;
  name: string;
  description?: string;
}

export function Category({id, name, description}: ICategory) {

  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);


  function handleOpenEditCategoryModal() {
    setIsEditCategoryModalOpen(true);
  }

  function handleCloseEditCategoryModal() {
    setIsEditCategoryModalOpen(false);
  }

  return (
    <Container>
      <EditCategoryModal
        id={id}
        isOpen={isEditCategoryModalOpen}
        onRequestClose={handleCloseEditCategoryModal}
      />
      <header>
        <span>{name}</span>
        <span>{description}</span>
      </header>
      <button
        onClick={handleOpenEditCategoryModal}
      >
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}