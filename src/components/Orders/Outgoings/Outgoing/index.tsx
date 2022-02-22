import { FormEvent, useEffect, useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import { api } from "../../../../services/api";
import { Container } from "./styles";

interface IOutgoingProps {
  id: string;
  type: string;
  destination: string
  created_at: string;
}

interface IUpdatedOutgoingProps {
  id: string;
  type: string;
  destination: string
  created_at: string;
}

export function Outgoing({ id, destination, created_at }: IOutgoingProps) {

  const [isEdit, setIsEdit] = useState(false);

  const [updatedDestination, setUpdatedDestination] = useState('');

  const [outgoing, setOutgoing] = useState<IUpdatedOutgoingProps>(Object)

  if(updatedDestination === '') {
    setUpdatedDestination(outgoing?.destination)
  }

  function toggleOpenEdit() {
    setIsEdit(!isEdit);
  }

  function onSubmitFormData(e: FormEvent) {
    e.preventDefault();

    api.put(`/orders/updateorder/${id}`, {id, "destination": updatedDestination})
      .then(() => alert("Destino alterado com sucesso."))

    setUpdatedDestination('');
    updateList(id);
    toggleOpenEdit();
    window.location.reload();
  }

  function updateList(id: string) {
    api.get(`/orders/${id}`)
    .then(response => setOutgoing(response.data))
  }

  useEffect(() => {
    updateList(id)
  },[id])

  return (
    <Container>
      
      <header>
        {isEdit ?
          <form onSubmit={onSubmitFormData}>
            <span>Recebedor</span>
            <input 
              type="text"
              defaultValue={outgoing.destination}
              onChange={e => setUpdatedDestination(e.target.value)}
            />
            <button 
              type="submit">
              <FiSave size={24}/>
            </button>
          </form>
          :
          <div>
            <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(created_at))}</span>
            <span>{destination}</span>
          </div> 
        }
      </header>
      <button
        onClick={toggleOpenEdit}
      >
        <FiEdit size={24}/>
      </button>
    </Container>
  )
}