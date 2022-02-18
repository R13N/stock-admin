import React, { FormEvent, useEffect, useState } from "react";
import { FiSave } from "react-icons/fi";
import Modal from 'react-modal';

import { api } from "../../../services/api";

import { Container, Form, Row } from './styles';

interface IEditCategoryModalProps {
  id: string;
  onRequestClose: () => void;
  isOpen: boolean;
}

interface ICategory {
  id: string;
  name: string;
  description: string;
}

export function EditCategoryModal({ id, isOpen, onRequestClose }: IEditCategoryModalProps) {

  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [category, setCategory] = useState<ICategory>(Object); 
  
  if(updatedDescription === '') {
    setUpdatedDescription(category?.description)
  }

  function submitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/categories/editcategory/${id}`, { id, "name": updatedName, "description": updatedDescription})
    .then(() => alert("Categoria alterada com sucesso!"))
    .then(() => onRequestClose())
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value === '') {
      setUpdatedName(e.target.defaultValue)
    }
    setUpdatedName(e.target.value)
  }

  function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setUpdatedDescription(e.target.value)
  }

  useEffect(() => {
    api.get(`categories/${id}`)
    .then(response => setCategory(response.data))
  }, [id])

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      ariaHideApp={false}
    >
      <Container>
        <Form onSubmit={submitFormData} key={category?.id}>
          <span>Editar {category?.name}</span>
          <Row>
            <label htmlFor="name">Nome</label>
            <input 
              type="text"
              id="name"
              name="name"
              defaultValue={category?.name}
              onChange={handleChangeName}
              required
            />
          </Row>
          <Row>
              <label htmlFor="description">Descrição breve</label>
              <textarea 
                name="description" 
                id="description" 
                cols={20} 
                rows={5}
                defaultValue={category?.description}
                onChange={handleChangeDescription}
              />
            </Row>
          <button>
            <span>Salvar</span>
            <FiSave size={20}/>
          </button>

        </Form>

      </Container>

    </Modal>
  )

}