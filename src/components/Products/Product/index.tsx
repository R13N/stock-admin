import { FiEdit } from "react-icons/fi";

import { Container } from './styles';

interface IProduct {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  amount?: number;
}

export function Product({id, name, description, unit, amount}: IProduct) {
  return (
    <Container>
      <header>
        <span>{name}</span>
        <span>{description}</span>
        <span>{unit}</span>
        <span>{amount}</span>
      </header>
      <button>
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}