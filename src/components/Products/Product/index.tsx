import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { EditProductModal } from "../EditProductModal";

import { Container } from './styles';

interface IProduct {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
}

export function Product({id, name, description, unit, amount}: IProduct) {

  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  function handleOpenEditProductModal() {
    setIsEditProductModalOpen(true);
  }

  function handleCloseEditProductModal() {
    setIsEditProductModalOpen(false);
    updateList();
  }

  function updateList(){

  }

  return (
    <Container>
      <EditProductModal 
        isOpen={isEditProductModalOpen}
        onRequestClose={handleCloseEditProductModal} 
        id={id}
      />
      <header>
        <span>{name}</span>
        <span>{description}</span>
        <span>{unit}</span>
        <span>{amount}</span>
      </header>
      <button
        onClick={handleOpenEditProductModal}
      >
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}