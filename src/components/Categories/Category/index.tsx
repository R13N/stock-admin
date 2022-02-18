import { FormEvent, useEffect, useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
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
  
  if(updatedDescription === '') {
    setUpdatedDescription(category?.description)
  }

  if(updatedName === '') {
    setUpdatedName(category?.name)
  }

  function submitFormData(event: FormEvent) {
    event.preventDefault();

    api.put(`/categories/editcategory/${id}`, { id, "name": updatedName, "description": updatedDescription})
    .then(() => alert("Categoria alterada com sucesso!"))

    setUpdatedName('');
    setUpdatedDescription('');
    toogleOpenEdit();
    updateList(id);
    window.location.reload();
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value === '') {
      setUpdatedName(e.target.defaultValue)
    }
    setUpdatedName(e.target.value)
  }

  function handleChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setUpdatedDescription(e.target.value)
  }

  function toogleOpenEdit() {
    setIsEdit(!isEdit);
  }

  function updateList(id: string) {
    api.get(`categories/${id}`)
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
            <form onSubmit={submitFormData} key={category?.id}>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Nome"
                defaultValue={category?.name}
                onChange={handleChangeName}
              />
              <input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="Descrição"
                defaultValue={category?.description}
                onChange={handleChangeDescription}
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
      <button
        onClick={toogleOpenEdit}
        title="Editar"
      >
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}