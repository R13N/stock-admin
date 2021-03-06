import { FormEvent, useEffect, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../../services/api';

import { Container, Form, Row } from './styles';

interface IEditProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}

interface ICategory {
  name: string;
}

interface IProduct {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
  category: ICategory;
}

export function EditProductModal({ id, isOpen, onRequestClose }: IEditProductModalProps){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState(0);
  const [foundProduct, setFoundProduct] = useState<IProduct>(Object);
  
  if(categoryName === '') {
    setCategoryName(foundProduct?.category?.name)
  }

  function submitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/products/${id}`, {
      id, 
      "name": name, 
      "description": description, 
      "unit": unit, 
      "category_name": categoryName, 
      "amount": amount
    })
      .then(() => alert("Produto alterado com sucesso!"))
      .then(() => onRequestClose())

    resetForm();
  }
    
  function resetForm() {
    setName('');
    setDescription('');
    setUnit('');
    setCategoryName('');
    setAmount(0);  
  }

  useEffect(() => {
    api.get(`/products/${id}`)
    .then(response => setFoundProduct(response.data))
  },[id])

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName= 'react-modal-overlay'
      className= 'react-modal-content'
      ariaHideApp={false}
    >
    <Container>
      <Form onSubmit={submitFormData}>
        <span>Editar {foundProduct?.name}</span>
        <Row>
          <label htmlFor="name">Nome</label>
          <input 
            type="text" 
            id='name' 
            name='name'
            onChange={event => setName(event.target.value)}
            defaultValue={foundProduct?.name}
            required
          />
        </Row>
        <Row>
          <label htmlFor="category_name">Categoria</label>
          <input
            type="text" 
            name="category_name" 
            id="category_name"
            onChange={event => setCategoryName(event.target.value)}
            defaultValue={foundProduct?.category?.name}
          />
        </Row>
        {/* <Row>
          <label htmlFor="category_name">Categoria</label>
          <select>
            <option value=""></option>
          </select>
        </Row> */}
        <Row>
          <label htmlFor="amount">Estoque</label>
          <input
            type="number" 
            name="amount" 
            id="amount"
            onChange={event => setAmount(Number(event.target.value))}
            defaultValue={foundProduct?.amount}
          />
        </Row>
        <Row>
          <label htmlFor="unit">Unidade</label>
          <input
            type="text"
            name="unit" 
            id="unit"
            onChange={event => setUnit(event.target.value)}
            defaultValue={foundProduct?.unit}
          />
        </Row>
        <Row>
          <label htmlFor="description">Descri????o breve</label>
          <textarea 
            name="description" 
            id="description" 
            cols={20} 
            rows={5}
            onChange={event => setDescription(event.target.value)}
            defaultValue={foundProduct?.description}
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