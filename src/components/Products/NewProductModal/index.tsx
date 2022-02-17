import { FormEvent, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../../services/api';

import { Container, Form, Row } from './styles';

interface INewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({ isOpen, onRequestClose }: INewProductModalProps){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [categoryName, setCategoryName] = useState('');

  async function submitFormData(event: FormEvent) {
    event.preventDefault();

    await api.post("/products/newproduct", {name, description, unit, category_name: categoryName})
      .then(() => alert("Produto cadastrado com sucesso!"))
      .then(() => onRequestClose())
      .catch(error => alert(error.message))

    setName('');
    setDescription('');
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName= 'react-modal-overlay'
      className= 'react-modal-content'
    >
        <Container>
          <Form onSubmit={submitFormData}>
            <span>Novo Produto</span>
            <Row>
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id='name' 
                name='name'
                onChange={event => setName(event.target.value)}
                required
              />
            </Row>
            <Row>
              <label htmlFor="category_name">Categoria</label>
              <input
                type="text" 
                name="category_name" 
                id="category_name"
                placeholder='A categoria deve estar cadastrada previamente.'
                onChange={event => setCategoryName(event.target.value)}
              />
            </Row>
            <Row>
              <label htmlFor="unit">Unidade</label>
              <input
                type="text"
                name="unit" 
                id="unit"
                placeholder='ex.: Bombona de 5l, caixa com 50 unidades, etc'
                onChange={event => setUnit(event.target.value)}
              />
            </Row>
            <Row>
              <label htmlFor="description">Descrição breve</label>
              <textarea 
                name="description" 
                id="description" 
                cols={20} 
                rows={5}
                onChange={event => setDescription(event.target.value)}
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