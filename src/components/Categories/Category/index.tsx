import { FormEvent, useEffect, useState } from "react";
import { FiEdit, FiSave, FiX } from "react-icons/fi";
import { api } from "../../../services/api";

// import { EditCategoryModal } from "../EditCategoryModal";

import { Container } from './styles';

interface ICategory {
  id: string;
  name: string;
  description?: string;
  // onOpenEditCategoryModal: (id: string) => void;
}

interface IUpdateCategory {
  id: string;
  name: string;
  description: string;
}

export function Category({id, name, description }: ICategory) {

  const [isEdit, setIsEdit] = useState(false);

  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const [category, setCategory] = useState<IUpdateCategory>(Object); 
  
  // if nothing comes from the inputs, the original data will be submitted
  if(updatedDescription === '') {
    setUpdatedDescription(category?.description)
  }

  if(updatedName === '') {
    setUpdatedName(category?.name)
  }

  function toggleOpenEdit() {
    setIsEdit(!isEdit);
  }

  function onSubmitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/categories/editcategory/${id}`, { 
      id, 
      "name": updatedName, 
      "description": updatedDescription
    })
    .then(() => alert("Categoria alterada com sucesso!"))

    setUpdatedName('');
    setUpdatedDescription('');
    toggleOpenEdit();
    updateList(id);
    window.location.reload();
  }

  function updateList(id: string) {
    api.get(`/categories/${id}`)
    .then(response => setCategory(response.data))
  }

  useEffect(() => {
    updateList(id)
  }, [id])

  return (
    <Container>
      <header>
        { isEdit ?
          <>
            <form onSubmit={onSubmitFormData}>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Nome"
                defaultValue={category?.name}
                onChange={e => setUpdatedName(e.target.value)}
              />
              <input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="Descrição"
                defaultValue={category?.description}
                onChange={e => setUpdatedDescription(e.target.value)}
              />
              <button type="submit">
                <FiSave size={24}/>
              </button>
            </form>
          </>
          :
          <div>
            <span>{name}</span>
            <span>{description}</span>
          </div>
        }
      </header>
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