
import { Category } from "../Category";
import { Container } from './styles';

interface ICategoryProps {
  id: string;
  name: string;
  description?: string;
}

interface ICategoryListProps {
  categories: ICategoryProps[];
}

export function ListCategories({categories}: ICategoryListProps) {
  
  return (
    <Container>
      <header>
        <span>Nome</span>
        <span>Descrição</span>  
      </header>
      {categories? categories.map(c => 
        <Category
          key={c.id}
          id={c.id}
          name={c.name}
          description={c.description}
        />
      ): <></>}
    </Container>
  )
}