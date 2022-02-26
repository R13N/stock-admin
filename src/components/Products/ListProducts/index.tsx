import { Product } from "../Product";

import { Container } from './styles';

interface IProductProps {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
}

interface IProductsListProps {
  products: IProductProps[];
}

export function ListProducts({products}: IProductsListProps) {

  console.log(products);

  return (
    <Container>
      <header>
        <span>Nome</span>
        <span>Descrição</span>
        <span>Unidade</span>
        <span>Estoque</span>
      </header>
      {products? products.map(p => 
        <Product 
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
          unit={p.unit}
          amount={p.amount}
        />
      ): <></>}
    </Container>
  )
}