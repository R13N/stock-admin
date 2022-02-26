import {  FormEvent, useEffect, useState } from "react";
import { FiEdit, FiSave, FiX } from "react-icons/fi";
import { api } from "../../../services/api";
// import { EditProductModal } from "../EditProductModal";

import { Container } from './styles';

interface IProduct {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
}

interface IUpdatedProduct {
  id: string;
  name: string;
  description: string;
  unit: string;
  amount: number;
  categoryName: string;
}

export function Product({id, name, description, unit, amount}: IProduct) {

  const [isEdit, setIsEdit] = useState(false);

  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState(0);
  const [updatedUnit, setUpdatedUnit] = useState('');

  const [product, setProduct] = useState<IUpdatedProduct>(Object)
  
  // if nothing comes from the inputs, the original data will be submitted
  if(updatedDescription === '') {
    setUpdatedDescription(product?.description)
  }

  if(updatedName === '') {
    setUpdatedName(product?.name)
  }

  if(updatedAmount === 0) {
    setUpdatedAmount(product?.amount)
  }

  if(updatedUnit === '') {
    setUpdatedUnit(product?.unit)
  }

  function toggleOpenEdit() {
    setIsEdit(!isEdit)
  }

  function onSubmitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/products/${id}`, {
      id,
      "name": updatedName,
      "description": updatedDescription,
      "amount": updatedAmount,
      "unit": updatedUnit,
      "category_name": product.categoryName
    })
    .then(() => alert("Produto alterado com sucesso!"))

    setUpdatedName('');
    setUpdatedDescription('');
    setUpdatedAmount(0);
    setUpdatedUnit('');
    updateList(id);
    toggleOpenEdit();
    window.location.reload();
  }

  function updateList(id: string) {
    api.get(`/products/${id}`)
    .then(response => {
      setProduct(response.data)
    })
  }

  useEffect(() => {
    updateList(id)
  }, [id])


  return (
    <Container>
      {isEdit ?
      <form onSubmit={onSubmitFormData}>
        <input 
          type="text" 
          defaultValue={product.name}
          onChange={e => setUpdatedName(e.target.value)}
        />
        <input 
          type="text"
          defaultValue={product.description}
          onChange={e => setUpdatedDescription(e.target.value)}
        />
        <input 
          type="text" 
          defaultValue={product.unit}
          onChange={e => setUpdatedUnit(e.target.value)} 
        />
        <input 
          type="number" 
          defaultValue={product.amount}
          onChange={e => setUpdatedAmount(Number(e.target.value))} 
        />
        <button 
          type="submit">
          <FiSave size={24}/>
        </button>
      </form>
      :
      <header>
        <span>{name}</span>
        <span>{description}</span>
        <span>{unit}</span>
        <span>{amount}</span>
      </header>
      }
      {isEdit ? 
        <button
          onClick={toggleOpenEdit}
          title="Fechar"
        >
          <FiX size={24}/>
        </button> :
        <button
        onClick={toggleOpenEdit}
        title="Editar"
        >
          <FiEdit size={24}/>
        </button> 
      }
    </Container>
  )
}