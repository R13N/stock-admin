
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

import { Category } from "../Category";
import { Container } from './styles';

interface ICategoryProps {
  id: string;
  name: string;
  description?: string;
}

export function ListCategories() {
  
  const [categories, setCategories] = useState<ICategoryProps[]>([]);

  useEffect(() => {
    api.get("/categories/filter").then(response => {setCategories(response.data)});
  }, [])

  return (
    <Container>
      <header>
        <span>Nome</span>
        <span>Descrição</span>  
      </header>
      {categories.map(c => 
        <Category
          key={c.id}
          id={c.id}
          name={c.name}
          description={c.description}
        />
      )}
    </Container>
  )
}