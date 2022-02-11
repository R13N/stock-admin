
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

import { Product } from "../Product";

import { Container } from './styles';

interface IProductProps {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
}

export function ListProducts() {
  
  const [products, setProducts] = useState<IProductProps[]>([]);

  useEffect(() => {
    api.get("/products").then(response => {setProducts(response.data)});
  }, [])

  return (
    <Container>
      <header>
        <span>Nome</span>
        <span>Descrição</span>
        <span>Unidade</span>
        <span>Estoque</span>
      </header>
      {products.map(p => 
        <Product 
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
          unit={p.unit}
          amount={p.amount}
        />
      )}
    </Container>
  )
}