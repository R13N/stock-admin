import { FormEvent, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../../services/api';

import { Container, Form, Row } from './styles';

interface INewCategoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewCategoryModal({ isOpen, onRequestClose }: INewCategoryModalProps){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function submitFormData(event: FormEvent) {
    event.preventDefault();

    await api.post("/categories/newcategory", {name, description})
      .then(() => alert("Categoria criada com sucesso!"))
      .then(() => onRequestClose())
      .catch(error => console.log(error.message))

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
            <span>Nova Categoria</span>
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