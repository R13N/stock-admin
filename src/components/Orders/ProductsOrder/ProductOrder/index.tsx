import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { api } from "../../../../services/api";

import { Container } from './styles';

interface IPorductProps {
  id: string;
  id_product: string;
  name: string;
  description: string;
  unit: string;
  amount: number;
}

interface IPorductOrderProps {
  id: string;
  amount: number;
}

export function ProductOrder({ id, amount }: IPorductOrderProps) {

  const [product, setProduct] = useState<IPorductProps>();

  useEffect(() => {
      api.get(`/products/${id}`)
      .then(response => setProduct(response.data))
  }, [id])

  
  return (
    product ?
    <Container>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.unit}</span>
      <span>{amount}</span>
      <button>
        <FiTrash2 size={20}/>
      </button>
    </Container> : <></>
  )
}