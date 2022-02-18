
import { Category } from "../Category";
import { Container } from './styles';

interface ICategoryProps {
  id: string;
  name: string;
  description?: string;
}

interface ICategoryListProps {
  categories: ICategoryProps[];
  // onOpenEditCategoryModal: (id: string) => void;
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
          // onOpenEditCategoryModal={onOpenEditCategoryModal}
        />
      ): <></>}
    </Container>
  )
}