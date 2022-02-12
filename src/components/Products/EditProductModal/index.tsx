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
  const [description, setDescription] = useState<string | null>('');
  const [unit, setUnit] = useState<string | null>('');
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState<number | null>();
  const [foundProduct, setFoundProduct] = useState<IProduct>();

  async function getProduct(){
    await api.get(`/products/${id}`)
    .then(response => setFoundProduct(response.data))
    .catch(error => console.log(error.message))
    
    if(foundProduct){
      setName(foundProduct?.name);
      setAmount(foundProduct.amount);
      setCategoryName(foundProduct.category.name);
      if(foundProduct.unit){
        setUnit(foundProduct.unit)
      }
      if(foundProduct.description){
        setDescription(foundProduct?.description);
      }
    }
  }
  
  
  async function submitFormData(event: FormEvent) {
    event.preventDefault();

    await api.put(`/products/${id}`, {name, description, unit, category_name: categoryName, amount})
      .then(() => alert("Produto cadastrado com sucesso!"))
      .then(() => onRequestClose())
      .catch(error => console.log(error.message))

    setName('');
    setDescription('');
    setUnit('');
    setCategoryName('');
    setAmount(null);
  }

  useEffect(() => {
    getProduct();
  },)

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName= 'react-modal-overlay'
      className= 'react-modal-content'
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
                value={foundProduct?.name}
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
                value={foundProduct?.category.name}
              />
            </Row>
            <Row>
              <label htmlFor="amount">Estoque</label>
              <input
                type="number" 
                name="amount" 
                id="amount"
                onChange={event => setAmount(Number(event.target.value))}
                value={foundProduct?.amount}
              />
            </Row>
            <Row>
              <label htmlFor="unit">Unidade</label>
              <input
                type="text"
                name="unit" 
                id="unit"
                onChange={event => setUnit(event.target.value)}
                value={foundProduct?.unit}
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
                value={foundProduct?.description}
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