import React, { FormEvent, useState } from "react";
import { FiSave } from "react-icons/fi";
import Modal from 'react-modal';

import { api } from "../../../services/api";
import { useFetch } from "../../../hooks/useFetch";

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
  
  const { data } = useFetch<ICategory>(`categories/${id}`);
  console.log(data);
  // console.log(id);

  function submitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/categories/editcategory/${id}`, { id, "name": updatedName, "description": updatedDescription})
    .then(() => alert("Categoria alterada com sucesso!"))
    .then(() => onRequestClose())
    .catch(error => alert(`${error.message}`))

  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setUpdatedName(e.target.value)
    console.log(updatedName)
    if(updatedName === null && data) {
      setUpdatedName(data?.name)
    }
  }

  function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setUpdatedDescription(e.target.value)
    if(updatedDescription === null && data) {
      setUpdatedDescription(data?.description)
    }
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      ariaHideApp={false}
    >
      <Container>
        <Form onSubmit={submitFormData} key={data?.id}>
          <span>Editar {data?.name}</span>
          <Row>
            <label htmlFor="name">Nome</label>
            <input 
              type="text"
              id="name"
              name="name"
              defaultValue={data?.name}
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
                defaultValue={data?.description}
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