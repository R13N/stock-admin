import React, { FormEvent, useEffect, useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import { api } from "../../../../services/api";
import { ListProductsOrder } from "../../ProductsOrder/ListProductsOrder";
import { Container, Content } from "./styles";

interface IIncomingProps {
  id: string;
  type: string;
  company: string;
  nf: string;
  created_at: string;
}

interface IUpdatedIncomingProps {
  id: string;
  type: string;
  company: string;
  nf: string;
}

export function Incoming({ id, company, nf, created_at }: IIncomingProps) {

  const [isEdit, setIsEdit] = useState(false);

  const [updatedCompany, setUpdatedCompany] = useState('');
  const [updatedNF, setUpdatedNF] = useState('');

  const [incoming, setIncoming] = useState<IUpdatedIncomingProps>(Object)

  if(updatedCompany === '') {
    setUpdatedCompany(incoming?.company);
  }

  if(updatedNF=== '') {
    setUpdatedNF(incoming?.nf);
  }
  
  function toggleOpenEdit() {
    setIsEdit(!isEdit);
  }

  function onSubmitFormData(e: FormEvent) {
    e.preventDefault();

    api.put(`/orders/updateorder/${id}`, {id, "company": updatedCompany, "nf": updatedNF})
      .then(() => alert("Entrada alterada com sucesso!"))

    setUpdatedCompany('');
    setUpdatedNF('');
    updateList(id);
    toggleOpenEdit();
    window.location.reload();
  }

  function updateList(id: string) {
    api.get(`/orders/${id}`)
    .then(response => setIncoming(response.data))
  }

  useEffect(() => {
    updateList(id)
  }, [id])

  return (
    <Container>
      <Content>
        <header>
          {isEdit ?
          <form onSubmit={onSubmitFormData}>
            <input 
              type="text"
              defaultValue={incoming.company} 
              onChange={e => setUpdatedCompany(e.target.value)}
            />
            <input 
              type="text"
              defaultValue={incoming.nf} 
              onChange={e => setUpdatedNF(e.target.value)}
            />
            <button 
              type="submit">
              <FiSave size={24}/>
            </button>
          </form>
          :
          <div>
            <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(created_at))}</span>
            <span>{company}</span>
            <span>{nf}</span>
          </div>
          }
        </header>
        <button
          onClick={toggleOpenEdit}
          >
          <FiEdit size={24}/>
        </button>
      </Content>
      <ListProductsOrder
        id={id}
      />
    </Container>
  )
}