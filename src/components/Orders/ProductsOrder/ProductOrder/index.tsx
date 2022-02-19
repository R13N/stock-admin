import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { api } from "../../../../services/api";

import { Container } from './styles';

interface IProductProps {
  id: string;
  name: string;
  description: string;
  unit: string;
  amount: number;
}

interface IProductOrderProps {
  productorder_id: string;
  amount: number;
  product_id: string;
}

export function ProductOrder({ productorder_id, product_id, amount }: IProductOrderProps) {

  const [product, setProduct] = useState<IProductProps>();

  function onDeleteProductOrder() {

    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Tem certeza que deseja excluir o produto ${product?.name} desta entrada?`)

    if(result) {
      api.delete(`/orders/deleteproduct/${productorder_id}`)
        .then(() => alert(`Entrada do produto ${product?.name} excluída com sucesso!`))
        .then(() => window.location.reload())
    }
    // console.log(productorder_id);
  }
  
  useEffect(() => {
      api.get(`/products/${product_id}`)
      .then(response => setProduct(response.data))
  }, [product_id])

  return (
    product ?
    <Container>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.unit}</span>
      <span>{amount}</span>
      <button
        onClick={onDeleteProductOrder}
      >
        <FiTrash2 size={20}/>
      </button>
    </Container> : <></>
  )
}