import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { ListIncomings } from "../../components/Orders/Incomings/ListIncomings";
import { NewIncomingModal } from "../../components/Orders/Incomings/NewIncomingModal";
import { api } from "../../services/api";

import { Header } from "./styles";

interface IIncomingsProps {
  id: string;
  type: "entrada";
  company: string;
  nf: string;
  created_at: string;
}

export function Incomings() {

  const [incomings, setIncomings] = useState<IIncomingsProps[]>([]);
  const [filteredIncomings, setFilteredIncomings] = useState<IIncomingsProps[]>([]);
  const [filterValue, setFilterValue] = useState('');

  const [isNewIncomingModalOpen, setIsNewIncomingModalOpen] = useState(false);


  function handleOpenNewIncomingModal() {
    setIsNewIncomingModalOpen(true);
  }

  function handleCloseNewIncomingModal() {
    setIsNewIncomingModalOpen(false);
    updateList();
  }

  function handleFilteringIncomings(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
    const newFilter = incomings.filter(value => {
      return (
        value.company.toLowerCase().includes(filterValue.toLowerCase()) ||
        value.nf.toLowerCase().includes(filterValue.toLowerCase())
      )
    })
    setFilteredIncomings(newFilter);
  }

  async function updateList() {
    await api.get("/orders/filter", { params: {"type": "entrada"} })
    .then(response => setIncomings(response.data))
    // .then(response => console.log(response))
  }
  // console.log(incomings)

  useEffect(() => {
    if(filterValue === ""){
      setFilteredIncomings(incomings);
    }
  }, [filterValue, incomings])

  useEffect(() => {
    updateList();
  }, [])

  return (
    <>
    <NewIncomingModal 
      isOpen={isNewIncomingModalOpen}
      onRequestClose={handleCloseNewIncomingModal}
    />
     <Header>
        <h2>Listar Entradas</h2>
        <button
          onClick={handleOpenNewIncomingModal}
        >
          Cadastrar Nova Entrada
        </button>
        <input 
          type="text" 
          name="search" 
          id="search"
          placeholder="Pesquisar"
          value={filterValue}
          onChange={handleFilteringIncomings}
        />
        <span>
          <FiSearch size={24}/>
        </span>
      </Header>
      <ListIncomings incomings={filteredIncomings}/>
      <Outlet />
    </>
  )
}