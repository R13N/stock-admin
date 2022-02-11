import { FiEdit } from "react-icons/fi";

import { Container } from './styles';

interface ICategory {
  id: string;
  name: string;
  description?: string;
}

export function Category({id, name, description}: ICategory) {
  return (
    <Container>
      <header>
        <span>{name}</span>
        <span>{description}</span>
      </header>
      <button>
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}